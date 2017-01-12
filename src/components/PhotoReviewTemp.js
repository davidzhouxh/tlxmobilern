import React, { Component } from 'react';
import { View, Image, StyleSheet, NativeModules } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Button } from './common';

class PhotoReviewTemp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: [{ label: 'Gov. Pic ID', path: "file:///storage/emulated/0/Pictures/IMG_20170111_121325.jpg" },
            { label: 'VEHICLE TITLE', path: "file:///storage/emulated/0/Pictures/IMG_20170106_170733.jpg" }]
        };
    }

    // set up a serial chain of promises, as opposed to a parallel chain with $q.all
    reducer(photo) {
        // result is the promise from the previous iteration's .then()
        NativeModules.RNImageToBase64.getBase64String(photo.path, (err, base64) => {
            photo.base64 = base64;
        });
    }




    getBase64(photo) {
        return new Promise(function (resolve, reject) {
            NativeModules.RNImageToBase64.getBase64String(photo.path, (err, base64) => {
                if (err === null) {
                    photo.base64 = base64;
                    resolve(photo);
                } else {
                    reject(err);
                }
            });
        });
    }

    sendPhoto(photo) {
        NativeModules.RNImageToBase64.getBase64String(photo.path, (err, base64) => {
            var config = {
                headers: {
                    'store-number': 30289,
                    'user-name': 'tlxtestcsr2txcso',
                    'access-token': 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJUTVggRmluYW5jZSIsImF1ZCI6ImFjdi1tb2JpbGUiLCJleHAiOjE0NjMxMTAxNTQsImp0aSI6IlJrWDByR082UTl0TnVWTkxDVDh3dkEiLCJpYXQiOjE0NjMwNzU5NTQsIm5iZiI6MTQ2MzA3NTgzNCwic3ViIjoic2FpLnRhdnR1bSgzNjQ1NSkifQ.qSRdowIOPBTtcVyzqq-2NwUPMsFCWdzE9s012z2e4BO3xNgHS6iz4IyMt550qG44sCh6Kdg5j4qpQg-tnCTeXw'
                }
            };

            var body = {
                imageLabel: photo.label,
                imageContent: base64
            };

            axios.post('http://10.241.2.97:8181/mobile-acv-service/api/images', body, config)
                .then(resp => console.log(resp))
                .catch((error) => console.log(error));

        })
    }



    onButtonPress() {
        debugger;

        this.state.photos.forEach(this.sendPhoto);

        /*
                NativeModules.RNImageToBase64.getBase64String(this.state.photo.path, (err, base64) => {
                    // console.log(base64);
        
                    var config = {
                        headers: { 'store-number': 30289,
                                    'user-name': 'tlxtestcsr2txcso',
                                    'access-token': 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJUTVggRmluYW5jZSIsImF1ZCI6ImFjdi1tb2JpbGUiLCJleHAiOjE0NjMxMTAxNTQsImp0aSI6IlJrWDByR082UTl0TnVWTkxDVDh3dkEiLCJpYXQiOjE0NjMwNzU5NTQsIm5iZiI6MTQ2MzA3NTgzNCwic3ViIjoic2FpLnRhdnR1bSgzNjQ1NSkifQ.qSRdowIOPBTtcVyzqq-2NwUPMsFCWdzE9s012z2e4BO3xNgHS6iz4IyMt550qG44sCh6Kdg5j4qpQg-tnCTeXw'
                                }
                    };
        
                    var body = {
                        imageLabel: 'Gov. Pic ID',
                        imageContent: base64
                    };
        
                    /*             axios.post('http://qamobile.titlemax.biz:8181/mobile-acv-service/api/images', body) 
                    axios.post('http://10.241.2.97:8181/mobile-acv-service/api/images', body, config)
                        .then(resp => console.log(resp))
                        .catch((error) => console.log(error));
        
                })
        */
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Image
                        source={{ uri: this.state.photos[0].path }}
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
