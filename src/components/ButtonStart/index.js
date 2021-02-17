import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { nextLevel, geniusArray } from '../../../logic'
import Game from '../Game'

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





export default function StartButton(props){

  if(props.goGame === false){
    return(

      <ButtonPlayArea>
            <TouchableOpacity onPress={()=>{
              props.setGoGame();
              props.nextLevel();
              props.setArrayGame()
            
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

  