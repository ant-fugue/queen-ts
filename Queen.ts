// type Arr = Array<number>;
// type Matrix = Array<Arr>;

// interface Matrix {
//   rows: number;
//   cols: number;
// }

// interface Matrix<Arr> {
//   scalar: (obj: Matrix<Arr>, num: number) => Matrix<Arr>;
//   elementwise: (obj1: Matrix<Arr>, obj2: Matrix<Arr>) => Matrix<Arr>;
//   dot: (obj1: Matrix<Arr>, obj2: Matrix<Arr>) => number;
// }

class Queen {
  static getIntArrayFromInt(num: number): number[] {
    if (!Number.isInteger(num)) {
      throw Error("the argument must be integers");
    }
    return num
      .toString()
      .split("")
      .map((elem) => parseInt(elem));
  }

  static iota(min: number, max: number): number[] {
    const length = max - min + 1;
    return new Array(length).fill(0).map((elem, i) => min + i);
  }

  static divOf(num: number): number[] {
    const arr = [];
    for (let i = 1; i < num + 1; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  static numOfDiv(num: number): number {
    return this.divOf(num).length;
  }

  static divSum(num: number): number {
    return this.divOf(num).reduce((a, c) => a + c, 0);
  }
  static divisorsExceptSelf(num: number): number[] {
    const arr = this.divOf(num);
    return arr.slice(0, arr.length - 1);
  }

  static numOfDivExceptSelf(num: number): number {
    return this.divisorsExceptSelf(num).length;
  }

  static divSumExceptSelf(num: number): number {
    return this.divisorsExceptSelf(num).reduce((a, c) => a + c, 0);
  }

  static divGroup(num: number): string {
    if (this.divSumExceptSelf(num) === num) {
      return "perfect";
    } else if (this.divSumExceptSelf(num) > num) {
      return "surplus";
    } else if (this.divSumExceptSelf(num) < num) {
      return "deficient";
    }
    return "unexpected input";
  }

  static perfectNumSeq(num: number): number[] {
    const arr = this.iota(1, num);
    return arr.filter((elem) => this.divGroup(elem) === "perfect");
  }

  static surplusNumSeq(num: number): number[] {
    const arr = this.iota(1, num);
    return arr.filter((elem) => this.divGroup(elem) === "surplus");
  }

  static deficientNumSeq(num: number): number[] {
    const arr = this.iota(1, num);
    return arr.filter((elem) => this.divGroup(elem) === "deficient");
  }

  static isPrime(num: number): boolean {
    if (num < 2) {
      return false;
    }

    // num - 1が2の場合は、ループに入らずにtrueを返すので正解だが、1,0,負の数の対応も必要だよね。。
    const arr = this.iota(2, num - 1);
    for (const item of arr) {
      if (num % item === 0) {
        return false;
      }
    }

    return true;
  }

  static primeSeq(num: number): number[] {
    const arr = this.iota(1, num);
    return arr.filter((elem) => this.isPrime(elem));
  }

  static compositeSeq(num: number): number[] {
    const arr = this.iota(1, num);
    return arr.filter((elem) => !this.isPrime(elem));
  }

  static isHighlyComposite(num: number): boolean {
    if (Queen.isPrime(num)) {
      return false;
    }

    // 配列に引数のnumを含まないように処理
    const arr = this.compositeSeq(num).slice(
      0,
      this.compositeSeq(num).length - 1
    );

    const allDivisors = this.numOfDiv(num);

    let numOfDivisorsUnderTarget = 0;

    arr.forEach((elem) => {
      if (this.numOfDiv(elem) > numOfDivisorsUnderTarget) {
        numOfDivisorsUnderTarget = this.numOfDiv(elem);
      }
    });

    if (allDivisors > numOfDivisorsUnderTarget) {
      return true;
    }

    return false;
  }

  static highlyCompositeSeq(num: number): number[] {
    const arr = this.compositeSeq(num);
    return arr.filter((elem) => this.isHighlyComposite(elem));
  }

  static isTriangularNum(num: number): boolean {
    const tmp = (-1 + Math.sqrt(1 + 8 * num)) / 2;
    if (Number.isInteger(tmp)) {
      return true;
    }
    return false;
  }

  static triangleNumSeq(num: number): number[] {
    const arr = this.iota(0, num);
    return arr.filter((elem) => this.isTriangularNum(elem));
  }

  static sigma(initial: number, final: number, body: any): number {
    if (initial > final) {
      return 0;
    }
    return body(initial) + this.sigma(initial + 1, final, body);

    // どうやったらこのコードが使えるようになるかな。。
    // const arr = Queen.iota(initial, final);
    // return arr.reduce(body, 0);
  }

  static id(num: number): number {
    return num;
  }

  static fact(num: number): number {
    let result = 1;
    if (num === 0 || num === 1) {
      return result;
    }
    for (let i = num; i > 0; i--) {
      result = result * i;
    }
    return result;
  }

  static sumOfPrimesUnder(num: number): number {
    return this.primeSeq(num).reduce((a, c) => a + c, 0);
  }

  // A003422
  // テスト通らない
  // !0の時に0になるようにiotaやsigmaの範囲設定をするか、あるいは分岐を入れるか。。g
  // static leftFact(num: number): number[] {
  //   const arr = Queen.iota(0, num);
  //   return arr.map((elem) => this.sigma(0, elem, this.fact));
  // }

  // https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%BB%E3%82%B8%E3%82%A7%E3%83%AB%E3%83%9E%E3%83%B3%E7%B4%A0%E6%95%B0
  static isSophieGermanPrime(num: number): boolean {
    if (!this.isPrime(num)) {
      return false;
    }
    const result = 2 * num + 1;
    if (this.isPrime(result)) {
      return true;
    }
    return false;
  }

  // static isMersennePrime(num: number): boolean {
  //   if (num )
  //   if (!this.isPrime(num)) {
  //     return false;
  //   }
  //   const mersenneNum = num ** 2 - 1;
  //   if (this.isPrime(mersenneNum)) {
  //     return true;
  //   }
  //   return false;
  // }

  /* 
  linear algebra
  */

  static createMatrix = (rows: any, cols: any): any => {
    rows: rows;
    cols: cols;
    matrix: [];

    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] 0;
      }
    }
  };

  // static scalar = (vector: number[], multiplier: number): number[] => {
  //   return vector.map((elem) => elem * multiplier);
  // };

  static scalar = (matrix: Matrix): Matrix => {};

  static elementwise = (vec1: number[], vec2: number[]): number[] => {
    return vec1.map((elem, i) => elem + vec2[i]);
  };

  static dot = (vec1: number[], vec2: number[]): number => {};

  /* 
  From here, I'll implement OEIS sequences
  */

  // Primes that contain digits 2 and 3 only.
  static A020458SeqUnder = (num: number) => {
    const primeSeqLetters = this.primeSeq(1000).map((prime) =>
      prime.toString().split("")
    );

    const seq = primeSeqLetters.filter((prime) =>
      prime.every((elem) => elem === "2" || elem === "3")
    );

    // console.log(seq);
    return seq.map((elem) => parseInt(elem.join("")));
  };

  static isA199988Num = (digits: any): boolean => {
    if (digits.includes("0")) {
      return false;
    }
    let tmp = 1;

    for (const elem of digits) {
      tmp = tmp * parseInt(elem);
    }

    if (tmp === 6) {
      return true;
    }
    return false;
  };

  static A199988SeqUnder = (num: number) => {
    const natSeq = this.iota(1, num);
    return natSeq.filter((elem) => this.isA199988Num(elem.toString()));
  };
}

export default Queen;
