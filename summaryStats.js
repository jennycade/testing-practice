const summaryStats = (arr) => {
  return {
    length: arr.length,
    average: mean(arr),
    min: min(arr),
    max: max(arr),
  };
}

const min = (arr) => {
  return arr.reduce(
    (min, val) => val < min ? val : min,
    Infinity
  )
}

const max = (arr) => {
  return arr.reduce((max, val) => val > max ? val : max, -Infinity);
}

const mean = (arr) => {
  return arr.reduce((mean, val) => mean + val/arr.length,
  0);
}

module.exports = summaryStats;