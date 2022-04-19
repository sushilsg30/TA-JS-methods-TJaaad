let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
console.log(words);
let findLongestWord = [...words].sort((a,b) => a.length - b.length).pop();

// - Convert the above array "words" into an array of length of word instead of word.
console.log(words.map((word) => word.length));
// - Create a new array that only contains word with atleast one vowel.
let wordsVowel = [...words].filter(
  (word) => {
    if(
    word.includes("a") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u") ||
    word.includes("e")
    ){
      return true;
    } else {
      return false;
    }
  }
);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
console.log(words.findIndex((word => word === "rhythm")));
// - Create a new array that contians words not starting with vowel.
let wordStartWithVowel = words.filter((word) => {
  if (
    word.startsWith("a") ||
    word.startsWith("i") ||
    word.startsWith("o") ||
    word.startsWith("u") ||
    word.startsWith("e")
    ) {
      return word;
    }
    
});


// function checkVowel(words){
//   return (
//     words.includes("a") ||
//     words.includes("i") ||
//     words.includes("o") ||
//     words.includes("u") ||
//     words.includes("e")
//   );
// }

// let notWithVowel = words.filter(
//   (w) => !checkVowel(w[0])
// ); 
// - Create a new array that contianse words not ending with vowel
// notWithVowel = words.filter(
//   (w) => !checkVowel(w.length -1)
// );

let wordEnsWithVowel = words.filter((word) => {
  if (
    word.endsWith("a") ||
    word.endsWith("i") ||
    word.endsWith("o") ||
    word.endsWith("u") ||
    word.endsWith("e")
    ) {
      return word;
    }
    
});


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

console.log(numbers.length, `${numbers}`);
// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = [...numbers].reduce((acc,num) => acc + num);
console.log(sumArray);

// function sumArray(array) {
//   return array.reduce((acc,cv) => {
//     acc = acc +cv;
//   }, 0);
// }
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multipleOfThree = [...numbers].filter((num) => num % 3 === 0);
// - Create a new array that contains only even numbers
let evenNumbers = [...numbers].filter((num) => num % 2 === 0);
// - Create  a new array that contains only odd numbers.
let oddNumbers = [...numbers].filter((num) => num % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
evenOroddNumbers = [...numbers].map((num) => num % 2 === 0);
console.log(evenOroddNumbers);
// - Sort the above number in assending order.
console.log([...numbers].sort((a,b) => a-b ));
// - Does sort mutate the original array?// Yes Sort Mutates the original Array.

// - Find the sum of the numbers in the array.
sumArray = [...numbers].reduce((acc,num) => acc + num);
console.log(sumArray);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageqNumbers = sumArray/numbers.length;

function averageNumbers(array) {
  return  array.reduce((acc,cv) => {
    acc = acc + cv;
    return acc;
  }, 0) / array.length;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let stringLength =  strings.map((string) => string.length);
