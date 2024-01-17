import "dotenv/config";
import { createPublicClient, webSocket } from "viem";
import { mainnet } from "viem/chains";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

if (!process.env.RPC_URL) {
  throw new Error("RPC_URL env var required");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: webSocket(process.env.RPC_URL),
});

export const sqlite = new Database("./src/db/sqlite.db");
sqlite.pragma("journal_mode = WAL");
export const db = drizzle(sqlite);
