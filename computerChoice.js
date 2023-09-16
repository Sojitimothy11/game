export function gtComputerChoice(){
  let choices=["rock","paper","scissors"];
  let choice= Math.floor(Math.random()*choices.length);
  console.log("computer picked" +" "+ choices[choice]);
  return choices[choice];
}