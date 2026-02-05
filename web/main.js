import { createRequestHandler } from "./src/request_handler.js";

const main = () => {
  const readFile = (path) => Deno.readTextFileSync(path);
  const handleRequest = createRequestHandler(readFile);
  Deno.serve(handleRequest);
};

main();
