const prompt = require("prompt-sync")();
import { gtComputerChoice } from "./computerChoice.js";
import userChoice from "./userChoice.js";
import { game } from "./gamer.js";

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