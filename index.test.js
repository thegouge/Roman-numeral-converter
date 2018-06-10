import {
  convertToRoman
} from "./index.js";

let output;

beforeEach(() => {
  output = null;
});

describe("Palindrome Checker", () => {
  describe("Basic Numbers", () => {
    it("Should return a String", () => {
      output = convertToRoman(1);
      expect(typeof output).toBe("String");
    });

    it("Should return 'II' when given '2'", () => {
      output = convertToRoman(2);
      expect(output).toBe("II");
    });

    it("Should return 'III' when given '3'", () => {
      output = convertToRoman(3);
      expect(output).toBe("III");
    });

    it("Should return 'IV' when given '4'", () => {
      output = convertToRoman(4);
      expect(output).toBe("IV");
    });

    it("Should return 'V' when given '5'", () => {
      output = convertToRoman(5);
      expect(output).toBe("V");
    });

    it("Should return 'IX' when given '9'", () => {
      output = convertToRoman(9);
      expect(output).toBe("IX");
    });
  });

  descibe("10 through 50", () => {
    it("Should return 'XII' when given '12'", () => {
      output = convertToRoman(12);
      expect(output).toBe("XII");
    });

    it("Should return 'XVI' when given '16'", () => {
      output = convertToRoman(16);
      expect(output).toBe("XVI");
    });

    it("Should return 'IXX' when given '29'", () => {
      output = convertToRoman(29);
      expect(output).toBe("IXX");
    });

    it("Should return 'XLIV' when given '44'", () => {
      output = convertToRoman(44);
      expect(output).toBe("XLIV");
    });

    it("Should return 'XLV' when given '45'", () => {
      output = convertToRoman(45);
      expect(output).toBe("XLV");
    });
  });

  describe("51 through 100", () => {
    it("Should return 'LXVIII' when given '68'", () => {
      output = convertToRoman(68);
      expect(output).toBe("LXVIII");
    });

    it("Should return 'LXXXIII' when given '83'", () => {
      output = convertToRoman(83);
      expect(output).toBe("LXXXIII");
    });

    it("Should return 'XCVII' when given '97'", () => {
      output = convertToRoman(97);
      expect(output).toBe("XCVII");
    });

    it("Should return 'XCIX' when given '99'", () => {
      output = convertToRoman(99);
      expect(output).toBe("XCIX");
    });
  });

  describe("400 through 900", () => {
    it("Should return 'CD' when given '400'", () => {
      output = convertToRoman(400);
      expect(output).toBe("CD");
    });

    it("Should return 'D' when given '500'", () => {
      output = convertToRoman(500);
      expect(output).toBe("D");
    });

    it("Should return 'DI' when given '501'", () => {
      output = convertToRoman(501);
      expect(output).toBe("DI");
    });

    it("Should return 'DCXLIX' when given '649'", () => {
      output = convertToRoman(649);
      expect(output).toBe("DCXLIX");
    });

    it("Should return 'DCCXCVIII' when given '798'", () => {
      output = convertToRoman(798);
      expect(output).toBe("DCCXCVIII");
    });

    it("Should return 'DCCCXCI' when given '891'", () => {
      output = convertToRoman(891);
      expect(output).toBe("DCCCXCI");
    });
  });

  describe("1000 through 4000", () => {
    it("Should return 'M' when given '1000'", () => {
      output = convertToRoman(1000);
      expect(output).toBe("M");
    });

    it("Should return 'MIV' when given '1004'", () => {
      output = convertToRoman(1004);
      expect(output).toBe("MIV");
    });

    it("Should return 'MVI' when given '1006'", () => {
      output = convertToRoman(1006);
      expect(output).toBe("MVI");
    });

    it("Should return 'MXXIII' when given '1023'", () => {
      output = convertToRoman(1023);
      expect(output).toBe("MXXIII");
    });

    it("Should return 'MMXIV' when given '2014'", () => {
      output = convertToRoman(2014);
      expect(output).toBe("MMXIV");
    });

    it("Should return 'MMMCMXCIX' when given '3999'", () => {
      output = convertToRoman(3999);
      expect(output).toBe("MMMCMXCIX");
    });
  });
});