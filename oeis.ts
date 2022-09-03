import Queen from "./Queen.ts";

const Oeis = {
  /* 
  From here, I'll implement OEIS sequences
  */
  A005179SeqUnder(num: number): number[] {
    const seq = Queen.iota(1, num);
    const div = [];
    const result = [];

    seq.forEach((elem: number, i: number) => {
      const numOfDiv = Queen.numOfDiv(elem);
      if (!div.includes(numOfDiv)) {
        div.push(numOfDiv);
        result.push(elem);
      }
    });
    return result;
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
