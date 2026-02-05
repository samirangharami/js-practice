const encoder = new TextEncoder();
const decoder = new TextDecoder();

const transformer = new TransformStream({
  transform(chunk, controller) {
    const text = chunk.map((charCode) => charCode - 1);
    controller.enqueue(text);
  },
});

Deno.stdin.readable.pipeThrough(transformer).pipeTo(Deno.stdout.writable);
