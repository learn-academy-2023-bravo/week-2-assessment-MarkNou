// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Create a function called evenlyDivisbleByThree
// Create a parameter called 'object' that will take an object and key as an argument
// Create conditional statement
// Use the modulo operator to divide the given value by 3. If it strictly equals 0 return `${object} is evenly divisble by 3`. 
// If not, return `${object} is not evenly divisible by 3`
// If number is zero, return 'undefined'
// For any non number datatypes, return 'error'
// Return a string interpolation stating if given object is or is not divisble by 3, undefined, or is an error


// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("evenlyDivisibleByThree", () => {
    it("Return a string interpolation stating if given object is or is not divisble by 3, undefined, or is an error", () => {
        expect(evenlyDivisibleByThree(15)).toEqual('15 is divisible by three')
        expect(evenlyDivisibleByThree(0)).toEqual('undefined')
        expect(evenlyDivisibleByThree(-7)).toEqual('-7 is not divisible by three')
    })
} )  

//Jest output: 
// FAIL  ./jest.test.js
// evenlyDivisibleByThree
//   ✕ Return a string interpolation stating if given object is or is not divisble by 3 (2 ms)

// ● evenlyDivisibleByThree › Return a string interpolation stating if given object is or is not divisble by 3

//   ReferenceError: evenlyDivisibleByThree is not defined



// b) Create the function that makes the test pass.

const evenlyDivisibleByThree = (object) => {
    if(object === 0) {
        return 'undefined' 
    } else if(object !== 0) {
        return `${object} is not evenly divisible by three`
    } else if(object % 3 === 0 ) {
        return `${object} is evenly divisible by three`
    } else return "error"
}

console.log(evenlyDivisibleByThree(object1.number)) //output: "15 is divisible by three"
console.log(evenlyDivisibleByThree(object2.number)) //output: "0 is divisible by three"
console.log(evenlyDivisibleByThree(object3.number)) //output: "-7 is not divisible by three"

//Jest output:
// PASS  ./jest.test.js
// evenlyDivisibleByThree
//   ✓ Return a string interpolation stating if given object is or is not divisble by 3, undefined, or is an error (7 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Create a function called upperCase
// Create parameter called "array" that will hold the data
// Use .map() to iterate through every index in the array
// Use .toUpperCase() to capitalize every value while interating through the array
// Return the array with all words capitalized 

// a) Create a test with expect statements for each of the variables provided.

describe("upperCase", () => {
    it("Takes in an array and returns a new array with all characters capitalized", () => {
        expect(upperCase(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual([ 'STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW' ])
        expect(upperCase(["temperature", "database", "chopsticks", "mango"])).toEqual([ 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO' ])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

//Jest output:
// FAIL  ./jest.test.js
// upperCase
//   ✕ Takes in an array and returns a new array with all characters capitalized (2 ms)

// ● upperCase › Takes in an array and returns a new array with all characters capitalized

//   ReferenceError: upperCase is not defined

// b) Create the function that makes the test pass.


const upperCase = (array) => {
    return array.map((value) => value.toUpperCase())
}

console.log(upperCase(randomNouns1))  //output: [ 'STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW' ]
console.log(upperCase(randomNouns2)) //output: [ 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO' ]

//Jest output:
// PASS  ./jest.test.js
// upperCase
//   ✓ Takes in an array and returns a new array with all characters capitalized (3 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Create a function called firstVowel
// Declare a variable containing all the vowels
// Use a for loop to iterate through the index's of the string to find location of first vowel
// Return index of first vowel

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

describe ("firstVowel", () => {
    it("returns the index of the first vowel", () => {
        expect(firstVowel("learn")).toEqual(1)
        expect(firstVowel("academy")).toEqual(0)
        expect(firstVowel("challenges")).toEqual(2)
    })
})

//Output: 
//  FAIL  ./jest.test.js
//   firstVowel
//   ✕ returns the index of the first vowel (1 ms)

// ● firstVowel › returns the index of the first vowel

//   ReferenceError: firstVowel is not defined

const firstVowel = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        return i;
      }
    }
  }

  
  console.log(firstVowel(vowelTester1)) //Output: 1
  console.log(firstVowel(vowelTester2)) //Output: 0
  console.log(firstVowel(vowelTester3)) //Output: 2

  //Jest Output:
//   PASS  ./jest.test.js
//   firstVowel
//     ✓ returns the index of the first vowel (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.355 s, estimated 1 s

