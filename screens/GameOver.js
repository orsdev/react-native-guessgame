import React from "react";
import {
   View,
   Text,
   StyleSheet,
   Button,
   Image
} from "react-native";

const GameOver = ({ numOfRounds, userGuess, resetGame }) => {

   return (
      <View style={styles.container}>
         <Image
            source={require('../assets/images/success.png')}
            style={{ width: 250, height: 250 }}
            resizeMode="contain"
         />
         <Text
            style={styles.text}>
            The Game is Over
         </Text>
         <Text
            style={styles.text}>
            Number of Rounds: {numOfRounds}
         </Text>
         <Text
            style={styles.text}>
            Number was: {userGuess}
         </Text>
         <Button
            title="Restart Game"
            onPress={resetGame} />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   text: {
      fontSize: 18,
      marginVertical: 6
   }
});

export default GameOver;