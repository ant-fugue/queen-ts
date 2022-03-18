import Queen from "./Queen";
import assert from "assert";

assert.deepStrictEqual(Queen.getIntArrayFromInt(100), [1, 0, 0]);

// assert.deepStrictEqual(Queen.iota(2, 1), []);
assert.deepStrictEqual(Queen.iota(3, 6), [3, 4, 5, 6]);
assert.deepStrictEqual(Queen.divOf(20), [1, 2, 4, 5, 10, 20]);
assert.equal(Queen.divSum(20), 42);
assert.equal(Queen.divProduct(12), 1728);
assert.deepStrictEqual(Queen.numOfDiv(20), 6);
assert.deepStrictEqual(Queen.divisorsExceptSelf(20), [1, 2, 4, 5, 10]);
assert.equal(Queen.divSumExceptSelf(20), 22);
assert.equal(Queen.numOfDivExceptSelf(20), 5);

assert.equal(Queen.divGroup(6), "perfect");
assert.equal(Queen.divGroup(3), "deficient");
assert.equal(Queen.divGroup(18), "surplus");

assert.deepStrictEqual(Queen.perfectNumSeq(1000), [6, 28, 496]);
assert.deepStrictEqual(
  Queen.deficientNumSeq(20),
  [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19]
);
assert.deepStrictEqual(Queen.surplusNumSeq(20), [12, 18, 20]);

assert.equal(Queen.isPrime(10), false);
assert.equal(Queen.isPrime(11), true);

assert.deepStrictEqual(Queen.primeSeq(10), [2, 3, 5, 7]);
assert.deepStrictEqual(Queen.compositeSeq(10), [1, 4, 6, 8, 9, 10]);

assert.equal(Queen.isHighlyComposite(5), false);
assert.equal(Queen.isHighlyComposite(10), false);
assert.equal(Queen.isHighlyComposite(12), true);

assert.deepStrictEqual(Queen.highlyCompositeSeq(18), [1, 4, 6, 12]);

assert.equal(Queen.isTriangularNum(10), true);
assert.equal(Queen.isTriangularNum(7), false);

assert.deepStrictEqual(
  Queen.triangleNumSeq(50),
  [0, 1, 3, 6, 10, 15, 21, 28, 36, 45]
);

assert.equal(Queen.fact(5), 120);

assert.equal(Queen.sigma(1, 5, Queen.fact), 153);
assert.equal(Queen.sigma(1, 5, Queen.id), 15);

assert.equal(Queen.digitsToBinary(0), "0");
assert.equal(Queen.digitsToBinary(10), "1010");
assert.equal(Queen.digitsToBinary(15), "1111");

assert.equal(Queen.isTriangle(0, 0, 3), false);
assert.equal(Queen.isTriangle(1, 2, 3), false);
assert.equal(Queen.isTriangle(2, 3, 4), true);

// assert.equal(Queen.fib(6), 5);
// assert.deepStrictEqual(Queen.fibSeq(6), [0, 1, 1, 2, 3, 5]);

// assert.deepStrictEqual(Queen.leftFact(5), [0, 1, 2, 4, 10, 34]);
assert.equal(Queen.sumOfPrimesUnder(10), 17);
assert.equal(Queen.isSophieGermanPrime(23), true);
assert.equal(Queen.isSophieGermanPrime(10), false);
assert.equal(Queen.isSophieGermanPrime(13), false);

assert.equal(Queen.divisorFunction(2, 6), 50);

/* 
  linear algebra
*/

(() => {
  const m = Queen.matrix.create(3, 2);
  const addTest = Queen.matrix.add(m, 5);
  assert.deepStrictEqual(addTest.matrix, [
    [5, 5],
    [5, 5],
    [5, 5],
  ]);
  const scalarTest = Queen.matrix.multiply(addTest, 3);
  assert.deepStrictEqual(scalarTest.matrix, [
    [15, 15],
    [15, 15],
    [15, 15],
  ]);
})();

// assert.deepStrictEqual(Queen.scalar([2, 8, 9], 2), [4, 16, 18]);
// assert.deepStrictEqual(Queen.scalar([2, 8, 9], -2), [-4, -16, -18]);
// assert.deepStrictEqual(Queen.scalar([2, 8, 9], 0), [0, 0, 0]);
// assert.deepStrictEqual(Queen.elementwise([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// assert.deepStrictEqual(Queen.elementwise([1, 2, 3], [0, 0, 0]), [1, 2, 3]);

/* 
From here, I'll implement OEIS sequences
*/

assert.equal(Queen.lunar.add("34", "55"), "55");
assert.equal(Queen.lunar.add("1", "1"), "1");
assert.equal(Queen.lunar.add("1", "2"), "2");
assert.equal(Queen.lunar.add("57", "63"), "67");

assert.deepStrictEqual(Queen.A020458SeqUnder(100), [2, 3, 23, 223, 233]);
assert.deepStrictEqual(
  Queen.A005179SeqUnder(100),
  [1, 2, 4, 6, 12, 16, 24, 36, 48, 60, 64]
);
assert.equal(Queen.isA199988Num("10"), false);
assert.equal(Queen.isA199988Num("1116"), true);
assert.deepStrictEqual(
  Queen.A199988SeqUnder(1000),
  [6, 16, 23, 32, 61, 116, 123, 132, 161, 213, 231, 312, 321, 611]
);
