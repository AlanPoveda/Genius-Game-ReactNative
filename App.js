import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';


import Home from './src/components/Home';
import GameOver from './src/components/GameOver';
import Game from './src/components/Game/index'

import { nextLevel, geniusArray, validation, gameOver } from './logic'

const Background = ({ children })=>{
  return(
    <LinearGradient 
      colors={['#2c3e50', '#3498db']}
      style={{
        flex:1,
      }}>
        { children }
    </LinearGradient>
  );
  
};



const screenStates = {
  Home: 'Home',
  Game: 'Game',
  GameOver: 'GameOver'

}




export default function App(){
  const [ arrayGame , setArrayGame] = useState([])
  const [ screenState, setScreenState] = useState(screenStates.Home)
  const [ gameIsOver, setGameIsOver ] = useState()
  
  


  function changeScreen(){

    
    if(gameOver === true){
      setScreenState(screenStates.GameOver)  
    }
    
    
    setScreenState(screenStates.Game)

  }

  
  return (
    <Background>
      
      {screenState === screenStates.Home && (
          <Home 
            
            arrayGame={arrayGame}

            
            screeState={()=>changeScreen()}
            setArrayGame={()=>setArrayGame([...arrayGame, geniusArray])}
            nextLevel={()=>nextLevel()}
          />
    )}
    
    {screenState === screenStates.Game && (
      <Game 
        
        

        arrayGame={arrayGame}
        setArrayGame={()=>setArrayGame([...arrayGame, geniusArray])}

        screeState={()=>changeScreen()}
      />  
    )}
      
      {screenState === screenStates.GameOver && (
      <GameOver

        arrayGame={arrayGame}
        
        
      />
    )}
     
      
      
    </Background>
  );
  
}

