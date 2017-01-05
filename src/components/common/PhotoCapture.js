import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { Button } from './Button';
import { CardSection } from './CardSection';

class PhotoCapture extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { onClickTakePhoto, photo } = this.props;
        const photoPath = photo.placeholderUrl;
        return (
            <View style={{ marginTop: 10, padding: 1, backgroundColor: 'white' }}>
                <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16 }}>{photo.title}</Text>
                <Text style={{
                    color: '#555555',
                    paddingLeft: 10,
                    marginBottom: 5,
                    marginTop: 5,
                    fontSize: 12,
                }}>{photo.hintText}</Text>
                <View style={styles.imageContainer}>
                <Image
                    source={{uri:photoPath}}
                    style={styles.image}
                    />
                </View>
                <Button onPress={onClickTakePhoto}>Take Photo</Button>

            </View>);
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    image: {
        width: 290,
        height: 260,
        resizeMode: 'contain'
    }
});



export { PhotoCapture };

