const prompt = require("prompt-sync")();

let firstInput= parseInt(prompt("insert your first number"));
let secondInput= parseInt(prompt("insert your second number"));

let addition=firstInput + secondInput;
console.log(addition);

// function computerChoice(){
//   let choices=["red","blue","yellow"];
//   let choice= Math.floor(Math.random()*choices.length);
//   console.log("computer picked" +" "+ choices[choice]);
//   return choices[choice];
// }

// function userChoice(){
//   let userInput=prompt(
//     "what color would you like to play with?:"
//   ).toLowerCase();

//   if(userInput=="red"){
//     console.log("You Picked Red");
//     return "red";
//   }else if(userInput=="blue"){
//     console.log("You Picked Blue");
//     return "blue";
//   }else if(userInput=="yellow"){
//     console.log("You Picked Yellow");
//     return "yellow";
//   }else{
//     console.log("Invalid Input")
//   }
// }

// function game(){
//   let userColor= userChoice();
//   let compColor=computerChoice();

//   if(userColor===compColor){
//     console.log("Its a Tie try Again!!!");
//   }else if(userColor==="red"){
//     if(compColor==="blue"){
//       console.log("Its Purple,Computer Won!");
//       return "lose";
//     }else if(compColor==="yellow"){
//       console.log("Its Orange,You Won!");
//       return "won";
//     }else{
//       console.log("Its a Tie!");
//       return "tie";
//     }
//   }else if(userColor==="yellow"){
//     if(compColor==="red"){
//       console.log("Its Orange,You Won!");
//       return "won";
//     }else if(compColor==="blue"){
//       console.log("Its Green,Its a Tie!");
//       return "tie";
//     }else{
//       console.log("Its Purple, Computer Won!!")
//       return "lose";
//     }
//   }else{
//     console.log("Enter a Valid Color of Red, Blue or Yellow");
//   }
// }

// function play(){
//   let round= 0;
//   let userScore= 0;
//   let compScore= 0;

//   for(let i=1; i<=4; i++){
//     let games= game();
//     if(games==="won"){
//       userScore++;
//       round++;
//       console.log(
//         `Round:${round}, userScore ${userScore} :${compScore} compScore`
//       );
//     }else if(games ==="lose"){
//       compScore++;
//       round++;
//       console.log(
//         `Round: ${round}, userScore ${userScore} : ${compScore}compScore`
//       );
//     }else{
//       round++;
//       console.log(
//         `Round:${round}, userScore ${userScore}: ${compScore} compScore`
//       );
//     }
//   }
// }

// play();