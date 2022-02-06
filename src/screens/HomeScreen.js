import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>The screen on which my home exists.</Text>
    <Text style={styles.content}>This is some random text like that</Text>
    <Image style={styles.image} source={5}></Image>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'gray',
    padding: 20,
  },
  content: {
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: 'orange',
  },
  image: {
    padding: 50,
  }
});

export default HomeScreen;
