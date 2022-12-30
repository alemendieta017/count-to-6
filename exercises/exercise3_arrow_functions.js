var inputs = process.argv.slice(2);
var result = inputs
  .map((i) => i[0])
  .reduce((accum, current) => accum + current, "");
console.log(`[${inputs}] becomes "${result}"`);
