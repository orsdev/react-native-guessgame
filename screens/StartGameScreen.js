import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert
} from 'react-native';
import Card from '../components/Card';

const StartGameScreen = ({ onStartGameProp }) => {
  const [enteredValue, setEnteredValue] = React.useState('');
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState();

  const inputHandler = (value) => {
    const replaceNonNumbers = value.replace(/[^0-9]/g, '');
    setEnteredValue(replaceNonNumbers);
  }

  const resetInputHandler = () => {
    setEnteredValue('');
    onStartGameProp('');
    setConfirmed(false);
  }

  const confirmInputHandler = () => {
    if (enteredValue) {
      const toNumber = parseInt(enteredValue);
      if (isNaN(toNumber) || toNumber <= 0 || toNumber > 99) {
        Alert.alert('Invalid Number',
          'Input has to be a number between 1 to 99',
          [
            { text: 'Close', style: 'destructive', onPress: resetInputHandler }
          ]
        );

        return;
      } else {
        setSelectedNumber(toNumber);
        setEnteredValue('');
        setConfirmed(true);
      }
    }
  }

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card styles={styles.summaryContainer}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>You selected: {selectedNumber}</Text>
        <Button title="Start Game" onPress={() => onStartGameProp(selectedNumber)} />
      </Card>
    )
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card styles={styles.containerInner}>
          <Text>Select a Number</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            autoCorrect={false}
            maxLength={2}
            blurOnSubmit
            value={enteredValue}
            onChangeText={inputHandler}
          />
          <View style={styles.buttons}>
            <Button title="Reset" onPress={resetInputHandler} />
            <Button title="Confirm" onPress={confirmInputHandler} />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: '90%',
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  summaryContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default StartGameScreen;
