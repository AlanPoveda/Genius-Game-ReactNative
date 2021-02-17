export const geniusArray = []
export let gameOver = false
let index = 0
let start = true
// Função para pegar um número aleatório


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//Função para adicionar um elemento na array

export function nextLevel(){
    geniusArray.push(getRandomInt(4))
    index = 0
    start = true
    console.log(geniusArray)
}

//Player game

function sendButton(buttonPress){
  if (start){
    start = false
  }else{
    index++
  }
  validation(buttonPress);
} 

function validation(buttonPress){
  
  
  if (geniusArray[index] === buttonPress){
    
    if ( index + 1 === geniusArray.length ){
      console.log("Right, next level");
      nextLevel();
    }
    console.log("Other value")
  }else{
    console.log("Game Over");
    return gameOver = true
    
  }
  
}

//Buttons 

export function blueButton(){
  sendButton(0)
} 
export function greenButton(){
  sendButton(1)
}
export function redButton(){
  sendButton(2)
}
export function yellowButton(){
  sendButton(3)
}