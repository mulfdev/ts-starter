// @ts-nocheck
import { writeFileSync } from "fs";
import { db } from "../utils.js";
import { proposals, votes } from "../db/schema.js";
import { eq } from "drizzle-orm";

const props = await db.select().from(proposals);

// writeFileSync()
let numFiles = 1;

async function writeFile() {
  let propObj = [];

  for (const prop of props) {
    if (prop.id % 50 === 0) {
      writeFileSync(
        `./src/export/data${numFiles}.json`,
        JSON.stringify(propObj)
      );
      numFiles++;

      propObj = [];
    }
    const votesInfo = await db
      .select({
        support: votes.support,
        voter: votes.voter,
        numberOfVotes: votes.votes,
        reason: votes.reason,
      })
      .from(votes)
      .where(eq(votes.proposalId, prop.id));
    propObj.push({ prop, votes: [] });
    propObj.find((item) => item.prop.id === prop.id)?.votes.push(...votesInfo);
  }
}

await writeFile();
