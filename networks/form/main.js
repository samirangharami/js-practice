import { requestHandler } from "./src/app.js";

const main = async () => {
  await Deno.serve(
    {
      port: 8000,
      onListen: () => {
        console.log("Listening on port: 8000");
      },
    },
    requestHandler,
  );
};

main();
