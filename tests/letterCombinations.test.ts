import { letterCombinations } from '../src/utils/letterCombinations';

describe('letterCombinations', () => {

  it('should return all combinations for "23"', () => {
    const input = "23";
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];

    const result = letterCombinations(input);

    expect(result).toEqual(expected);
  });

  it('should return an empty array for an empty input string', () => {
    const input = "";
    const expected: string[] = [];

    const result = letterCombinations(input);

    expect(result).toEqual(expected);
  });

  it('should return the correct combinations for single digit "2"', () => {

    const input = "2";
    const expected = ["a", "b", "c"];


    const result = letterCombinations(input);


    expect(result).toEqual(expected);
  });

  it('should return combinations for a longer input "234"', () => {

    const input = "234";
    const expected = [
      "adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi",
      "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi",
      "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"
    ];


    const result = letterCombinations(input);


    expect(result).toEqual(expected);
  });

  it('should return an empty array when the input contains digits that do not map to letters', () => {

    const input = "1"; // No letters for digit "1"
    const expected: string[] = [];


    const result = letterCombinations(input);


    expect(result).toEqual(expected);
  });

});
