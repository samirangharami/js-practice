import { createRequestHandler } from "../src/request_handler.js";
import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("requestHandler", () => {
  it("for correct path", async () => {
    const readFile = () => "<h1>home<h1>";
    const requestHandler = createRequestHandler(readFile);
    const url = "http://localhost:8000/home";
    const request = new Request(url);
    const response = requestHandler(request);
    const body = await response.text();
    assertEquals(response.status, 200);
    assertEquals(response.headers.get("Content-Type"), "text/html");
    assertEquals(body, "<h1>home<h1>");
  });

  it("for incorrect path", () => {
    const readFile = () => "";
    const requestHandler = createRequestHandler(readFile);
    const url = "http://localhost:8000/incorrectPath";
    const request = new Request(url);
    const response = requestHandler(request);
    assertEquals(response.status, 404);
    assertEquals(response.headers.get("Content-Type"), "text/html");
  });
});
