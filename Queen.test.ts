import Queen from "./Queen.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

Deno.test(
  "getIntArrayFromInt() returns the array which contains integers which are decomposed to digits from original integer",
  () => {
    assertEquals(Queen.getIntArrayFromInt(1), [1]);
    assertEquals(Queen.getIntArrayFromInt(23), [2, 3]);
    assertEquals(Queen.getIntArrayFromInt(100), [1, 0, 0]);
  }
);

// Deno.test("test",()=>{assertEquals(Queen.iota(2, 1), [])});
Deno.test("test", () => {
  assertEquals(Queen.iota(3, 6), [3, 4, 5, 6]);
});
Deno.test("test", () => {
  assertEquals(Queen.divOf(20), [1, 2, 4, 5, 10, 20]);
});
Deno.test("test", () => {
  assertEquals(Queen.divSum(20), 42);
});
Deno.test("test", () => {
  assertEquals(Queen.divProduct(12), 1728);
});
Deno.test("test", () => {
  assertEquals(Queen.numOfDiv(20), 6);
});
Deno.test("test", () => {
  assertEquals(Queen.divisorsExceptSelf(20), [1, 2, 4, 5, 10]);
});
Deno.test("test", () => {
  assertEquals(Queen.divSumExceptSelf(20), 22);
});
Deno.test("test", () => {
  assertEquals(Queen.numOfDivExceptSelf(20), 5);
});

Deno.test("test", () => {
  assertEquals(Queen.divGroup(6), "perfect");
});
Deno.test("test", () => {
  assertEquals(Queen.divGroup(3), "deficient");
});
Deno.test("test", () => {
  assertEquals(Queen.divGroup(18), "surplus");
});

Deno.test("test", () => {
  assertEquals(Queen.perfectNumSeq(1000), [6, 28, 496]);
});
Deno.test("test", () => {
  assertEquals(
    Queen.deficientNumSeq(20),
    [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19]
  );
});
Deno.test("test", () => {
  assertEquals(Queen.surplusNumSeq(20), [12, 18, 20]);
});

Deno.test("test", () => {
  assertEquals(Queen.isPrime(10), false);
});
Deno.test("test", () => {
  assertEquals(Queen.isPrime(11), true);
});

Deno.test("test", () => {
  assertEquals(Queen.primeSeq(10), [2, 3, 5, 7]);
});
Deno.test("test", () => {
  assertEquals(Queen.compositeSeq(10), [1, 4, 6, 8, 9, 10]);
});

Deno.test("test", () => {
  assertEquals(Queen.isHighlyComposite(5), false);
});
Deno.test("test", () => {
  assertEquals(Queen.isHighlyComposite(10), false);
});
Deno.test("test", () => {
  assertEquals(Queen.isHighlyComposite(12), true);
});

Deno.test("test", () => {
  assertEquals(Queen.highlyCompositeSeq(18), [1, 4, 6, 12]);
});

Deno.test("test", () => {
  assertEquals(Queen.isTriangularNum(10), true);
});
Deno.test("test", () => {
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
});
Deno.test("test", () => {
  assertEquals(Queen.digitsToBinary(10), "1010");
});
Deno.test("test", () => {
  assertEquals(Queen.digitsToBinary(15), "1111");
});

Deno.test("test", () => {
  assertEquals(Queen.isTriangle(0, 0, 3), false);
});
Deno.test("test", () => {
  assertEquals(Queen.isTriangle(1, 2, 3), false);
});
Deno.test("test", () => {
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
});
Deno.test("test", () => {
  assertEquals(Queen.isSophieGermanPrime(10), false);
});
Deno.test("test", () => {
  assertEquals(Queen.isSophieGermanPrime(13), false);
});

Deno.test("test", () => {
  assertEquals(Queen.divisorFunction(2, 6), 50);
});

Deno.test("isSquareFree", () => {
  assertEquals(Queen.isSquareFree(1), false);
  assertEquals(Queen.isSquareFree(8), false);
  assertEquals(Queen.isSquareFree(10), true);
});

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
