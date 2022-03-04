import { Router } from "https://deno.land/x/oak@v10.4.0/mod.ts";

import {
  getArticles,
  newArticlePage,
  postArticle
} from "../../controllers/articles/articlesControllers.ts";

const articlesRouter = new Router();

articlesRouter
  .get("/new", newArticlePage)
  .get("/", getArticles)
  .post("/", postArticle);

export default articlesRouter;
