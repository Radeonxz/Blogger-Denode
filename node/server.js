const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const articleRouter = require("./routes/articles");
const Article = require("./models/article");

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use("/articles", articleRouter);

app.get("/", async (rep, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
