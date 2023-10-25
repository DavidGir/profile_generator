const readline = require('readline');

// This creates the readline interface (built-in Node.js package):
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Store all questions in an array:
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favorite (eg: dinner, brunch, etc.)",
  "What's your favorite thing to eat for that meal?",
  "Which sport is your absolute favorite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];
// Empty object to contain our answers:
const answers = {};

const surveyQuestion = (questionIndex) => {
  // Termination condition for recursion below:
  if (questionIndex >= questions.length) {
    // Once all questions have been passed it prints the collected answers and closes the readline interface:
    console.log("Thank you for your valuable feedback", answers);
    // close readline interface and function stops executing:
    return rl.close();
  }

  // Answer is the users answer obtained from the callback function of rl.question:
  rl.question(`${questions[questionIndex]}`, (answer) => {
    // The questions strings become properties of the answers empty object and the answer is the value.
    answers[questions[questionIndex]] = answer;
    // Stores current answer and asks the next question by recursively calling itself (eventually to the point that no question is passed anymore):
    surveyQuestion(questionIndex + 1);
  });
};

// Call function to start survey:
surveyQuestion(0);