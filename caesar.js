const caesar = (str, shift) => {

  let newStr = '';

  for (let i=0; i<str.length; i++) {
    if (shift < 0) {
      while (shift < 0) {
        shift += 26;
      }
    }
    newStr += shiftLetter(str[i], shift);
  }

  return newStr;
}

const shiftLetter = (letter, shift) => {
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

  if (lowerAlpha.includes(letter)) {
    const pos = lowerAlpha.indexOf(letter);
    return lowerAlpha[(pos + shift) % 26];
  }

  if (upperAlpha.includes(letter)) {
    const pos = upperAlpha.indexOf(letter);
    return upperAlpha[(pos + shift) % 26];
  }

  return letter;
}

module.exports = caesar;