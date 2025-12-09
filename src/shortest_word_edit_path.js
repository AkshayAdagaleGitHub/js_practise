function shortestWordEditPath(source, target, words) {
   if (source  === target) return 0;

   const wordSet = new Set(words);

   if (!wordSet.has(target))
     return -1;

   const queue = [[source, 0]];
   const visited = new Set([source]);
   while (queue.length > 0) {
     const [word, steps] = queue.shift();
     for (let i = 0; i < word.length; i++) {
       for(let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
         const nextWord = word.substring(0, i) + String.fromCharCode(c) + word.substring(i + 1);
          if (nextWord === target) return steps + 1;
          if (wordSet.has(nextWord) && !visited.has(nextWord)) {
            visited.add(nextWord);
            queue.push([nextWord, steps + 1]);
         }
       }
     }
   }
   return -1;
}

console.log(shortestWordEditPath('bit', 'dog', ['but', 'put', 'big', 'pot', 'pog', 'dog', 'lot']));
console.log(shortestWordEditPath('abcd', 'bcda', ['abcd', 'bcda', 'cadb', 'cbad']));
console.log(shortestWordEditPath('abcbdd', 'abcd', ['abcd', 'bbcd', 'cadc', 'dadc']));