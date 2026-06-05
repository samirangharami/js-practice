import { createApp } from "./src/app.js";

const main = async () => {
  const flags = JSON.parse(await Deno.readTextFile("./public/flags.json"));
  const app = createApp(flags);
  Deno.serve({ port: 8000 }, app.fetch);
};

main();
