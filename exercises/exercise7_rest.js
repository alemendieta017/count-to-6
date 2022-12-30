module.exports = function average(...args) {
  let sum = 0;
  args.forEach((i) => (sum += i));
  return sum / args.length;
};
