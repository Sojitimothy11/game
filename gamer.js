export function game() {
  let playerSelection = userChoice();
  let computerSelection = computerChoice();

  if (playerSelection === computerSelection) {
    console.log("Its a Tie try Again!!!");
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You lose!, Paper beat Rock");
      return "lose";
    } else if (computerSelection === "scissors") {
      console.log("You win!");
      return "win";
    } else {
      console.log("Its a Tie!");
      return "tie";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log("You win!, Paper beat rock");
      return "win";
    } else if (computerSelection === "paper") {
      console.log("Its Green,Its a Tie!");
      return "tie";
    } else {
      console.log(" Computer Won!!");
      return "lose";
    }
  } else {
    console.log("Enter a Valid Color of Red, Blue or Yellow");
  }
}
