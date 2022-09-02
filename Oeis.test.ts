import Oeis from "./Oeis.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

Deno.test("test", () => {
  Oeis.lunar.add("34", "55"), "55";
});
Deno.test("test", () => {
  Oeis.lunar.add("1", "1"), "1";
});
Deno.test("test", () => {
  Oeis.lunar.add("1", "2"), "2";
});
Deno.test("test", () => {
  Oeis.lunar.add("57", "63"), "67";
});

Deno.test("test", () => {
  Oeis.A020458SeqUnder(100), [2, 3, 23, 223, 233];
});
Deno.test("test", () => {
  Oeis.A005179SeqUnder(100), [1, 2, 4, 6, 12, 16, 24, 36, 48, 60, 64];
});
Deno.test("test", () => {
  Oeis.isA199988Num("10"), false;
});
Deno.test("test", () => {
  Oeis.isA199988Num("1116"), true;
});
Deno.test("test", () => {
  Oeis.A199988SeqUnder(1000),
    [6, 16, 23, 32, 61, 116, 123, 132, 161, 213, 231, 312, 321, 611];
});
