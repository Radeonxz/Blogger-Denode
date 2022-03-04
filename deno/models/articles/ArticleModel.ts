import { Bson } from "https://deno.land/x/mongo@v0.29.2/mod.ts";

import db from "../../mongodb.ts";

interface ArticleSchema {
  _id: Bson.ObjectId;
  title: string;
  description: string;
  markdown: string;
  createdAt: Date;
  slug: string;
}

const ArticleModel = db.collection<ArticleSchema>("articles");

export default ArticleModel;
