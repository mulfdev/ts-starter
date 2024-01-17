import { writeFileSync } from "fs";
import { db } from "../utils.js";
import { proposals } from "../db/schema.js";

const props = await db.select().from(proposals).limit(5);

// writeFileSync()

const propObj = [];
for (const prop of props) {
  propObj.push(prop);
}

writeFileSync("./src/export/data.json", JSON.stringify(propObj));
