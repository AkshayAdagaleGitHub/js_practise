function maxSubArraySum(arr) {
  let maxSum = arr[0];
  let runningSum = 0;

  for(let i = 0; i < arr.length; i++) {
    runningSum = Math.max(arr[i], runningSum + arr[i]);
    maxSum = Math.max(maxSum, runningSum);
  }
  return maxSum;
}

let ans = maxSubArraySum([-1,-2,-3,-4,-5])
console.log(ans)
ans = maxSubArraySum([-1,-2,3,-4,-5])
console.log(ans)
