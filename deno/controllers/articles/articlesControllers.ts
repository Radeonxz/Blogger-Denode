import { Context } from "https://deno.land/x/oak@v10.4.0/mod.ts";

import db from "../../mongodb.ts";

const articlesCollection = db.collection("articles");

const getArticles = async (ctx: any) => {
  const articles = await articlesCollection.find();
  ctx.render("articles/allArticles.ejs", { articles });
};

const newArticlePage = async (ctx: any) => {
  ctx.render("articles/newArticle.ejs");
};

const postArticle = async (ctx: any) => {
  ctx.response.status = 200;
};

export { getArticles, newArticlePage, postArticle };
