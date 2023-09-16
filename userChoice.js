function userChoice() {
  let userInput = prompt("Rock, Paper or Scissors, Choose One?:");

  if (userInput == "rock") {
    console.log("You Picked Rock");
    return "Rock";
  } else if (userInput == "Paper") {
    console.log("You Picked Paper");
    return "Paper";
  } else if (userInput == "Scissors") {
    console.log("You Picked Scissors");
    return "Scissors";
  } else {
    console.log("Invalid Input");
  }
}
export default userChoice;