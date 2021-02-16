import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { nextLevel, geniusArray } from '../../../logic'

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




export default function PlayButton(){
    const [ arrayGame , setArrayGame] = useState([])

    return(
    
    <ButtonPlayArea>
        <TouchableOpacity onPress={nextLevel, ()=> setArrayGame([...arrayGame, geniusArray])}>
        <ButtonPlay>
            Play
        </ButtonPlay>
        <Text>{arrayGame.length}</Text>
        </TouchableOpacity>
    </ButtonPlayArea>)
    
}

  