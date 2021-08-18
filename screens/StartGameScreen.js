import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card styles={styles.containerInner}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.button}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  containerInner: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }
});

export default StartGameScreen;
