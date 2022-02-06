import React from 'react';
import { Text, StyleSheet } from 'react-native';

/**
 * @desc Component that represents second screen for our app.
 * @returns some JSX output.
 */
const ComponentScreens = () => {
    return <Text style={styles.text}>This is my component screen</Text>
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: '300',
        color: 'maroon',
        backgroundColor: 'green',
        height: '100%',
        paddingTop: 30,
        paddingLeft: 20,
    }
});

export default ComponentScreens;