// 1)function named calculateDifference
function calculateDifference(a,b) {
    return a-b;
}
console.log("Difference between 18 and 10 is :", calculateDifference(18,10)); // 8

// 2)Check if a number is odd
function isOdd(n) {
    return n%2!==0;
}
console.log("3 odd?:", isOdd(3)); // true
console.log("8 odd?:", isOdd(8)); //false

// 3) Smallest number in an array
function findMin(n) {
    return Math.min(...n);
}
console.log("Min in [6,2,1,3]:", findMin([6,2,1,3])); // 1 

// 4) Filter out only the even numbers 
function filterEvenNumbers(n) {
    return n.filter(x=>x%2===0);
}
console.log("Even numbers in [6,2,1,3]:",filterEvenNumbers([6,2,1,3])); // [6,2]

//5) Sort an array in descending order
function sortArrayDescending(n) {
    return n.slice().sort((a,b)=>b-a); // Using slice to avoid mutating original array
}
console.log("Array sorted in descending order [6,2,1,3]:",sortArrayDescending([6,2,1,3])); [6,3,2,1]

// 6)lowercase first letter 
function lowercaseFirstLetter(s) {
    if(s.length===0) return s;
    return s[0].toLowerCase() + s.slice(1);
}
console.log("Lowercase of first letter of 'Lujain':", lowercaseFirstLetter('Lujain'));

// 7)Count the number of vowels in a string
function countVowels(s) {
    const vowels = 'aeiouAEIOU';
    return [...s].filter(char => vowels.includes(char)).length;
}
console.log("Number of vowels in 'Lujain is coding':", countVowels('Lujain is coding'));

// 8) Find the average 
function findAverage(n) {
    const total = n.reduce((sum, a) => sum+a, 0);
    return total / n.length;
}
console.log("Average of [6,2,1,3]:", findAverage([6,2,1,3])); 

