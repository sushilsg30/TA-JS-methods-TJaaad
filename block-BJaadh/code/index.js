// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));
// - Convert value of strings array into a sentance like "This is a collection of words"

// strings = strings.reduce((acc,ele) => {
//   return acc + ele + " ";
// }, "  ");

console.log(strings);
// - Add two new words in the strings array "called" and "sentance"

strings.splice(strings.length,0,'called','sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

// strings = strings.reduce((acc,ele) => {
//   return acc + ele + " ";
// }, "  ");
// console.log(strings);
// - Remove the first word in the array (strings)

strings.shift(0);
// - Find all the words that contain 'is' use string method 'includes'
strings.includes('is');
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf('is');
// - Check if all the numbers in numbers array are divisible by three use array method (every)
let ret = numbers.every(function(number){
  return number % 3 === 0;
})
console.log(ret);
// -  Sort Array from smallest to largest
console.log(strings.sort());


function compareFunction(a,b) {
  return a - b;
};

console.log(numbers.sort(compareFunction));
// - Remove the last word in strings

console.log(strings.pop());
// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
let evenNumbers = numbers.filter(function(number){
  return number % 2 === 0;
})
// - Find all the odd numbers
let oddNumbers = numbers.filter(function(number){
  return number % 2 !== 0;
})
// - Place a new word at the start of the array use (unshift)
numbers.unshift(22);
console.log(numbers);
// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name
firstName = [];
firstName.push(customers.firstname);
// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
