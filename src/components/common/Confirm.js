import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { CardSectionNoMargin } from './CardSectionNoMargin';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline, title, hint, content, additionalContent }) => {
    const { containerStyle, textStyle, cardSectionStyle, titleStyle, hintStyle, buttonStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { } }
            >
            <View style={containerStyle}>
                <CardSectionNoMargin justifyContent='center'>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSectionNoMargin>
                <CardSectionNoMargin justifyContent='center'>
                    <Text style={hintStyle}>
                        {hint}
                    </Text>
                </CardSectionNoMargin>
                <CardSectionNoMargin justifyContent='center'>
                    <Text style={textStyle}>
                        {content}
                    </Text>
                </CardSectionNoMargin>
                <CardSectionNoMargin justifyContent='center'>
                    <Text style={textStyle}>
                        {additionalContent}
                    </Text>
                </CardSectionNoMargin>                                
                <CardSectionNoMargin padding={10}>
                    <Button onPress={onAccept}  style={buttonStyle} >I Agree</Button>
                </CardSectionNoMargin>                    
                <CardSectionNoMargin padding={10} style={styles.paddingBottom}>
                    <Button onPress={onDecline} >Cancel</Button>
                </CardSectionNoMargin>     
            </View>
        </Modal>
    );
};

const styles = {
    buttonStyle: {
        backgroundColor: "red", 
        borderColor: "red"    
    },
    paddingBottom: {
        paddingBottom: 20
    },
    cardSectionStyle: {
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titleStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5
    },
    hintStyle: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
        lineHeight: 30,
        paddingLeft: 20
    },
    textStyle: {
        flex: 1,
        fontSize: 14,
        lineHeight: 28,
        fontWeight: '400',
        paddingLeft: 20,
        paddingRight: 20        
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        // width: 270,
        // height: 300
    }
};

export { Confirm };
