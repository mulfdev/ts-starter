import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { db, proposals, votes, sqlite } from "./db/schema.js";
import { publicClient, sleep } from "./utils.js";
import { nounsAbi } from "./abis/nouns.js";
async function getContractEvents() {
  /*  
    Alchemy allows up to 2000 blocks per request
  */
  const STEP_SIZE = 2000n;

  const blkNum = await publicClient.getBlockNumber();

  /*
    fromBlock is when the contract was initially deployed
    so we dont have to start from 0, set first 
    target to end of the provider block limit
  */
  let fromBlock = 12985453n;
  let toBlock = fromBlock + STEP_SIZE;

  while (true) {
    try {
      const logs = await publicClient.getContractEvents({
        address: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
        abi: nounsAbi,
        fromBlock,
        toBlock,
        strict: true,
      });

      for (const { eventName, args, transactionHash, blockNumber } of logs) {
        console.log(`processed block #: ${blockNumber}`);

        switch (eventName) {
          case "ProposalCreated": {
            await db.insert(proposals).values({
              id: Number(args.id),
              description: args.description,
              proposer: args.proposer,
              startBlock: Number(args.startBlock),
              endBlock: Number(args.endBlock),
            });

            break;
          }

          case "VoteCast": {
            await db.insert(votes).values({
              id: nanoid(),
              voter: args.voter as string,
              proposalId: Number(args.proposalId),
              support: Number(args.support),
              votes: Number(args.votes),
              reason: args.reason,
            });

            break;
          }

          case "ProposalExecuted": {
            await db
              .update(proposals)
              .set({ executed: true })
              .where(eq(proposals.id, Number(args.id)));

            break;
          }

          default: {
            console.log("Untracked event", transactionHash);
          }
        }
      }

      fromBlock = toBlock + 1n;
      toBlock = fromBlock + STEP_SIZE;
      if (fromBlock >= blkNum) {
        await sqlite.close();
        break;
      }

      await sleep(20);
    } catch (e: unknown) {
      console.log({ e });
      sqlite.close();
      break;
    }
  }
}

async function main() {
  await getContractEvents();
  console.log("Run complete");
  process.exit(0);
}

main();
