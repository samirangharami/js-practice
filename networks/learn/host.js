const encoder = new TextEncoder();
const decoder = new TextDecoder();

const listener = Deno.listen({ port: 8000, transport: "tcp" });

console.log("listening on 127.0.0.1:8000");

const handleConnection = async (conn, buf) => {
  while (true) {
    const size = await conn.read(buf);
    const msg = decoder.decode(buf.subarray(0, size)).trim();
    if (msg === "exit") {
      conn.close();
      console.log("1 connection closed");
      return;
    }
    await conn.write(encoder.encode(`Server - received: ${msg} `));
  }
};

const host = async () => {
  for await (const conn of listener) {
    const buf = new Uint8Array(1024);
    console.log("new connection established");
    try {
      handleConnection(conn, buf);
    } catch (error) {
      console.log(error.message);
    }
  }
};

await host();
