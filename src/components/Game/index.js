import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ProgressViewIOSComponent,
  Animated,
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

Buttons.Blue = styled.Text`
  width: 150px;
  height: 150px;
  background-color: #1e90ff;
  border-top-left-radius: 50px;
  overflow: hidden;

`;

Buttons.Green = styled.Text`
  width: 150px;
  height: 150px;
  background-color: #3cb371;
  border-top-right-radius: 50px;
  overflow: hidden;
`;

Buttons.Red = styled.Text`
  width: 150px;
  height: 150px;
  background-color: #fa8072;
  border-bottom-left-radius: 50px;
  overflow: hidden;
`;

Buttons.Yellow = styled.Text`
  width: 150px;
  height: 150px;
  background-color: #ffd700;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`;

export default function Game(props) {

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
          <Buttons.Blue >0</Buttons.Blue>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            greenButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Buttons.Green >1</Buttons.Green>
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
          <Buttons.Red >2</Buttons.Red>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {            
            yellowButton();
            props.setArrayGame();
            props.screenState();
            props.setArrayGameShow();
          }}
        >
          <Buttons.Yellow >3</Buttons.Yellow>
        </TouchableOpacity>
      </Buttons.Bot>
    </Buttons>
  );
}
