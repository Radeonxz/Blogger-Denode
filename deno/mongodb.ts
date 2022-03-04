import {
  config,
  DotenvConfig
} from "https://deno.land/std@0.127.0/dotenv/mod.ts";
import { Bson, MongoClient } from "https://deno.land/x/mongo@v0.29.2/mod.ts";

const { MONGODB_URI, MONGODB_DB_NAME }: DotenvConfig = await config();

const client = new MongoClient();

await client.connect(MONGODB_URI);

const db = client.database(MONGODB_DB_NAME);

console.log(`DB: ${MONGODB_DB_NAME} connected.`);

export default db;
