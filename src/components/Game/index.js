import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { blueButton, geniusArray, greenButton, redButton, yellowButton } from '../../../logic'


const Buttons = styled.View`
    flex:1;
    flex-direction: row;
    justify-content:center;
    

`;


Buttons.Blue = styled.View`
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
Buttons.Red = styled.View`
    width: 150px;
    height: 150px;
    background-color: #FA8072;
    border-bottom-left-radius: 50px;
`;
Buttons.Yellow = styled.View`
    width: 150px;
    height: 150px;
    background-color: #FFD700;
    border-bottom-right-radius: 50px;
`;


export default function Game(){
    

    return(
       <View style={{flex:1}}>
        <Buttons style={{backgroundColor:"blue"}}>
            <TouchableOpacity onPress={blueButton}>
                <Buttons.Blue/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={greenButton}>
                <Buttons.Green />
            </TouchableOpacity>
            
            
        </Buttons>
        <Buttons style={{backgroundColor:"red"}}>
            <TouchableOpacity onPress={redButton}>
                <Buttons.Red />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={yellowButton}>
                <Buttons.Yellow />
            </TouchableOpacity>
            
        </Buttons>
       </View>
        

    )
}