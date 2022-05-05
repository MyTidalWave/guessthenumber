import {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [selectedNumber, setSelectedNumber] = useState(undefined);

  const startGameHandler = (number) => {
    setSelectedNumber(number);
  }

  let content = selectedNumber ? 
    <GameScreen selectedNumber={selectedNumber}/> :
    <StartGameScreen onStartGame={startGameHandler}/>



  return (
    <View style={styles.screen}>
      <Header title={"Hello There!"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})