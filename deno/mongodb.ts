import {
  config,
  DotenvConfig
} from "https://deno.land/std@0.127.0/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.29.2/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const { MONGODB_URI, MONGODB_DB_NAME }: DotenvConfig = await config();

const client = new MongoClient();

const dbUri = Deno.env.get("MONGODB_URI") || MONGODB_URI;
const dbName = Deno.env.get("MONGODB_DB_NAME") || MONGODB_DB_NAME;

await client.connect(dbUri);

const db = client.database(dbName);

console.log(`DB: ${dbName} connected.`);

export default db;
