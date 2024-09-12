let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const ranNum = Math.floor(Math.random() * 10);
  return ranNum;
}
console.log(generateTarget());