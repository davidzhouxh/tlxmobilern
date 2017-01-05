import React, { Component } from 'react';
import { View, Image, StyleSheet, NativeModules } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Button } from './common';

class PhotoReviewTemp extends Component {

    onButtonPress() {
        debugger;
        NativeModules.RNImageToBase64.getBase64String(this.props.photo.path, (err, base64) => {
            console.log(base64);
            
            var body = {
                imageLabel: 'Gov. Pic ID',
                imageContent: base64
            };

            axios.post('http://qamobile.titlemax.biz:8181/mobile-acv-service/api/images', body)
                .then(resp => console.log(resp))
                .catch((error) => console.log(error));

        })

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Image
                        source={{ uri: this.props.photo.path }}
                        style={styles.image}
                        />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Upload
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    image: {
        width: 300,
        height: 300
    }
});

export default PhotoReviewTemp;
