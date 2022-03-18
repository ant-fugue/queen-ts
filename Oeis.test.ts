import Oeis from "./Oeis";
import assert from "assert";

assert.equal(Oeis.lunar.add("34", "55"), "55");
assert.equal(Oeis.lunar.add("1", "1"), "1");
assert.equal(Oeis.lunar.add("1", "2"), "2");
assert.equal(Oeis.lunar.add("57", "63"), "67");

assert.deepStrictEqual(Oeis.A020458SeqUnder(100), [2, 3, 23, 223, 233]);
assert.deepStrictEqual(
  Oeis.A005179SeqUnder(100),
  [1, 2, 4, 6, 12, 16, 24, 36, 48, 60, 64]
);
assert.equal(Oeis.isA199988Num("10"), false);
assert.equal(Oeis.isA199988Num("1116"), true);
assert.deepStrictEqual(
  Oeis.A199988SeqUnder(1000),
  [6, 16, 23, 32, 61, 116, 123, 132, 161, 213, 231, 312, 321, 611]
);
