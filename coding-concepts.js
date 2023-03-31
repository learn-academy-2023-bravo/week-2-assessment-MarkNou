// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: Outcome: ['B', 'r', 'a', 'v', 'o' '2', '0', '2', '3'] 
// b) Verify and explain: By using the built in method split(), it takes the string and seperates the characters and returns it as a string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: There is no console log or return within the function to display the string interpolation.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: .map iterates through the array and multiplys all values by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: .filter iterates through the array and uses the modulo operator to decicde if a value is even or odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Console.log invokes the object myCodingSkills. Using dot notation, it invokes the key "languages" and displays the value at index 0.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Bravo', year: 2023 }
// b) Verify and explain: The variable "learnStudent" deconstructs the object "Learn". Console.log then invokes the object and passes "George" as an argurment for the name.