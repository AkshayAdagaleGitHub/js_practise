function indexEqualsValueSearch(arr) {

  let left = 0
  let right = arr.length - 1
  let ans = -1

  while( left <= right){
      let mid = left + Math.floor((right - left) / 2);
      if(arr[mid] === mid){
          ans = mid;
          right = mid - 1;
      }else if(arr[mid] < mid){
          left = mid + 1;
      }else{
          right = mid - 1;
      }
  }
  return ans;
}

console.log(indexEqualsValueSearch([0,1,2,3,4,5,6,7]))
console.log(indexEqualsValueSearch([-8,0,2,5]))
console.log(indexEqualsValueSearch([-1,0,3,6]))