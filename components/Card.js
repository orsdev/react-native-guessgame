import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, styles }) => {
  return (
    <View style={{ ...styling.card, ...styles }}>{children}</View>
  );
};

const styling = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 20,
    borderRadius: 20
  }
});

export default Card;
