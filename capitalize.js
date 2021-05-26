const capitalize = (str) => {
  const firstLetter = str.charAt(0);
  return `${firstLetter.toUpperCase()}${str.slice(1)}`
}

module.exports = capitalize;