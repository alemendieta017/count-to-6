// exercise 1
console.log("HELLO ES6")

// exercise 2
console.log(`Hello, ${process.argv[2]}!`)
console.log(`Your name lowercased is "${process.argv[2].toLowerCase()}".`)

// exercise 3
var inputs = process.argv.slice(2);
var result = inputs
  .map((i) => i[0])
  .reduce((accum, current) => accum + current, "");
console.log(`[${inputs}] becomes "${result}"`);

// exercise 4
var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(() => console.log(this.yelp));
  },
};
foot.kick();


// exercise 5
let userArray = process.argv.slice(2);
let result = {};
[, result.username, result.email] = userArray;
console.log(result);


// exercise 6
var numbers = process.argv.slice(2);
console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`);


// exercise 7
module.exports = function average(...args) {
  let sum = 0;
  args.forEach((i) => (sum += i));
  return sum / args.length;
};


// exercise 8
module.exports = function (lowerBound = 0, upperBound = 1) {
  return (lowerBound + upperBound) / 2;
};


// exercise 9
module.exports = function (str, reps = str.length) {
  let symbol = "!";
  return `${str}${symbol.repeat(reps)}`;
};


// exercise 10
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...args) {
  args[1] = args[1]
    .replace(/\&/g, "&amp;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");

  args[2] = args[2]
    .replace(/\&/g, "&amp;")
    .replace(/\'/g, "&apos;")
    .replace(/\"/g, "&quot;")
    .replace(/\</g, "&lt;")
    .replace(/\>/g, "&gt;");

  return `<b>${args[1]} says</b>: "${args[2]}"`;
}


// Bonus two-count leetCode
let twoSum = function (nums, target) {
  let correctNumbers = [];
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        correctNumbers.push(nums[i], nums[y]); // Fills an array with the found numbers
        let firstFoundIndex = nums.indexOf(correctNumbers.shift()); // From the correct numbers array, this extract the first element to find it index
        nums.splice(firstFoundIndex, 1, undefined); // Once the first index was found, this line "clean" the used position in the given nums array
        let secondFoundIndex = nums.indexOf(correctNumbers.shift()); // From the correct numbers array, this extract the last element to find it index
        indexes = [firstFoundIndex, secondFoundIndex];
        return indexes;
      }
    }
  }
};