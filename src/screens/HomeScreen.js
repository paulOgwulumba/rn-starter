import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>The screen on which my home exists.</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'gray',
    padding: 20,
  },
});

export default HomeScreen;
