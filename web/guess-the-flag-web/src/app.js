import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

export const createApp = (flags) => {
  const app = new Hono();

  app.use(logger());

  app.use(async (context, next) => {
    context.set("flags", flags);
    await next();
  });

  app.use("*", serveStatic({ root: "./public" }));

  return app;
};
