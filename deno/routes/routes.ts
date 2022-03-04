import { Router } from "https://deno.land/x/oak@v10.4.0/mod.ts";

import articlesRouter from "./articles/articlesRoutes.ts";
import ArticleModel from "../models/articles/ArticleModel.ts";

const appRouter = new Router();

appRouter
  .get("/", async (ctx: any) => {
    try {
      const articles = await ArticleModel.find().toArray();
      ctx.render("home/home.ejs", { articles });
    } catch (error) {
      console.log(error);
    }
  })
  .use("/articles", articlesRouter.routes(), articlesRouter.allowedMethods());

export default appRouter;
