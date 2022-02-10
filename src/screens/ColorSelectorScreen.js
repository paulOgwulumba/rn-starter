import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import editColor from '../utils/editColor';

const ColorSelectorScreen = () => {
    const [colors, setColor] = useState([0, 255, 0]);
    const display = {
        width: 200,
        height: 150,
        marginTop: 20,
    };

    return (
        <View style={styles.sectionOverview}>
            <View style={styles.sectionWrapper}>
                <Text style={styles.text}>Red</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        editColor('add', 'red', colors, setColor)
                    }}
                >
                    More Red
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editColor('decrease', 'red', colors, setColor)}
                >
                    Less Red
                </TouchableOpacity>
            </View>

            <View style={styles.sectionWrapper}>
                <Text style={styles.text}>Green</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editColor('add', 'green', colors, setColor)}
                >
                    More Green
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editColor('decrease', 'green', colors, setColor)}
                >
                    Less Green
                </TouchableOpacity>
            </View>

            <View style={styles.sectionWrapper}>
                <Text style={styles.text}>Blue</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editColor('add', 'blue', colors, setColor)}
                >
                    More Blue
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => editColor('decrease', 'blue', colors, setColor)}
                >
                    Less Blue
                </TouchableOpacity>
            </View>

            <View style={{ ...display, backgroundColor: unpackColor(colors)}}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    sectionOverview: {
        display: 'flex',
        alignItems: 'center',
    },

    sectionWrapper: {
        paddingHorizontal: 30,   
        marginTop: 20,  
        width: '100%'
    },

    text: {
        marginLeft: 5,
        fontWeight: 'bold',

    },

    button: {
        backgroundColor: '#800020',
        padding: 10,
        marginVertical: 5,
        color: 'white',
        textAlign: 'center',
    },
});


const unpackColor = (color = [0, 0, 0]) => {
    console.log(color);
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};

export default ColorSelectorScreen;