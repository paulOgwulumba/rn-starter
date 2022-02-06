import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const names = [
        { name: 'Anderson', id: 1 },
        { name: 'George', id: 2 },
        { name: 'Ugonna', id: 3 },
        { name: 'Richmond', id: 4 },
        { name: 'Samuel', id: 5 },
        { name: 'Digil', id: 6 },
    ];

    const renderName = ({ item }) => {
        return <Text style={styles.nameStyle}>{item.name}</Text>
    }

    return (
        <View>
            <Text>This is my list screen.</Text>
            <FlatList data={names} renderItem={renderName} />
        </View>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        backgroundColor: 'tomato',
        padding: 30,
        width: '100%',
        color: 'black'
    }
});

export default ListScreen;