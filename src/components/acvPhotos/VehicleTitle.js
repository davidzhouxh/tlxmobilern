import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { PhotoCapture, Header, Footer } from '../common';
import { vehicleTypeSelect } from '../../actions';

class VehicleTitle extends Component {

    onPrevious(){
        Actions.pop();
    }

    onNext(){
        Actions.titleStatus();
    }

    onClickTakePhoto(){
        Actions.fullScreenPhoto({photoId: 'vehicleTitle'});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText='ACV' />
                <ScrollView>
                    <PhotoCapture
                        title='VEHICLE TITLE'
                        hintText="Capture a photo of the VEHICLE TITLE. Be sure the photo is clear and legible."
                        photo={this.props.photo}
                        onClickTakePhoto={this.onClickTakePhoto.bind(this)}
                        />
                </ScrollView>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({acv}) => {
    const currentAcv = acv.currentAcv;
    const photo = _.find(currentAcv.photos, {id: 'vehicleTitle'});
    return { currentAcv, photo };
}

export default connect(mapStateToProps, { })(VehicleTitle);

