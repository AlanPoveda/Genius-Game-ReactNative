import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';


import StartButton from './src/components/ButtonStart'
import Game from './src/components/Game/index'
import { nextLevel, geniusArray, BlueButton } from './logic'

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


const ButtonPlayArea = styled.View`
  
  flex:1;
  justify-content: center;
  align-items:center;


`
const ButtonPlay = styled.Text`
  padding: 50px 50px;
  background-color: yellow;
  font-size: 40px;
  border-radius: 20px;
  color: grey;
  
  
`;


/*


const StartButton = ()=>{
  

  if(goGame === false){
    return(
    
      <ButtonPlayArea>
            <TouchableOpacity 
            onPress={()=> {
              setArrayGame([...arrayGame, geniusArray]);
              nextLevel();
              initGame();
            }}>
             <ButtonPlay >
                Play
              </ButtonPlay>
          </TouchableOpacity>
        </ButtonPlayArea>
    )
  }else{
    return <Game />
    
  }
  
}
*/

//Logica gabiarra










export default function App(){
  const [ arrayGame , setArrayGame] = useState([])
  const [ goGame , setGoGame ] = useState(false)




  return (
    <Background>
      <StartButton 
        
        goGame={goGame}
        arrayGame={arrayGame}
        
        setGoGame={()=>setGoGame(true)}
        setArrayGame={()=>setArrayGame([...arrayGame, geniusArray])}

        nextLevel={()=>nextLevel()}
        
       />
    </Background>
  );
  
}

