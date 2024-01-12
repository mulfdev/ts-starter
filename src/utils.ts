import "dotenv/config";
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

if (!process.env.RPC_URL) {
  throw new Error("RPC_URL env var required");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(process.env.RPC_URL),
});
