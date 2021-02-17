import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { blueButton, geniusArray, greenButton, redButton, yellowButton } from '../../../logic'




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
    align-items:center;
    justify-content:center;
    
    

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
    background-color: #1E90FF;
    border-top-left-radius: 50px;

`;
Buttons.Green = styled.View`
    width: 150px;
    height: 150px;
    background-color: #3CB371;
    border-top-right-radius: 50px;
    
`;
Buttons.Red = styled.Text`
    width: 150px;
    height: 150px;
    background-color: #FA8072;
    border-bottom-left-radius: 50px;
`;
Buttons.Yellow = styled.Text`
    width: 150px;
    height: 150px;
    background-color: #FFD700;
    border-bottom-right-radius: 50px;
`;


export default function Game(){
    

    return(
       <Buttons > 
            <LevelText>
                Level 
            </LevelText>
            <LevelText.Score>
                0 
            </LevelText.Score>
            <Buttons.Top>
                <TouchableOpacity onPress={blueButton}>
                    <Buttons.Blue/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={greenButton}>
                    <Buttons.Green />
                </TouchableOpacity>
            </Buttons.Top>
           
            <Buttons.Bot>
                <TouchableOpacity onPress={redButton}>
                    <Buttons.Red />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={yellowButton}>
                    <Buttons.Yellow />
                </TouchableOpacity>
            
            </Buttons.Bot>
            
        
       </Buttons>
        

    )
}