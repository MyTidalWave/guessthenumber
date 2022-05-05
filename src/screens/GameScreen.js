import React, {useState, useRef} from "react";
import {Button, StyleSheet, Text, View, Alert} from 'react-native-web';
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

import Constants from '../constants/constants'

const generateRandomBetween = ( min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    //Math.random() generates random num between 0-1
    const randNum = Math.random() * (max - min) + min;
    const randNumFloored = Math.floor(randNum);

    if(randNumFloored == exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNumFloored;
    }
}

const GameScreen = ({selectedNumber}) => {

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(currentLow.current, currentHigh.current, selectedNumber));

    

    const nextGuess = direction => {

        if((direction === Constants.direction.higher && currentGuess > selectedNumber) ||
        (direction === Constants.direction.lower && currentGuess < selectedNumber)) {
            //Alert('Pls dont lie', 'You know thats wrong', [{text: 'Sorry', style:'cancel'}])
            alert('Pls dont lie')
            return
        }


    }

    return (
        <View style={styles.screen}>
            <Text>Cmputer Guess: </Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' onPress= { () => {nextGuess(Constants.direction.lower) }}/>
                <Button title='Higher' onPress= { () => {nextGuess(Constants.direction.higher) }}/>
            </Card>
        </View>
    )     
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});

export default GameScreen
