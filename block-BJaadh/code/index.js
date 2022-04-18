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

console.log([...strings].join(" "));
// - Add two new words in the strings array "called" and "sentance"

strings.splice([...strings].length,0,'called','sentence');
console.log(strings);
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log([...strings].join(" "));
// strings = strings.reduce((acc,ele) => {
//   return acc + ele + " ";
// }, "  ");
// console.log(strings);
// - Remove the first word in the array (strings)

strings.unshift();
// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((strings) => 
     strings.includes("is")
);
console.log(allIs);
// - Find all the words that contain 'is' use string method 'indexOf'
allIs = strings.filter((strings) => 
  strings.indexOf("is") !== -1 );
console.log(allIs);
// - Check if all the numbers in numbers array are divisible by three use array method (every)
// let ret = numbers.every(function(number){
//   return number % 3 === 0;
// })
// console.log(ret);
// -  Sort Array from smallest to largest
console.log([...strings].sort());


// function compareFunction(a,b) {
//   return a - b;
// };

// console.log(numbers.sort(compareFunction));
// - Remove the last word in strings

console.log([...strings].pop());
// - Find largest number in numbers
let largestNumber = [...numbers].sort((a,b) => a-b).pop();
// - Find longest string in strings
let longestString = [...strings].sort((a,b) => a.length - b.length).pop();
// - Find all the even numbers
let evenNumbers = [...numbers].filter(function(number){
  return number % 2 === 0;
})
// - Find all the odd numbers
let oddNumbers = [...numbers].filter(function(number){
  return number % 2 !== 0;
})
// - Place a new word at the start of the array use (unshift)
numbers.unshift(22);
console.log(numbers);
// - Make a subset of numbers array [18,9,7,11]
console.log([...numbers].slice(3,6));
// - Make a subset of strings array ['a','collection']
console.log([...strings].splice(2,2));
// - Replace 12 & 18 with 1221 and 1881
// numbers.splice(numbers.indexOf(12), 1, 1221);
console.log(
  numbers.map((num) => {
    if (num === 12){
      return 1221;
    } else if (num === 18) {
      return 1881;
    } else {
      return num;
    }
  })
);

// - Replace words in strings array with the length of the word
let stringsLength = strings.map((strings) => strings.length);
// - Find the sum of the length of words using above question
console.log(stringsLength.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
}, 0));
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((customers) => 
     customers.firstname.startsWith("J")
     );
     console.log(filteredCustomer);
// - Create new array with only first name
let firstnameCustomer = customers.map(
  (customer) => customer.firstname
);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCustomer = customers.map(
  (customer) => `${customers.firstname} ${customers.lastname}`
);

// - Sort the array created above alphabetically
[...fullnameCustomer].sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u") 
  ) {
    return true;
  } else {
    return false;
  }
});
