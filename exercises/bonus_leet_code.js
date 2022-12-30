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

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
