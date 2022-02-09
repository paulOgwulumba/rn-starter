import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CounterScreen = () => {
    return(
        <View style={styles.wrapper}>
            <TouchableOpacity>Increase</TouchableOpacity>
            <TouchableOpacity>Decrease</TouchableOpacity>
            <View>
                <Text>Current Count:</Text>
                <Text>0</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        
    }
})

export default CounterScreen;