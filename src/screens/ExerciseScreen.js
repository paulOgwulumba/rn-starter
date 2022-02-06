import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ExerciseScreen = () => {
    const myName = 'Paul';
    return <View>
        <Text style={styles.headerText}>Getting started with React Native!</Text>
        <Text style={styles.bodyText}>My name is {myName} and I have a font-size of 20.</Text>
    </View>;
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 45,
    },
    bodyText: {
        fontSize: 20
    },
});

export default ExerciseScreen;