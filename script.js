function sumAll(arrayOfNumbers) {
  let sum = 0;
  let min = Math.min(arrayOfNumbers[0], arrayOfNumbers[1]);
  let max = Math.max(arrayOfNumbers[0], arrayOfNumbers[1]);
  
  for(let i = min; i<=max; i++){
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10])); //45
console.log(sumAll([10, 5])); //45
console.log(sumAll([1, 4])); //10
console.log(sumAll([4, 1])); //10