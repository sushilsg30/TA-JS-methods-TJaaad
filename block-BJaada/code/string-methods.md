Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 
   -Parameter: just have to put dot and function
   -Return: convert whole data into uppercase.(string data type)
   ```js
   let name = `Arya`;
   name.toUpperCase(); //"ARYA"
   let tagline = `We will succeed`;
   tagline.toUpperCase();
   ```
   `toUpperCase` :convert data into uppercase.

3. `toLowerCase`
   -Parameter: just have to put dot and function
   -Return: convert whole data into uppercase.(string data type)
   ```js
   let name = `Arya`;
   name.toLowerCase(); //"arya"
   let tagline = `We will succeed`;
   tagline.toLowerCase(); // 'we will succeed'
   ```
   `toLowerCase` :convert data into uppercase.


4. `trim`
  -Parameter: just have to put dot and function.
  -Return: remove all the white spaces from both end.(string data type)
   ```js
   let name = `    Arya    `;
   name.trim(); //"Arya";
   let tagline = `    We will succeed    `;
   tagline.trim(); // 'we will succeed';
   ```
   `trim` :Remove all white spaces from both the ends.


5. `trimEnd`
  -Parameter: just have to put dot and function.
  -Return: remove all the white spaces from tail end.(string data type)
   ```js
   let name = `    Arya    `;
   name.trimend(); //"Arya";
   let tagline = `We will succeed    `;
   tagline.trimend(); // 'we will succeed';
   ```
   `trim` :Remove all white spaces from tail ends.


6. `trimStart`

  -Parameter: just have to put dot and function.
  -Return: remove all the white spaces from front end.(string data type)
   ```js
   let name = `    Arya    `;
   name.frontend(); //"Arya";
   let tagline = `    We will succeed`;
   tagline.frontend(); // 'we will succeed';
   ```
   `fronttrim` :Remove all white spaces from tail ends.

7. `concat`

  -Parameter: One or more string to concatinate to string.
  -Return: Concatenated string(string data type)
   ```js
   let name = `Arya`;
   let surname =`Stark`;
   name.concat(' ', surname); //"Arya Stark";
   ```
   `concat` :Concatenate two strings


8. `endsWith`

  -Parameter: The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
  -Return: true or false
   ```js
   let name = `Endgame Arya`;
   let surname =`Stark`;
   name.endWith (Arya); true
   ```
   `endWith`: We can verify the ending characters.

9. `includes`:we can inclide new value character or number

10. `indexOf`: It will search a word and display its index.

11. `lastIndexOf`: same as index of but from tailend
12. `padEnd`:It will apply padding from tail end and increase length to some specific length.
13. `padStart`: It will apply padding at start.
14. `repeat`:reoeat given string and how many times 
15. `replace`:replace iven string
16. `slice`:to cut down given string
17. `split`: breakdown in between.
18. `substring`:create two string out of one.
