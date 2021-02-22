import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";

import Home from "./src/components/Home";
import GameOver from "./src/components/GameOver";
import Game from "./src/components/Game/index";

import { nextLevel, geniusArray, gameOver, playGame } from "./GameLogic";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#2c3e50", "#3498db"]}
      style={{
        flex: 1,
      }}
    >
      {children}
    </LinearGradient>
  );
};

const screenStates = {
  Home: "Home",
  Game: "Game",
  GameOver: "GameOver",
};

export default function App(){
  const [arrayGame, setArrayGame] = useState(1);
  const [arrayGameShow, setArrayGameShow] = useState(geniusArray);
  const [screenState, setScreenState] = useState(screenStates.Home);

  function restartGame() {
    setScreenState(screenStates.Home);
    setArrayGame(1);
  }

  function changeScreen() {
    if (gameOver === true) {
      setScreenState(screenStates.GameOver);
    } else {
      setScreenState(screenStates.Game);
    }
  }

  return (
    <Background>
      {screenState === screenStates.Home && (
        <Home
          screenState={() => changeScreen()}
          playGame={() => playGame()}
          setArrayGameShow={() => setArrayGameShow(geniusArray)}
        />
      )}

      {screenState === screenStates.Game && (
        <Game
          arrayGameShow={arrayGameShow}
          arrayGame={arrayGame}
          setArrayGame={() => setArrayGame(geniusArray.length)}
          screenState={() => changeScreen()}
          setArrayGameShow={() => setArrayGameShow(geniusArray)}
        />
      )}

      {screenState === screenStates.GameOver && (
        <GameOver arrayGame={arrayGame} restartGame={() => restartGame()} />
      )}
    </Background>
  );
}
