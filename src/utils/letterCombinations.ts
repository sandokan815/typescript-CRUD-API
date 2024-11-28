// Letter combinations logic
export function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }

  if (digits.includes('1')) {
    return [];
  }

  // Phone number mapping
  const phoneMap: { [key: string]: string } = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };

  const result: string[] = [];

  function backtrack(index: number, currentCombination: string): void {
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = phoneMap[currentDigit];

    for (let letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  backtrack(0, '');
  return result;
}
