import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const names = [
        { name: 'Anderson' },
        { name: 'George' },
        { name: 'Ugonna' },
        { name: 'Richmond' },
        { name: 'Samuel' },
        { name: 'Digilus' },
    ];

    const renderName = ({ item }) => {
        return <Text style={styles.nameStyle}>{item.name}</Text>
    }

    return (
        <View>
            <Text>This is my list screen.</Text>
            <FlatList 
                data={names} 
                renderItem={renderName} 
                keyExtractor={({name}) => { return name } }
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        backgroundColor: 'tomato',
        padding: 30,
        width: '100%',
        color: 'black',
        marginVertical: 50,
        marginHorizontal: 20,
    }
});

export default ListScreen;