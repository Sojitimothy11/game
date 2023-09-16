const prompt = require("prompt-sync")();

function gtComputerChoice(){
  let choices=["rock","paper","scissors"];
  let choice= Math.floor(Math.random()*choices.length);
  console.log("computer picked" +" "+ choices[choice]);
  return choices[choice];
}

function userChoice(){
  let userInput=prompt(
    "Rock, Paper or Scissors, Choose One?:"
  );

  if(userInput=="rock"){
    console.log("You Picked Rock");
    return "Rock";
  }else if(userInput=="Paper"){
    console.log("You Picked Paper");
    return "Paper";
  }else if(userInput=="Scissors"){
    console.log("You Picked Scissors");
    return "Scissors";
  }else{
    console.log("Invalid Input")
  }
}

function game(){
  let playerSelection= userChoice();
  let computerSelection=computerChoice();

  if(playerSelection===computerSelection){
    console.log("Its a Tie try Again!!!");
  }else if(playerSelection==="rock"){
    if(computerSelection==="paper"){
      console.log("You lose!, Paper beat Rock");
      return "lose";
    }else if(computerSelection==="scissors"){
      console.log("You win!");
      return "win";
    }else{
      console.log("Its a Tie!");
      return "tie";
    }
  }else if(playerSelection==="paper"){
    if(computerSelection==="rock"){
      console.log("You win!, Paper beat rock");
      return "win";
    }else if(computerSelection==="paper"){
      console.log("Its Green,Its a Tie!");
      return "tie";
    }else{
      console.log(" Computer Won!!")
      return "lose";
    }
  }else{
    console.log("Enter a Valid Color of Red, Blue or Yellow");
  }
}

function play(){
  let round= 0;
  let userScore= 0;
  let compScore= 0;

  for(let i=1; i<=4; i++){
    let games= game();
    if(games==="won"){
      userScore++;
      round++;
      console.log(
        `Round:${round}, userScore ${userScore} :${compScore} compScore`
      );
    }else if(games ==="lose"){
      compScore++;
      round++;
      console.log(
        `Round: ${round}, userScore ${userScore} : ${compScore}compScore`
      );
    }else{
      round++;
      console.log(
        `Round:${round}, userScore ${userScore}: ${compScore} compScore`
      );
    }
  }
}

play();