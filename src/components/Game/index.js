import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ProgressViewIOSComponent,
  Animated,
  StyleSheet
} from "react-native";   
import styled from "styled-components";

import {
  blueButton,
  greenButton,
  redButton,
  yellowButton,
} from "../../../GameLogic";

const LevelText = styled.Text`
  color: white;
  font-size: 40px;
  padding-bottom: 5px;
`;

LevelText.Score = styled.Text`
  color: white;
  font-size: 30px;
  padding-bottom: 20px;
`;

const Buttons = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  
`;

Buttons.Top = styled.Text`
  flex-direction: row;
`;

Buttons.Bot = styled.Text`
  flex-direction: row;
`;


Buttons.Blue = styled.View`
  width: 150px;
  height: 150px;
  background-color: #1e90ff;
  border-top-left-radius: 50px;
  overflow: hidden;

`;

Buttons.Green = styled.View`
  width: 150px;
  height: 150px;
  background-color: #3cb371;
  border-top-right-radius: 50px;
  overflow: hidden;
`;

Buttons.Red = styled.View`
  width: 150px;
  height: 150px;
  background-color: #fa8072;
  border-bottom-left-radius: 50px;
  overflow: hidden;
`;

Buttons.Yellow = styled.View`
  width: 150px;
  height: 150px;
  background-color: #ffd700;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`;





export default function Game(props) {
  const opacity = useState(new Animated.Value(1))[0]



  opacityAnimationActive()
  function opacityAnimationActive(){
    Animated.timing(opacity,{
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
    
  }   
  function opacityAnimationInaActive(){
    Animated.timing(opacity,{
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }
  setTimeout(()=>{
    opacityAnimationInaActive() 
  },1000);

  return (
    <Buttons >
      <LevelText>Level</LevelText>
      <LevelText.Score>{props.arrayGame}</LevelText.Score>
      <LevelText.Score>{props.arrayGameShow}</LevelText.Score>
      <Buttons.Top>
        <TouchableOpacity
          onPress={() => {
            blueButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Animated.View style={{opacity}}>
            <Buttons.Blue ><Text style={{padding: 15}}>0</Text></Buttons.Blue>
          </Animated.View> 
          
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            greenButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Animated.View style={{opacity}}>
            <Buttons.Green ><Text>1</Text></Buttons.Green>
            </Animated.View>
        </TouchableOpacity>
      </Buttons.Top>

      <Buttons.Bot>
        <TouchableOpacity
          onPress={() => {
            redButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Animated.View style={{opacity}}>
            <Buttons.Red ><Text>2</Text></Buttons.Red>
            </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {            
            yellowButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Animated.View style={{opacity}}>
            <Buttons.Yellow ><Text>3</Text></Buttons.Yellow>
            </Animated.View>
        </TouchableOpacity>
      </Buttons.Bot>
    </Buttons>
  );
}


