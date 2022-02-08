import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../components/Card';

const NatureScreen = () => {
    return(
        <View style={ styles.wrapper }> 
            <Card 
                imageUrl={require('../images/mountain.jpeg')} 
                caption='A magnificient mountain'
                imageScore={2}
            />

            <Card 
                imageUrl={require('../images/beach.jpeg')} 
                caption='A beautiful beach.'
                imageScore={20}
            />

            <Card 
                imageUrl={require('../images/forest.jpeg')} 
                caption='A fearful forest'
                imageScore={12}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        overflow: 'scroll'
    }
});

export default NatureScreen;