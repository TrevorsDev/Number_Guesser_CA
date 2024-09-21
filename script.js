let humanScore = localStorage.getItem('humanScore') ? parseInt(localStorage.getItem('humanScore')) : 0;
let computerScore = localStorage.getItem('computerScore') ? parseInt(localStorage.getItem('computerScore')) : 0;
let currentRoundNumber = 1;

let humanGuess = 3;
let computerGuess = 8;
// Write your code below:
//Task I
const generateTarget = () => {
  const ranNum = Math.floor(Math.random() * 10);
  return ranNum;
}
console.log(generateTarget());

//Task II
const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  targetNum = generateTarget();
  if (humanGuess === computerGuess) {
    return `It's a tie! `;
} else if (Math.abs(targetNum - computerGuess) > Math.abs(targetNum - humanGuess)) {
  return true;
} else {
  return false;
  }
}

console.log(compareGuesses(humanGuess, computerGuess));

//Task III
const updateScore = (winner) => {
  if (winner === 'computer') {
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
  } else {
    humanScore++;
    localStorage.setItem('humanScore', humanScore);
  }
}
updateScore('computer');
console.log(computerScore);

