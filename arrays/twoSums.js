// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(array, target){
  let sum = [];
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === target){
            sum.push(i,j)
        }
    }
}
  return sum
}

twoSum([1,2,3], 5)


// var twoSum = function(nums, target) {
//   let map = {};
//   for(let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       const complement = map[target - num];
//       if (complement != undefined) {
//           return [i, complement];
//       }

//       map[num] = i;
//   }
// };

var twoSum = function(nums, target) {
  let seen = {}

  for (let i = 0; i < nums.length; i++) {
    let sumPartner = target - nums[i] // what would complete this index target

    //is it in our hash table?
    if (seen[sumPartner] !== undefined) {
      // If we got here, then we have our pair!
      return [seen[sumPartner], i]
    } else {
      // If the sumPartner wasn't found, let's stick this
      // value in our seen hash table. We'll use the value
      // as the key and its index as our value
      seen[nums[i]] = i
    }
  }
  // We must assume there is an answer to the question,
  // based on the question's wording.
  return undefined
};

