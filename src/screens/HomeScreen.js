import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>The screen on which my home exists.</Text>
    <Text style={styles.content}>This is some random text like that</Text>

    <Button
      style={styles.content}
      title="Component Screen"
      onPress={() => { navigation.navigate('Components'); }}
    />

    <Button
      style={styles.content}
      title="List Screen"
      onPress={() => { navigation.navigate('List'); }}
    />

    <Button
      style={styles.content}
      title="Exercise Screen"
      onPress={() => { navigation.navigate('Exercise'); }}
    />

    <Button
        style={styles.content}
        title="Nature Screen"
        onPress={() => { navigation.navigate('Nature'); }}
      />

    <Button
        style={styles.content}
        title="Counter Screen"
        onPress={() => { navigation.navigate('Counter'); }}
      />

    <Button
        style={styles.content}
        title="Color Screen"
        onPress={() => { navigation.navigate('Color'); }}
      />

    <Button
        style={styles.content}
        title="Color Selector Screen"
        onPress={() => { navigation.navigate('ColorSelector'); }}
      />
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
    marginVertical: 20,
  },
  image: {
    padding: 50,
  }
});

export default HomeScreen;
