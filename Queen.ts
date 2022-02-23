class Queen {
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

  // A003422
  // テスト通らない
  // !0の時に0になるようにiotaやsigmaの範囲設定をするか、あるいは分岐を入れるか。。g
  // static leftFact(num: number): number[] {
  //   const arr = Queen.iota(0, num);
  //   return arr.map((elem) => this.sigma(0, elem, this.fact));
  // }
}

export default Queen;
