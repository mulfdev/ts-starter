import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const proposals = sqliteTable("proposals", {
  id: integer("id").primaryKey().unique(),
  description: text("description"),
  proposer: text("proposer"),
  startBlock: integer("startBlock"),
  endBlock: integer("endBlock"),
  executed: integer("executed", { mode: "boolean" }).default(false),
});

export const votes = sqliteTable("votes", {
  id: text("id").unique(),
  voter: text("voter"),
  proposalId: integer("proposalId"),
  support: integer("support"),
  votes: integer("votes"),
  reason: text("reason"),
});
