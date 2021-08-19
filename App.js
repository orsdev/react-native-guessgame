import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [selectedNumber, setSelectedNumber] = React.useState();

  const startGameHandler = (numberSelected) => {
    setSelectedNumber(numberSelected)
  }

  let content = <StartGameScreen onStartGameProp={startGameHandler} />

  if (selectedNumber) {
    content = (
      <View
        style={{
          marginVertical: 10,
          height: 215,
          flexDirection: 'column',
          maxWidth: '90%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <GameScreen userChoice={selectedNumber} />
        <View
          style={{
            marginTop: 10
          }}>
          <Button
            title="Reset"
            onPress={() => setSelectedNumber('')} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});
