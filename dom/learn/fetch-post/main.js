import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

const app = new Hono();

const comments = [];

app.use(logger());

app.post("/add-comment", async (c) => {
  const body = await c.req.parseBody();

  comments.push({
    username: body.username,
    text: body.text,
  });

  return c.json({ success: true });
});

app.get("/comments", (c) => {
  return c.json(comments);
});

app.get("/", async (c) => {
  const page = await Deno.readTextFile("./index.html");
  return c.html(page);
});

app.get("*", serveStatic({ root: "./public" }));

Deno.serve({ port: 8000 }, app.fetch);
