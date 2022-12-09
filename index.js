function hasTargetSum(array, target) {
  // Write your algorithm here
    for(let i = 0; i<array.length; i++){
      const sum = target-array[i];
      for(let j = i+1; j<array.length; j++){
        if(array[j]=== sum)return true;
      }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
Time complexity = O(n²)*/

/* 
  Add your pseudocode here
 The function hasTargetSum should return true if any of the two numbers inside an array adds upto the target,
else it will return false when there is no numbers in an array adding upto the target.*/

/*
  Add written explanation of your solution here
 itterate over the arrays and check if the numbers in an array adds upto the target. And if it does it should return true.
if the sum of the numbers in an array is not equal to the target hence it should return false.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
