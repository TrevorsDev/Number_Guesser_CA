let humanScore = localStorage.getItem('humanScore') ? parseInt(localStorage.getItem('humanScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
let currentRoundNumber = localStorage.getItem('currentRoundNumber') ? parseInt(localStorage.getItem('currentRoundNumber')) : 0;

let humanGuess = 0;
let computerGuess = 0;

// Write your code below:
/*Task I: creating a random number that we will use to weigh the computer and human guess against.*/
const generateTarget = () => {
  const ranNum = Math.floor(Math.random() * 10);
  return ranNum;
}
console.log(generateTarget());

//Task II: 
/* targetNum is assigned the generateTarget() function outside of the compareGuesses funtion. THis maintains consistency within the program, rather assinging targetNum this value inside the compareGuesses function. */
const targetNum = generateTarget();

/* Based on the manual human guess and the automated computer guess, here we compare the differences in values next to the automated targetNum. If human guess is closest or equal to targetNum, the boolean value true is returned. Else, false is returned. */
const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  const humanDiff = Math.abs(humanGuess - computerGuess);
  const computerDiff = Math.abs(targetNum - computerGuess);
  return humanDiff <= computerDiff;
}
//Calling the function for testing purposes
console.log(compareGuesses(humanGuess, computerGuess, targetNum));

/* Task III : This updates the computer or humans score depending on who wins the current round */
const updateScore = winner => {
  if (winner === 'computer') {
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
  } else if (winner === 'human'){
    humanScore++;
    localStorage.setItem('humanScore', humanScore);
  }
}
/* Task IV:*/ 
const advancedRound = (winner) => {
  currentRoundNumber++;
  localStorage.setItem('currentRoundNumber', currentRoundNumber)
}


