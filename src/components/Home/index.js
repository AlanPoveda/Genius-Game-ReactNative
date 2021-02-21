import React, { useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import styled from "styled-components";

const ButtonPlayArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;

const ButtonPlay = styled.Text`
  padding: 50px 50px;
  background-color: yellow;
  font-size: 40px;
  border-radius: 20px;
  color: grey;
  overflow: hidden;
`;

export default function Home(props) {
  return (
    <ButtonPlayArea>
      <TouchableOpacity
        onPress={() => {
          props.playGame();
          props.screenState();   
        }}
      >
        <ButtonPlay>Play</ButtonPlay>
      </TouchableOpacity>
    </ButtonPlayArea>
  );
}
