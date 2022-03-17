import Queen from "./Queen";

// A028982
// primes except 2 is not included in this sequence
console.log(Queen.iota(1, 100).filter((elem) => Queen.divSum(elem) % 2 === 1));

// A023194
// primes except 2 is not included in this sequence
console.log(
  Queen.iota(1, 1000).filter((elem) => Queen.isPrime(Queen.divSum(elem)))
);

// A007500

const isA007500 = (elem) => {
  if (!Queen.isPrime(elem)) {
    return false;
  }
  if (Queen.isPrime(Number(elem.toString().split("").reverse().join("")))) {
    return true;
  }
  return false;
};
console.log(Queen.iota(1, 1000).filter((elem) => isA007500(elem)));

console.log(Queen.divOf(2022));
console.log(Queen.isPrime(337));

// 337が何番目の素数なのか？
console.log(Queen.primeSeq(1000).indexOf(337) + 1);

// x番目の素数である場合、そのx自体も素数である数列
// A006450
console.log(Queen.primeSeq(1000).filter((elem, i) => Queen.isPrime(i + 1)));

// 約数の和が素数になる数の数列
// A023194
console.log(
  Queen.iota(1, 1000).filter((elem) => Queen.isPrime(Queen.divSum(elem)))
);

// 各位の和が素数になる数の数列
// A028834
const isA028834 = (num: number) =>
  Queen.isPrime(Queen.getIntArrayFromInt(num).reduce((a, c) => a + c, 0));
console.log(Queen.iota(1, 1000).filter((elem) => isA028834(elem)));

// 各位の積が素数になる数の数列
// A028842
// 素数が一つだけあり、それ以外の桁にひとつでも1以外の数があると、productは合成数になってしまうので、
// prime + 1の組み合わせになっている。
const isA028842 = (num: number) =>
  Queen.isPrime(Queen.getIntArrayFromInt(num).reduce((a, c) => a * c, 1));
console.log(Queen.iota(1, 1000).filter((elem) => isA028842(elem)));

// twin primes
const isTwinPrime = (num: number) =>
  Queen.isPrime(num) && (Queen.isPrime(num - 2) || Queen.isPrime(num + 2));

console.log(Queen.iota(1, 1000).filter((elem) => isTwinPrime(elem)));

// const isPrimeQuadruplet = (num: number) => {
//   return (
//     Queen.isPrime(num) &&
//     Queen.isPrime(num + 2) &&
//     Queen.isPrime(num + 6) &&
//     Queen.isPrime(num + 8)
//   );
// };

// console.log(Queen.iota(1, 1000).filter((elem) => isPrimeQuadruplet(elem)));

// A000169
// n^(n-1)
console.log(Queen.iota(1, 10).map((elem, i) => Math.pow(elem, i)));
console.log(Queen.highlyCompositeSeq(100));
