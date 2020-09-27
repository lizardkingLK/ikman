import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import strings from '../../src/meta/strings.json'

export const CustomButton = (props) => {
    const { style = {}, textStyle = {}, onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: strings.primaryAccent,
        borderColor: strings.secondaryAccent,
        borderWidth: 2,
        shadowColor: strings.primaryDark,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    text: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: strings.primaryLight,
        textAlign: 'center'
    },
});