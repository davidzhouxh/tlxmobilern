import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import NumTextInput from 'react-native-num-textinput';
import { notesChanged, photoSent, updateTotalPhotosToSend } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class AdditionalNotes extends Component {

    onNotesChange(text) {
        this.props.notesChanged(text);
    }

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        // Actions.specialtyVehicle();
    }

    sendPhoto(photo) {
        NativeModules.RNImageToBase64.getBase64String(photo.url, (err, base64) => {

            //TODO set headers by interceptor
            var config = {
                headers: {
                    'store-number': 30289,
                    'user-name': 'tlxtestcsr2txcso',
                    'access-token': 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJUTVggRmluYW5jZSIsImF1ZCI6ImFjdi1tb2JpbGUiLCJleHAiOjE0NjMxMTAxNTQsImp0aSI6IlJrWDByR082UTl0TnVWTkxDVDh3dkEiLCJpYXQiOjE0NjMwNzU5NTQsIm5iZiI6MTQ2MzA3NTgzNCwic3ViIjoic2FpLnRhdnR1bSgzNjQ1NSkifQ.qSRdowIOPBTtcVyzqq-2NwUPMsFCWdzE9s012z2e4BO3xNgHS6iz4IyMt550qG44sCh6Kdg5j4qpQg-tnCTeXw'
                }
            };

            var body = {
                imageLabel: photo.serverId,
                imageContent: base64
            };

            axios.post('http://10.241.2.97:8181/mobile-acv-service/api/images', body, config)
                .then(resp => {
                    console.log(resp);
                    let photoId = photo.id;
                    let guid = resp.data;
                    this.props.photoSent(photoId, guid);
                    this.sendACVIfReady.bind(this);
                })
                .catch((error) => console.log(error));

        })
    }

    sendACVIfReady() {
        if (this.props.totalPhotosToSend !== 0 && this.props.totalPhotosSent !== 0 &&
            this.props.totalPhotosToSend === this.props.totalPhotosSent) {
            console.log('All photos uploaded, ready to send ACV...');
        } else {
            console.log('More photos to send, hang on...');
        }
    }

    onButtonPress() {
        debugger;
        console.log('Sending ACV...');
        let acvPhotos = this.props.currentAcv.photos;
        let totalPhotosToSend = 0;
        for (var propt in acvPhotos) {
            if (acvPhotos[propt].url !== '') {
                totalPhotosToSend++;
                this.sendPhoto(acvPhotos[propt]);
            }
        }
        this.props.updateTotalPhotosToSend(totalPhotosToSend);
        // Actions.vehicleType();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />

                <Card>

                    <CardSection>
                        <Text>
                            ADDITIONAL NOTES
                            Please take a moment and tell us anything else that may help determine an appropriate valuation. This should be anything that we could not determine from the photos or ratings that you have already provided. (75 Characters Maximum)
                        </Text>
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="ADDITIONAL NOTES"
                            label="Additional notes"
                            value={this.props.notes}
                            onChangeText={this.onNotesChange.bind(this)}
                            />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Send Assessment
                    </Button>
                    </CardSection>

                </Card>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({ acv }) => {
    const { currentAcv, totalPhotosToSend, totalPhotosSent } = acv;
    const { vehicleCondition } = currentAcv;
    const { notes } = vehicleCondition;
    console.log(currentAcv);
    return { currentAcv, notes, totalPhotosToSend, totalPhotosSent };
}

export default connect(mapStateToProps, {
    notesChanged, photoSent, updateTotalPhotosToSend
})(AdditionalNotes);
