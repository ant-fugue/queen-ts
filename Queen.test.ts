import Queen from "./Queen.ts";
import { assertEquals } from "./deps.ts";

Deno.test("getIntArrayFromInt", () => {
  assertEquals(Queen.getIntArrayFromInt(1), [1]);
  assertEquals(Queen.getIntArrayFromInt(23), [2, 3]);
  assertEquals(Queen.getIntArrayFromInt(100), [1, 0, 0]);
});

// Deno.test("test",()=>{assertEquals(Queen.iota(2, 1), [])});
Deno.test("iota", () => {
  assertEquals(Queen.iota(3, 6), [3, 4, 5, 6]);
});
Deno.test("divOf", () => {
  assertEquals(Queen.divOf(20), [1, 2, 4, 5, 10, 20]);
});
Deno.test("divSum", () => {
  assertEquals(Queen.divSum(20), 42);
});
Deno.test("divProduct", () => {
  assertEquals(Queen.divProduct(12), 1728);
});
Deno.test("numOfDiv", () => {
  assertEquals(Queen.numOfDiv(20), 6);
});
Deno.test("divisorsExceptSelf", () => {
  assertEquals(Queen.divisorsExceptSelf(20), [1, 2, 4, 5, 10]);
});
Deno.test("divSumExceptSelf", () => {
  assertEquals(Queen.divSumExceptSelf(20), 22);
});
Deno.test("numOfDivExceptSelf", () => {
  assertEquals(Queen.numOfDivExceptSelf(20), 5);
});

Deno.test("divGroup", () => {
  assertEquals(Queen.divGroup(3), "deficient");
  assertEquals(Queen.divGroup(6), "perfect");
  assertEquals(Queen.divGroup(18), "surplus");
});

Deno.test("perfectNumSeq", () => {
  assertEquals(Queen.perfectNumSeq(1000), [6, 28, 496]);
});
Deno.test("deficientNumSeq", () => {
  assertEquals(
    Queen.deficientNumSeq(20),
    [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19]
  );
});
Deno.test("surplusNumSeq", () => {
  assertEquals(Queen.surplusNumSeq(20), [12, 18, 20]);
});

Deno.test("isPrime", () => {
  assertEquals(Queen.isPrime(10), false);
  assertEquals(Queen.isPrime(11), true);
});

Deno.test("primeSeq", () => {
  assertEquals(Queen.primeSeq(10), [2, 3, 5, 7]);
});
Deno.test("compositeSeq", () => {
  assertEquals(Queen.compositeSeq(10), [1, 4, 6, 8, 9, 10]);
});

Deno.test("test", () => {
  assertEquals(Queen.isHighlyComposite(5), false);
  assertEquals(Queen.isHighlyComposite(10), false);
  assertEquals(Queen.isHighlyComposite(12), true);
});

Deno.test("test", () => {
  assertEquals(Queen.highlyCompositeSeq(18), [1, 4, 6, 12]);
});

Deno.test("test", () => {
  assertEquals(Queen.isTriangularNum(10), true);
  assertEquals(Queen.isTriangularNum(7), false);
});

Deno.test("test", () => {
  assertEquals(Queen.triangleNumSeq(50), [0, 1, 3, 6, 10, 15, 21, 28, 36, 45]);
});

Deno.test("test", () => {
  assertEquals(Queen.fact(5), 120);
});

Deno.test("test", () => {
  assertEquals(Queen.sigma(1, 5, Queen.fact), 153);
});
Deno.test("test", () => {
  assertEquals(Queen.sigma(1, 5, Queen.id), 15);
});

Deno.test("test", () => {
  assertEquals(Queen.digitsToBinary(0), "0");
  assertEquals(Queen.digitsToBinary(4), "100");
  assertEquals(Queen.digitsToBinary(10), "1010");
  assertEquals(Queen.digitsToBinary(15), "1111");
});

Deno.test("test", () => {
  assertEquals(Queen.isTriangle(0, 0, 3), false);
  assertEquals(Queen.isTriangle(1, 2, 3), false);
  assertEquals(Queen.isTriangle(2, 3, 4), true);
});

// Deno.test("test",()=>{assertEquals(Queen.fib(6), 5)});
// Deno.test("test",()=>{assertEquals(Queen.fibSeq(6), [0, 1, 1, 2, 3, 5])});

// Deno.test("test",()=>{assertEquals(Queen.leftFact(5), [0, 1, 2, 4, 10, 34])});
Deno.test("test", () => {
  assertEquals(Queen.sumOfPrimesUnder(10), 17);
});
Deno.test("test", () => {
  assertEquals(Queen.isSophieGermanPrime(23), true);
  assertEquals(Queen.isSophieGermanPrime(10), false);
  assertEquals(Queen.isSophieGermanPrime(13), false);
});

Deno.test("test", () => {
  assertEquals(Queen.divisorFunction(2, 6), 50);
});

Deno.test("isSquare", () => {
  assertEquals(Queen.isSquare(1), true);
  assertEquals(Queen.isSquare(16), true);
  assertEquals(Queen.isSquare(5), false);
});

Deno.test("isSquareFree", () => {
  assertEquals(Queen.isSquareFree(1), true);
  assertEquals(Queen.isSquareFree(8), false);
  assertEquals(Queen.isSquareFree(10), true);
});

Deno.test("collatz", () => {
  assertEquals(Queen.collatz(1), [1, 4, 2, 1]);
  assertEquals(
    Queen.collatz(7),
    [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
  );
});

Deno.test("primeFactor", () => {
  assertEquals(Queen.primeFactor(2), { 2: 1 });
  assertEquals(Queen.primeFactor(12), { 2: 2, 3: 1 });
  assertEquals(Queen.primeFactor(60), { 2: 2, 3: 1, 5: 1 });
});

Deno.test("primeFactorArr", () => {
  assertEquals(Queen.primeFactorArr(2), [2]);
  assertEquals(Queen.primeFactorArr(12), [2, 2, 3]);
  assertEquals(Queen.primeFactorArr(60), [2, 2, 3, 5]);
});

Deno.test("isPalindrome", () => {
  assertEquals(Queen.isPalindrome(5), true);
  assertEquals(Queen.isPalindrome(474), true);
  assertEquals(Queen.isPalindrome(45), false);
});

Deno.test(
  "getQuotient() returns the quotient from the given number and its divisor",
  () => {
    assertEquals(Queen.getQuotient(10, 2), 5);
    assertEquals(Queen.getQuotient(10, 3), 3);
    assertEquals(Queen.getQuotient(10, 11), 0);
  }
);

Deno.test(
  "getNthPolygon() returns the object which has vertex and edge properties",
  () => {
    assertEquals(Queen.genNthPolygon(5), { vertex: 5, edge: 5 });
  }
);

Deno.test("lunar addition keeps the bigger", () => {
  assertEquals(Queen.lunar.add("1", "1"), "1");
  assertEquals(Queen.lunar.add("1", "2"), "2");
  assertEquals(Queen.lunar.add("58", "19"), "59");
});

// Deno.test("lunar multiplication keeps the smaller", () => {
//   assertEquals(Queen.lunar.mult("1", "1"), "1");
//   assertEquals(Queen.lunar.mult("1", "2"), "1");
//   assertEquals(Queen.lunar.mult("17", "8"), "17");
//   assertEquals(Queen.lunar.mult("17", "24"), "124");
// });

/*
  linear algebra
*/

// (() => {
//   const m = Queen.matrix.create(3, 2)});
//   const addTest = Queen.matrix.add(m, 5);
//   Deno.test("test",()=>{assertEquals(addTest.matrix, [
//     [5, 5],
//     [5, 5],
//     [5, 5],
//   ])});
//   const scalarTest = Queen.matrix.multiply(addTest, 3);
//   Deno.test("test",()=>{assertEquals(scalarTest.matrix, [
//     [15, 15],
//     [15, 15],
//     [15, 15],
//   ])})
// ();

// Deno.test("test",()=>{assertEquals(Queen.scalar([2, 8, 9], 2), [4, 16, 18])});
// Deno.test("test",()=>{assertEquals(Queen.scalar([2, 8, 9], -2), [-4, -16, -18])});
// Deno.test("test",()=>{assertEquals(Queen.scalar([2, 8, 9], 0), [0, 0, 0])});
// Deno.test("test",()=>{assertEquals(Queen.elementwise([1, 2, 3], [4, 5, 6]), [5, 7, 9])});
// Deno.test("test",()=>{assertEquals(Queen.elementwise([1, 2, 3], [0, 0, 0]), [1, 2, 3])});
