import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

import { geniusArray } from "../../../GameLogic";

const GameOverView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GameOverText = styled.Text`
  color: white;
  font-size: 50px;
`;

GameOverText.Subtext = styled.Text`
  color: white;
  font-size: 30px;
  padding-bottom: 50px;
`;

GameOverView.ButtonRestart = styled.Text`
  padding: 50px 50px;
  background-color: #a83279;
  font-size: 40px;
  border-radius: 20px;
  color: white;
`;

export default function GameOver(props) {
  return (
    <GameOverView>
      <GameOverText>Game Over</GameOverText>
      <GameOverText.Subtext>
        Score: {props.arrayGame}
      </GameOverText.Subtext>
      <TouchableOpacity>
        <GameOverView.ButtonRestart>Try Again</GameOverView.ButtonRestart>
      </TouchableOpacity>
      <GameOverText.Subtext style={{ paddingTop: 20 }}>
        Good Luck Next!
      </GameOverText.Subtext>
    </GameOverView>
  );
}
