import React, {useState, useRef, useEffect} from "react";
import {Button, StyleSheet, Text, View, Alert} from 'react-native-web';

import Card from "../components/Card";


const GameOverScreen = ({rounds}) => {
    return (
        
        <View style={styles.screen}>
            <Card style={styles.selectedContainer}>
                <Text>The game is over</Text>
                <Text>Took me: {rounds} rounds</Text>
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
    selectedContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
});

export default GameOverScreen
