import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text>This is the beginning</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  containerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
