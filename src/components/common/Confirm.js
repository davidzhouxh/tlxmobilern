import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { CardSectionNoMargin } from './CardSectionNoMargin';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, titleStyle, textStyle, cardSectionStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { } }
            >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>

                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSectionNoMargin>
                    <Button onPress={onAccept}>I Agree</Button>
                    <Button onPress={onDecline}>Cancel</Button>
                </CardSectionNoMargin>                    
            </View>
        </Modal>
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
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };
