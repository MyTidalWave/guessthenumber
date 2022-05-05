import { useState } from "react"
import { StyleSheet, Text, View, TextInput } from 'react-native'

import { Button } from "react-native-web";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from '../constants/colors'

const StartGameScreen = ({ onStartGame }) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setselectedNumber] = useState(undefined)

    const numberInputHandler = input => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setConfirmed(false)

    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return

        setConfirmed(true)
        setselectedNumber(chosenNumber)
        setEnteredValue('')
    }

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.selectedContainer}>
                <Text> You selected: </Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button 
                title='Ready to start game?'
                onPress={ () => onStartGame(selectedNumber) } 
                />
            </Card>
        )
        
    }

    return (
        <View style={styles.screen}>
            <Card>
                <Text style={styles.title}>Select a number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit //Android
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                
                />
                <View style={styles.buttonContainer}> 
                    <View style={styles.button} >
                        <Button  
                            title="Reset"
                            color={Colors.primary}
                            onPress={resetInputHandler}
                        />
                    </View>                  
                    
                    <View style={styles.button} >
                        <Button 
                            title="Confirm"
                            color={Colors.secondary}
                            onPress={confirmInputHandler}
                        />
                    </View>
                    
                </View>
            </Card>
            {confirmedOutput}
        </View>
    )
}

const styles = StyleSheet.create({
    selectedContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    button: {
        width: 100


    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen