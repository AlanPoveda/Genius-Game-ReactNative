import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';



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



let goGame = false;


export default function App(){
  const [ arrayGame , setArrayGame] = useState([])
  const [ textButton, setButton] = useState("Start")

  
 
  function quandoClicar(){
    goGame = true;

  }

  return (
      <Background>
        <ButtonPlayArea>
          <TouchableOpacity 
          onPress={()=> {
            setArrayGame([...arrayGame, geniusArray]);
            nextLevel();
            quandoClicar();
            setButton("Restart")
          }}>
           <ButtonPlay >
              {textButton}
            </ButtonPlay>
        </TouchableOpacity>
      </ButtonPlayArea>
      {goGame === true && <Game />}
    </Background>
  );
  
}

