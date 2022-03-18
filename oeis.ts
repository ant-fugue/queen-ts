import Queen from "./Queen";

const Oeis = {
  /* 
  From here, I'll implement OEIS sequences
  */

  lunar: {
    add(s1: string, s2: string): string {
      let tmp = "";
      for (let i = 0; i < s1.length; i++) {
        Number(s1[i]) >= Number(s2[i]) ? (tmp += s1[i]) : (tmp += s2[i]);
      }
      return tmp;
    },
  },

  A005179SeqUnder(num: number): number[] {
    const seq = Queen.iota(1, num);
    const div = [];
    const result = [];

    seq.forEach((elem, i) => {
      const numOfDiv = Queen.numOfDiv(elem);
      if (!div.includes(numOfDiv)) {
        div.push(numOfDiv);
        result.push(elem);
      }
    });
    return result;
  },

  // Primes that contain digits 2 and 3 only.
  A020458SeqUnder(num: number): number[] {
    const primeSeqLetters = Queen.primeSeq(1000).map((prime) =>
      prime.toString().split("")
    );

    const seq = primeSeqLetters.filter((prime) =>
      prime.every((elem) => elem === "2" || elem === "3")
    );

    // console.log(seq);
    return seq.map((elem) => parseInt(elem.join("")));
  },

  isA199988Num(digits: string): boolean {
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
  },

  A199988SeqUnder(num: number): number[] {
    const natSeq = Queen.iota(1, num);
    return natSeq.filter((elem) => this.isA199988Num(elem.toString()));
  },
};

export default Oeis;
