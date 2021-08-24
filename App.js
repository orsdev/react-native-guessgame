import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';


import Header from './components/Header';
import GameOver from './screens/GameOver';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';


let customFonts = {
  'Open-Sans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'Open-Sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
}

export default function App() {
  const [selectedNumber, setSelectedNumber] = React.useState();
  const [guessRounds, setGuessRounds] = React.useState(0);
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    loadFontsAsync();
  }, []);


  async function loadFontsAsync() {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const startGameHandler = (numberSelected) => {
    setSelectedNumber(numberSelected);
    setGuessRounds(0);
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  }

  const resetGameHandler = () => {
    setSelectedNumber('');
    setGuessRounds(0);
  }


  let content = <StartGameScreen
    onStartGameProp={startGameHandler} />


  if (selectedNumber && guessRounds <= 0) {
    content = (
      <View
        style={{
          marginVertical: 10,
          height: '100%',
          flexDirection: 'column',
          maxWidth: '90%',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <GameScreen userChoice={selectedNumber}
          onGameOverProp={gameOverHandler} />
      </View>
    )
  } else if (guessRounds > 0) {
    content = <GameOver
      userGuess={selectedNumber}
      numOfRounds={guessRounds}
      resetGame={resetGameHandler} />
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
    alignItems: 'center',
    fontFamily: 'Open-Sans-Bold'
  }
});
