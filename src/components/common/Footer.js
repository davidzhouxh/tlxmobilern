import React from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './CardSection';
import { CardSectionNoMargin } from './CardSectionNoMargin';
import { Button } from './Button';

const Footer = ({ onPrevious, onNext }) => {
    const { containerStyle, titleStyle, textStyle, cardSectionStyle } = styles;

    return (
        <View style={containerStyle}>
            <CardSectionNoMargin>
                <Button onPress={onPrevious}>{`<   Previous`}</Button>
                <Button onPress={onNext}>{`Next   >`}</Button>
            </CardSectionNoMargin>
        </View>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleStyle: {

        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 30
    },
    containerStyle: {
        // backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderTopWidth: 1,
        flex: 1,
        height: 50,
        justifyContent: 'center',
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0
    }
};

export { Footer };
