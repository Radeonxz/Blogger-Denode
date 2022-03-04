import { Application } from "https://deno.land/x/oak@v10.4.0/mod.ts";
// import {
//   viewEngine,
//   engineFactory,
//   adapterFactory,
//   ViewConfig
// } from "https://deno.land/x/view_engine@v1.5.0/mod.ts";
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts";

import appRouter from "./routes/routes.ts";

// View engine setup
// const ejsEngine = engineFactory.getEjsEngine();
// const oakAdapter = adapterFactory.getOakAdapter();

// Init app server
const app = new Application();

// const viewConfig: ViewConfig = {
//   viewRoot: "views"
// };
// app.use(viewEngine(oakAdapter, ejsEngine, viewConfig));

// Routes and methods setup
app.use(appRouter.routes());
app.use(appRouter.allowedMethods());

// Relative path setup for static content
app.use(staticFiles("public"));

console.log(`Server is running on PORT: 8000.`);
await app.listen({ port: 8000 });
