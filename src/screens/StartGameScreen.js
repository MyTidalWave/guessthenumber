import { useState } from "react"
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Button } from "react-native-web";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Select a number</Text>
            <View style={styles.inputContainer}>
                <TextInput />
                <View style={styles.buttonContainer}>                   
                    <Button style={styles.button} title="Reset"/>
                    <Button style={styles.button} title="Confirm"/>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'


    },
    title: {
        fontSize: 20,
        marginVertical: 10


    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        //ios
        shadowColor: 'black',
        textShadowOffset: { width: 0, height: 2},
        shadowOpacity: .26,
        shadowRadius: 6,
        //
        backgroundColor: 'white',
        
        elevation: 5, //Only Android
        padding: 20,
        borderRadius: 10



    },
    button: {


    },
    buttonContainer: {
        flexDirection: 'row'



    }
});

export default StartGameScreen