module.exports = function (str, reps = str.length) {
  let symbol = "!";
  return `${str}${symbol.repeat(reps)}`;
};
