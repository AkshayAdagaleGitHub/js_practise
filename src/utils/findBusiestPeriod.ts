// input:  data = [ [1487799425, 14, 1],
//   [1487799425, 4,  0],
//   [1487799425, 2,  0],
//   [1487800378, 10, 1],
//   [1487801478, 18, 0],
//   [1487801478, 18, 1],
//   [1487901013, 1,  0],
//   [1487901211, 7,  1],
//   [1487901211, 7,  0] ]
//
// output: 1487800378 # since the increase in the number of people
// # in the mall is the highest at that point

function findBusiestPeriod(data) {
  let n = data.length;
  if ( n == 0) return []

  let count = 0;
  let maxCount = 0;
  let maxPeriodTime = 0;

  for (let i = 1; i < n; i++) {
    if(data[i][2] === 1){
      count+=data[i][1];
    }else {
      count-=data[i][1];
    }
    if(i < n - 1 && data[i][0] === data[i+1][0] ){
      continue;
    }
    if(count > maxCount){
      maxCount = Math.max(count, maxCount);
      maxPeriodTime = data[i][0];
    }
  }
  return maxPeriodTime;
}

// input:
const data = [ [1487799425, 14, 1],
  [1487799425, 4,  0],
  [1487799425, 2,  0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1,  0],
  [1487901211, 7,  1],
  [1487901211, 7,  0] ]
console.log(findBusiestPeriod(data));