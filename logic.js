export const geniusArray = []
const playerArray = []

// Função para pegar um número aleatório


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


//Função para adicionar um elemento na array

export function nextLevel(){
    geniusArray.push(getRandomInt(3))
    console.log(geniusArray)
}

//Player game

function playerPlay(){
    

}

//Buttons 

let buttonPress = 0
export function blueButton(){
  buttonPress = 0
  playerArray.push(buttonPress)
  validation()
  console.log(buttonPress)
} 
export function greenButton(){
  buttonPress = 1
  playerArray.push(buttonPress)
  validation()
  console.log(buttonPress)
}
export function redButton(){
  buttonPress = 2
  playerArray.push(buttonPress)
  validation()
  console.log(buttonPress)
}
export function yellowButton(){
  buttonPress = 3
  playerArray.push(buttonPress)
  validation()
  console.log(buttonPress)
}


function validation(){
  for ( let index = 0; index < geniusArray.length; index++){
    if (geniusArray[index] === playerArray[index]){
      console.log("corret, next");
      
    }else{
      console.log("Game over")
    }
  }
  nextLevel()

}

