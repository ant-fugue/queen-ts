import Queen from "./Queen.ts";
import { assertEquals } from "./deps.ts";

const isPowersOfTwo = (num: number): boolean => Queen.isPowersOf(num, 2);
const isPowersOfThree = (num: number): boolean => Queen.isPowersOf(num, 3);

// A000032
// Lucas numbers beginning with 2
Deno.test("A000032", () => {
  const genLucasNum = (n: number): number => {
    if (n < 0 || !Number.isInteger(n)) {
      throw Error("the argument must be non-negative integer");
    }

    const lucas: Record<string, number> = {};
    const luca = (n: number): number => {
      if (lucas[n]) return lucas[n];

      if (n === 0) return 2;
      if (n === 1) return 1;

      return (lucas[n] = luca(n - 1) + luca(n - 2));
    };
    return luca(n);
  };
  const isLucasNum = (
    query: number,
    count: number = 1,
    last: number = 2
  ): boolean => {
    if (query === 1 || query === 2) {
      return true;
    }
    if (count < query) {
      return isLucasNum(query, count + last, count);
    }
    if (count === query) {
      return true;
    }
    return false;
  };
  assertEquals(
    Queen.utils.iota(0, 10).map((elem) => genLucasNum(elem)),
    [2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123]
  );
  // the order of first two element is different from the original
  assertEquals(
    Queen.utils.iota(1, 200).filter((elem) => isLucasNum(elem)),
    [1, 2, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199]
  );
});

// A000079
// powers of 2
Deno.test("A000079", () => {
  assertEquals(
    Queen.utils.iota(1, 1000).filter((elem) => isPowersOfTwo(elem)),
    [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
  );
});

// A000169
// n^(n-1)
Deno.test("A000169", () => {
  assertEquals(
    Queen.utils.iota(1, 10).map((elem: number, i: number) => Math.pow(elem, i)),
    [1, 2, 9, 64, 625, 7776, 117649, 2097152, 43046721, 1000000000]
  );
});

// A000215
// Fermat numbers
Deno.test("A000215", () => {
  const genFermatNum = (n: number): number => {
    if (n < 0 || !Number.isInteger(n)) {
      throw Error("the argument must be non-negative integer");
    }
    return 2 ** (2 ** n) + 1;
  };
  // [ ] need to find more optimized answer
  const isFermatNum = (n: number): boolean => {
    if (n < 3) {
      return false;
    }
    if (n === 3) {
      return true;
    }
    const arr = Queen.primeFactorArr(n - 1);
    if (
      arr.every((element) => element === 2) &&
      arr.length % 2 === 0 &&
      isPowersOfTwo(arr.length)
    ) {
      return true;
    }
    return false;
  };

  assertEquals(
    Queen.utils.iota(0, 5).map((elem) => genFermatNum(elem)),
    [3, 5, 17, 257, 65537, 4294967297]
  );
  assertEquals(
    Queen.utils.iota(0, 1000).filter((elem) => isFermatNum(elem)),
    [3, 5, 17, 257]
  );
});

// A000244
// powers of 3
Deno.test("A000244", () => {
  assertEquals(
    Queen.utils.iota(1, 1000).filter((elem) => isPowersOfThree(elem)),
    [1, 3, 9, 27, 81, 243, 729]
  );
});

// A000330
// Square pyramidal numbers: a(n) = 0^2 + 1^2 + 2^2 + ... + n^2 = n*(n+1)*(2*n+1)/6.
Deno.test("A000330", () => {
  const nthA000330Number = (n: number): number =>
    (n * (n + 1) * (2 * n + 1)) / 6;

  assertEquals(
    Queen.utils.iota(0, 10).map((elem) => nthA000330Number(elem)),
    [0, 1, 5, 14, 30, 55, 91, 140, 204, 285, 385]
  );
});

// A000566
// 七角数
Deno.test("A000566", () => {
  assertEquals(
    Queen.utils.iota(0, 10).map((elem) => (5 * elem ** 2 - 3 * elem) / 2),
    [0, 1, 7, 18, 34, 55, 81, 112, 148, 189, 235]
  );
});

// A000930
// Narayana's cows sequence: a(0) = a(1) = a(2) = 1; thereafter a(n) = a(n-1) + a(n-3).
Deno.test("A000930", () => {
  const nthA000930Number = (n: number): number => {
    if (!Number.isInteger(n) || n < 0) {
      throw Error("arguments must be a natural number");
    }
    const items: Record<string, number> = {};
    if (items[n]) return items[n];
    if (n <= 2) {
      return 1;
    }
    return (items[n] = nthA000930Number(n - 1) + nthA000930Number(n - 3));
  };
  assertEquals(
    Queen.utils.iota(0, 10).map((elem) => nthA000930Number(elem)),
    [1, 1, 1, 2, 3, 4, 6, 9, 13, 19, 28]
  );
});
// A001097
// twin primes
// Deno.test("A001097", () => {
//   const isTwinPrime = (num: number) =>
//     Queen.isPrime(num) && (Queen.isPrime(num - 2) || Queen.isPrime(num + 2));
//   assertEquals(
//     Queen.utils.iota(1, 100).filter((elem) => isTwinPrime(elem)),
//     [3, 5, 7, 11, 13, 17, 19, 29, 31, 41, 43, 59, 61, 71, 73]
//   );
// });

Deno.test("A001539", () => {
  const generateA001539Num = (n: number): number => {
    if (!Number.isInteger(n)) {
      throw Error("input should be integer");
    }
    return (4 * n + 1) * (4 * n + 3);
  };

  assertEquals(
    Queen.utils.iota(0, 10).map((elem) => generateA001539Num(elem)),
    [3, 35, 99, 195, 323, 483, 675, 899, 1155, 1443, 1763]
  );
});

// A002113
Deno.test("A002113", () => {
  assertEquals(
    Queen.utils.iota(0, 200).filter((elem) => Queen.isPalindrome(elem)),
    [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101,
      111, 121, 131, 141, 151, 161, 171, 181, 191,
    ]
  );
});

// Deno.test("A0035123", () => {
//   const isA035123 = (n: number): boolean => {
//   };
//   assertEquals(
//     Queen.utils.iota(1, 200).filter((elem) => isA035123(elem)),
//     [12, 13, 21, 31, 33, 99, 102, 103, 112, 113, 122]
//   );
// });

// A003159
Deno.test("A003159", () => {
  const isA003159 = (num: number): boolean => {
    const binRepReverse = Queen.utils
      .digitsToBinary(num)
      .split("")
      .reverse()
      .join("");
    let counter: number = 0;
    for (let i = 0; i < binRepReverse.length; i++) {
      if (binRepReverse[i] === "1") {
        break;
      }
      if (binRepReverse[i] === "0") {
        counter++;
      }
    }
    return counter % 2 === 0;
  };

  assertEquals(
    Queen.utils.iota(1, 50).filter((elem) => isA003159(elem)),
    [
      1, 3, 4, 5, 7, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 25, 27, 28, 29,
      31, 33, 35, 36, 37, 39, 41, 43, 44, 45, 47, 48, 49,
    ]
  );
});

// A003387
// [ ] revise later
// Deno.test("A003387", () => {
//   const genA003387Num = (index: number): any => {
//     Queen.utils.checkInputIsNonNegativeInt(index);
//     const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];
//     while (index > 0) {
//       for (let j = 0; j < arr.length; j++) {
//         index--;
//         if (index === 0) {
//           break;
//         }
//         arr[j] = arr[j] + 1;
//       }
//     }
//     return arr.map((elem) => elem ** 8).reduce((a, c) => a + c, 0);
//   };
//   assertEquals(
//     Queen.utils.iota(1, 13).map((elem) => genA003387Num(elem)),
//     [9, 264, 519, 774, 1029, 1284, 1539, 1794, 2049, 2304, 6569, 6824, 7079]
//   );
// });
// A003586
Deno.test("A003586", () => {
  const isThreeSmoothNum = (num: number): boolean => {
    if (!Number.isInteger(num) || num < 0) {
      throw Error("the argument should be integer");
    }
    while (num !== 1) {
      if (num % 2 === 0) num = num / 2;
      else if (num % 3 === 0) num = num / 3;
      else return false;
    }
    return true;
  };
  assertEquals(
    Queen.utils.iota(1, 100).filter((elem) => isThreeSmoothNum(elem)),
    [1, 2, 3, 4, 6, 8, 9, 12, 16, 18, 24, 27, 32, 36, 48, 54, 64, 72, 81, 96]
  );
});

// A003601
Deno.test("A003601", () => {
  const isA003601 = (n: number): boolean => {
    if (n <= 0 || !Number.isInteger(n)) {
      throw Error("the argument must be natural numbers");
    }
    const divisors: number[] = Queen.divOf(n);
    const average = divisors.reduce((acc: number, cur: number) => acc + cur, 0);
    if (Number.isInteger(average / divisors.length)) {
      return true;
    }
    return false;
  };
  assertEquals(
    Queen.utils.iota(1, 100).filter((elem) => isA003601(elem)),
    [
      1, 3, 5, 6, 7, 11, 13, 14, 15, 17, 19, 20, 21, 22, 23, 27, 29, 30, 31, 33,
      35, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 51, 53, 54, 55, 56, 57,
      59, 60, 61, 62, 65, 66, 67, 68, 69, 70, 71, 73, 77, 78, 79, 83, 85, 86,
      87, 89, 91, 92, 93, 94, 95, 96, 97, 99,
    ]
  );
});

// A005117
// Squarefree numbers: numbers that are not divisible by a square greater than 1.
Deno.test("A005117", () => {
  assertEquals(
    Queen.utils.iota(1, 50).filter((elem) => Queen.isSquareFree(elem)),
    [
      1, 2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30, 31,
      33, 34, 35, 37, 38, 39, 41, 42, 43, 46, 47,
    ]
  );
});
// A005179
// Deno.test("A005179", () => {
//   const A005179SeqUnder = (num: number): number[] => {
//     const seq = Queen.utils.iota(1, num);
//     const div = [];
//     const result = [];

//     seq.forEach((elem: number, i: number) => {
//       const numOfDiv: number[] = Queen.numOfDiv(elem);
//       if (!div.includes(numOfDiv)) {
//         div.push(numOfDiv);
//         result.push(elem);
//       }
//     });
//     return result;
//   };
// });

// harshad number
// A005349
// 自然数の各位の数字和が元の数の約数に含まれている自然数
Deno.test("A005349", () => {
  const f = (num: number) => {
    const divisors = Queen.divOf(num);
    const sumOfDigits = Queen.utils
      .getIntArrayFromInt(num)
      .reduce((a, c) => a + c, 0);
    return divisors.includes(sumOfDigits) ? true : false;
  };
  assertEquals(
    Queen.utils.iota(1, 150).filter((elem) => f(elem)),
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
    Queen.utils.iota(1, 200).filter((elem: number) => isA007500(elem)),
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
    Queen.utils.iota(1, 1000).filter((elem) => Queen.divSum(elem) % elem === 0),
    [1, 6, 28, 120, 496, 672]
  );
});

// https://www.youtube.com/watch?v=prh72BLNjIk
// [ ] do later
const genA010060 = (i: number): any => {
  if (!Number.isInteger(i) || i < 0) {
    throw Error("the argument must be non-negative integers");
  }

  if (i === 0) return "0";
  if (i === 1) return "1";
  if (i === 2) return "10";

  return (
    genA010060(i - 1).toString() +
    (genA010060(i - 1) ^ genA010060(i - 1)).toString()
  );
};

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

// A023194
// 約数の和が素数になる数の数列
Deno.test("A023194", () => {
  assertEquals(
    Queen.utils
      .iota(1, 1000)
      .filter((elem) => Queen.isPrime(Queen.divSum(elem))),
    [2, 4, 9, 16, 25, 64, 289, 729]
  );
});

// A024770
// Right-truncatable primes
const isRightTruncatablePrime = (n: number): boolean => {
  Queen.utils.checkInputIsNonNegativeInt(n);

  let result = true;

  let numStr = n.toString();
  const length = numStr.length;

  for (let i = 0; i < length; i++) {
    if (!Queen.isPrime(parseInt(numStr))) {
      result = false;
    }
    numStr = numStr.substring(0, numStr.length - 1);
  }
  return result;
};

Deno.test("A024770", () => {
  assertEquals(
    Queen.utils.iota(1, 500).filter((elem) => isRightTruncatablePrime(elem)),
    [
      2, 3, 5, 7, 23, 29, 31, 37, 53, 59, 71, 73, 79, 233, 239, 293, 311, 313,
      317, 373, 379,
    ]
  );
});

// [ ] fails test, find the cause later
// A024785
// Right-truncatable primes
// const isLeftTruncatablePrime = (n: number): boolean => {
//   Queen.checkInputIsNonNegativeInt(n);

//   let result = true;

//   let numStr = n.toString();
//   const length = numStr.length;

//   for (let i = 0; i < length; i++) {
//     if (!Queen.isPrime(parseInt(numStr))) {
//       result = false;
//     }
//     console.log(numStr);
//     numStr = numStr.substring(1);
//   }
//   return result;
// };

// Deno.test("A024785", () => {
//   assertEquals(
//     Queen.utils.iota(1, 500).filter((elem: number) => isLeftTruncatablePrime(elem)),
//     [
//       2, 3, 5, 7, 13, 17, 23, 37, 43, 47, 53, 67, 73, 83, 97, 113, 137, 167,
//       173, 197, 223, 283, 313, 317, 337, 347, 353, 367, 373, 383, 397, 443, 467,
//     ]
//   );
// });
// A028834
// 各位の和が素数になる数の数列
Deno.test("A028834", () => {
  const isA028834 = (num: number) =>
    Queen.isPrime(
      Queen.utils.getIntArrayFromInt(num).reduce((a, c) => a + c, 0)
    );
  assertEquals(
    Queen.utils.iota(1, 100).filter((elem) => isA028834(elem)),
    [
      2, 3, 5, 7, 11, 12, 14, 16, 20, 21, 23, 25, 29, 30, 32, 34, 38, 41, 43,
      47, 49, 50, 52, 56, 58, 61, 65, 67, 70, 74, 76, 83, 85, 89, 92, 94, 98,
    ]
  );
});

// A028842
// 各位の積が素数になる数の数列
// 素数が一つだけあり、それ以外の桁にひとつでも1以外の数があると、productは合成数になってしまうので、
// prime + 1の組み合わせになっている。
// Deno.test("A028842",()=> {
//   const isA028842 = (num: number) =>
//     Queen.isPrime(Queen.utils.getIntArrayFromInt(num).reduce((a, c) => a * c, 1));
//   assertEquals(
//     Queen.utils.iota(1, 1000).filter((elem) => isA028842(elem)),
//     [
//       2, 3, 5, 7, 12, 13, 15, 17, 21, 31, 51, 71, 112, 113, 115, 117, 121, 131,
//       151, 171, 211, 311, 511, 711,
//     ]
//   );
// })

// A028982
// Squares and twice squares.
Deno.test("A028982", () => {
  assertEquals(
    Queen.utils.iota(1, 100).filter((elem) => Queen.divSum(elem) % 2 === 1),
    [1, 2, 4, 8, 9, 16, 18, 25, 32, 36, 49, 50, 64, 72, 81, 98, 100]
  );
});

// A033294
// Squares which when written backwards remain square (final 0's excluded)
const isA033294 = (n: number): boolean => {
  if (!Queen.isSquare(n)) {
    return false;
  }
  const numStr = n.toString();
  if (numStr.endsWith("0")) {
    return false;
  }
  // squares remaining square when written backwards
  const revNum = parseInt(numStr.split("").reverse().join(""));
  return Number.isInteger(Math.sqrt(revNum));
};
Deno.test("A033294", () => {
  assertEquals(
    Queen.utils.iota(1, 1000).filter((elem) => isA033294(elem)),
    [1, 4, 9, 121, 144, 169, 441, 484, 676, 961]
  );
});

// A034287
// Numbers whose product of divisors is larger than that of any smaller number.
Deno.test("A034287", () => {
  let max = 0;
  assertEquals(
    Queen.utils.iota(1, 100).filter((elem) => {
      const divProduct = Queen.divProduct(elem);
      if (divProduct > max) {
        max = divProduct;
        return true;
      }
      return false;
    }),
    [1, 2, 3, 4, 6, 8, 10, 12, 18, 20, 24, 30, 36, 48, 60, 72, 84, 90, 96]
  );
});

const isA035090 = (n: number): boolean => {
  if (!isA033294(n)) {
    return false;
  }
  return !Queen.isPalindrome(n);
};

// A035090
// Non-palindromic squares which when written backwards remain square
Deno.test("A035090", () => {
  assertEquals(
    Queen.utils.iota(1, 10000).filter((elem) => isA035090(elem)),
    [144, 169, 441, 961, 1089, 9801]
  );
});

const isA035123 = (n: number): boolean => {
  if (!isA035090(n ** 2)) {
    return false;
  }
  return Number.isInteger(Math.sqrt(n));
};

// A035123
// Roots of 'non-palindromic squares remaining square when written backwards'.
// [ ] revise later
// Deno.test("A035123", () => {
//   assertEquals(
//     Queen.utils.iota(1, 200).filter((elem) => isA035123(elem)),
//     [12, 13, 21, 31, 33, 99, 102, 103, 112, 113, 122]
//   );
// });

// A046459
// Dudeney numbers: integers equal to the sum of the digits of their cubes.
Deno.test("A046459", () => {
  const isA046459Num = (n: number): boolean => {
    if (n < 0 || !Number.isInteger(n)) {
      throw Error("the argument must be non-negative integer");
    }
    const cube = n * n * n;
    const result = Queen.utils
      .getIntArrayFromInt(cube)
      .reduce((acc, curr) => acc + curr, 0);
    if (n === result) {
      return true;
    }
    return false;
  };

  assertEquals(
    Queen.utils.iota(0, 1000).filter((elem) => isA046459Num(elem)),
    [0, 1, 8, 17, 18, 26, 27]
  );
});

// A077684
// Squarefree numbers with 8 as their initial digit
Deno.test("A077684", () => {
  assertEquals(
    Queen.utils
      .iota(1, 100)
      .filter((elem: number) => Queen.isSquareFree(elem))
      .filter((e: number) => Queen.utils.getIntArrayFromInt(e)[0] === 8),
    [82, 83, 85, 86, 87, 89]
  );
});

// A087409
Deno.test("A087409", () => {
  const generateA087409Sequences = (n: number): number[] => {
    // generate the sequence of 6 multiples
    const numberArr: number[] = [];
    for (let i = 1; i < n + 2; i++) {
      numberArr.push(6 * i);
    }

    // create an array which is grouped in pairs by 2
    const str: string = numberArr.join("");
    const strArr: string[] = [];
    for (let i = 0; i < str.length; i += 2) {
      strArr.push(str[i] + str[i + 1]);
    }
    const formattedArr = strArr.slice(0, strArr.length - 1);

    // omitting leading zeros for each element
    const result = formattedArr.map((elem) => {
      if (elem.startsWith("0")) {
        return elem.substring(1);
      }
      return elem;
    });

    return result.map((elem) => parseInt(elem));
  };
  assertEquals(
    generateA087409Sequences(10),
    [61, 21, 82, 43, 3, 64, 24, 85, 46, 6]
  );
});

// A138591
// often called as "polite numbers"

const isPoliteNumber = (num: number): boolean => {
  if (num === 1) {
    return true;
  }
  return !isPowersOfTwo(num);
};

Deno.test("A138591", () => {
  assertEquals(
    Queen.utils.iota(1, 20).filter((elem) => isPoliteNumber(elem)),
    [1, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20]
  );
});
// A199988SeqUnder(num: number): number[] {
//   const natSeq = Queen.utils.iota(1, num);
//   return natSeq.filter((elem) => this.isA199988Num(elem.toString()));
// },

// A217401
// numbers starting with 8
Deno.test("A217401", () => {
  assertEquals(
    Queen.utils
      .iota(1, 100)
      .filter((elem: number) => Queen.utils.getIntArrayFromInt(elem)[0] === 8),
    [8, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
  );
});

// A319388
// Non-palindromic squares.
Deno.test("A319388", () => {
  assertEquals(
    Queen.utils
      .iota(1, 200)
      .filter((elem) => Number.isInteger(Math.sqrt(elem)))
      .filter((e) => !Queen.isPalindrome(e)),
    [16, 25, 36, 49, 64, 81, 100, 144, 169, 196]
  );
});
