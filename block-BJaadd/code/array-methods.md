Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: Array in Array
   - Return: a single Array which consist Array from specific length to full length.
   - Example:
     ```js
     let numbers = [1, 2, 3,[4,5, [5,7, [8,9 ]]];
     numbers.flat(); //[1,2,3,4,5,5,7,8,9]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
3. `flat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
4. `push`

   - Parameter: To add any value/element into an Array at the end.
   - Return: a single Array consisting of by all the values pushed.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.
     sentanceArray.('dog')//"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.push('black'); // ['red','green','blue','black']
     ```
   - `push` accepts values/elements returns one array with all the values in same order. It does not change the original array.
   - mutate the original array


5. `indexOf`

   - Parameter: To search any element form an array with specific value mentioned if not it consider zero and will search all the array. if not found -1 will be returned.
   - Return: The first index of the element in the array; -1 if not found.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(4); // 3
     let sentanceArray = 'A quick brown fox jumped over a lazy'
     sentanceArray.indexOf('A'); // 1
     let colors = ['red', 'green', 'blue'];
     colors.indexOf('green'); // 4
     ```
   - `indexOf` accepts a value and return its index.
   - No it does not mutate the original array
   
6. `lastIndexOf` : It is same as index of but only reurn the last index of that value.

7. `includes`

   - Parameter: It test that does given element exist in an object or not.
   - Return: true or false if exist return true if not reurn false.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(4); // true
     let sentanceArray = 'A quick brown fox jumped over a lazy'.
     sentanceArray.includes('A')// true
     let colors = ['red', 'green', 'blue'];
     colors.push('blue'); // true
     ```
   - `includes`: only test the presence of value/lement in an object. 
   - It does not mutate the original array.

8. `reverse`
   - Parameter: To reverse the order of an array.
   - Return: The reversed value of an object.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); //[3, 2, 1]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.
     sentanceArray.reverse()// reversed vale
     let colors = ['red', 'green', 'blue'];
     colors.reverse(); // ['blue', 'green', 'red']
     ```
   - `reverse`: It reverse the elements of an array. 
   - mutate the original array
9. `every`:check the condition and if all elemnts in the array pass the test return in true of false.

10. `shift`
   - Parameter: It will delete the first element from an array.
   - Return: remaining array after deleting first one.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift(); //[2,3]
     let colors = ['red', 'green', 'blue'];
     colors.shift(); // ['green', 'blue']
     ```
   - `shift`: Delete the first element of an object
   - It does not mutate the original array.

11. `splice`

   - Parameter: It accepts three parameters from which index to start, how many elements to delete, which element to add.
   - Return: return the original array with modufication
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.splice(1 0, 5); //[1, 5, 2, 3]
     let colors = ['red', 'green', 'blue'];
     colors.splice(0, 1); // ['green', 'blue']
     ```
   - `splice`: It accepts three parameters from which index to start, how many elements to delete, which element to add.
   - It mutate the original array.
12. `find`

   - Parameter: It accept the testing function and condition satisfies it return the first value which satisfy the condition.
   - Return: Value which satisfy the condition.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.find(element => element > 3); // 5
     let colors = ['red', 'green', 'blue'];
     colors.find(element => element = `red`); // true
     ```
   - `splice`: It accept the testing function and condition satisfies it return the first value which satisfy the condition.
   - It mutate the original array.

13. `unshift`

   - Parameter: It will add the first element from an array.
   - Return: add element at the beginning of an array.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(1); //[1,2,3]
     let colors = ['red', 'green', 'blue'];
     colors.shift('pink'); // ['pink','red','green', 'blue']
     ```
   - `shift`: add first element of an object
   - It mutate the original array.
14. `findIndex`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

   
15. `filter`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array


16. `flat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
17. `forEach`
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
18. `map`
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
19. `pop` :
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
20. `reduce`
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
21. `slice`
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
22. `some`
   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
