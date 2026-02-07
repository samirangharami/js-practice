import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { levenshteinDistance } from "../src/levenshtein_distance.js";

describe("levenshtein distance", () => {
  it("empty string actual and 2 char string expected", () => {
    assertEquals(levenshteinDistance("", "hi"), 2);
  });
  it("empty string actual and 5 char string expected", () => {
    assertEquals(levenshteinDistance("", "hello"), 5);
  });
  it("only one char matching", () => {
    assertEquals(levenshteinDistance("e", "hello"), 4);
  });
});
