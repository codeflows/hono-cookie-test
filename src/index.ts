import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";

const app = new Hono();

app.get("/works", (c) => {
  setCookie(c, "hello", "world");
  setCookie(c, "hello", "world2");
  return c.body("works");
});

app.get("/works-2", (c) => {
  setCookie(c, "hello", "world");
  setCookie(c, "hello", "world2");

  const res = new Response("works");
  return c.body(res.body);
});

app.get("/does-not-work", (c) => {
  setCookie(c, "hello", "world");
  setCookie(c, "hello", "world2");

  const res = new Response("does not work");
  return c.body(res.body, res);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
