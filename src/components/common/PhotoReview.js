import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { Button } from './Button';
import { CardSection } from './CardSection';

class PhotoReview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { hintText, photo } = this.props;
        const photoPath = photo.placeholderUrl;
        return (
            <View style={{ marginTop: 10, padding: 1, backgroundColor: 'white' }}>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16 }}>{photo.title}</Text>
                        <Text style={{
                            color: '#555555',
                            paddingLeft: 10,
                            marginBottom: 5,
                            marginTop: 5,
                            fontSize: 12,
                        }}>{hintText}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: photoPath }}
                            style={styles.imageSmall}
                            />
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        source={{ uri: photo.url }}
                        style={styles.image}
                        />
                </CardSection>

            </View>);
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    imageSmall: {
        width: 130,
        height: 100,
        resizeMode: 'contain'
    },
    image: {
        width: 300,
        height: 240,
        resizeMode: 'contain'
    }
});



export { PhotoReview };

