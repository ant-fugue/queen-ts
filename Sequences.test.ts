import Queen from "./Queen.ts";
import { assertEquals } from "./deps.ts";

// A000169
// n^(n-1)
Deno.test("A000169", () => {
  assertEquals(
    Queen.iota(1, 10).map((elem: number, i: number) => Math.pow(elem, i)),
    [1, 2, 9, 64, 625, 7776, 117649, 2097152, 43046721, 1000000000]
  );
});

// A000566
// 七角数
Deno.test("A000566", () => {
  assertEquals(
    Queen.iota(0, 10).map((elem) => (5 * elem ** 2 - 3 * elem) / 2),
    [0, 1, 7, 18, 34, 55, 81, 112, 148, 189, 235]
  );
});

// harshad number
// A005349
// 自然数の各位の数字和が元の数の約数に含まれている自然数
Deno.test("A005349", () => {
  const f = (num: number) => {
    const divisors = Queen.divOf(num);
    const sumOfDigits = Queen.getIntArrayFromInt(num).reduce(
      (a, c) => a + c,
      0
    );
    return divisors.includes(sumOfDigits) ? true : false;
  };
  assertEquals(
    Queen.iota(1, 150).filter((elem) => f(elem)),
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45,
      48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112,
      114, 117, 120, 126, 132, 133, 135, 140, 144, 150,
    ]
  );
});

// A006450
// x番目の素数である場合、そのx自体も素数である数列
Deno.test("A006450", () => {
  assertEquals(
    Queen.primeSeq(200).filter((elem, i) => Queen.isPrime(i + 1)),
    [3, 5, 11, 17, 31, 41, 59, 67, 83, 109, 127, 157, 179, 191]
  );
});

// A007500
// Primes whose reversal in base 10 is also prime
Deno.test("A007500", () => {
  const isA007500 = (elem: number) => {
    if (!Queen.isPrime(elem)) {
      return false;
    }
    if (Queen.isPrime(Number(elem.toString().split("").reverse().join("")))) {
      return true;
    }
    return false;
  };
  assertEquals(
    Queen.iota(1, 200).filter((elem: number) => isA007500(elem)),
    [
      2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97, 101, 107, 113, 131, 149,
      151, 157, 167, 179, 181, 191, 199,
    ]
  );
});

// A007691
// multiply perfect number
Deno.test("A007691", () => {
  assertEquals(
    Queen.iota(1, 1000).filter((elem) => Queen.divSum(elem) % elem === 0),
    [1, 6, 28, 120, 496, 672]
  );
});

// A020458
// Primes that is composed from 2 and 3 only.
Deno.test("A020458", () => {
  const A020458SeqUnder = (num: number): number[] => {
    const primeSeqDigits = Queen.primeSeq(num).map((prime) =>
      prime.toString().split("")
    );

    const targetSeqDigits = primeSeqDigits.filter((prime) =>
      prime.every((elem) => elem === "2" || elem === "3")
    );

    return targetSeqDigits.map((elem) => parseInt(elem.join("")));
  };
  assertEquals(A020458SeqUnder(10000), [2, 3, 23, 223, 233, 2333, 3323]);
});
