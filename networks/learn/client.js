const encoder = new TextEncoder();
const decoder = new TextDecoder();

const server = await Deno.connect({
  port: 8000,
  transport: "tcp",
});

for await (const chunk of Deno.stdin.readable) {
  const buf = new Uint8Array(1024);
  const msg = decoder.decode(chunk).trim();
  server.write(chunk);
  if (msg === "exit") {
    console.log("connection closed");
    break;
  }
  const size = await server.read(buf);
  console.log(decoder.decode(buf.subarray(0, size)));
}
server.close();
