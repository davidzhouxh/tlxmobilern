import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { PhotoCapture, Header, Footer } from '../common';
import { vehicleTypeSelect } from '../../actions';

class AcvPhotoCapture extends Component {

    constructor(props){
        super(props);
        this.state = { photo: {} };
    }

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        switch (this.props.photoId) {
            case 'govId':
                Actions.acvPhotoCapture({ photoId: 'vehicleTitle', type: 'reset' });
                break;
            case 'vehicleTitle':
                Actions.acvPhotoCapture({ photoId: 'vinFromTitle', type: 'reset' });
                break;
            case 'vinFromTitle':
                Actions.yearModel();
                break;
            case 'front':
                Actions.acvPhotoCapture({ photoId: 'driverSide', type: 'reset' });
                break;
            case 'driverSide':
                Actions.acvPhotoCapture({ photoId: 'rear', type: 'reset' });
                break;
            case 'rear':
                Actions.acvPhotoCapture({ photoId: 'passengerSide', type: 'reset' });
                break;
            case 'passengerSide':
                Actions.acvPhotoCapture({ photoId: 'series', type: 'reset' });
                break;
            case 'series':
                Actions.paint();
                break;
            case 'vinFromVehicle':
                Actions.vin();
                break;
            case 'interior':
                Actions.interior();      
                break;          
            case 'odometer':
                Actions.odometer();      
                break; 
            default:
                Actions.yearModel();

        }
    }

    componentDidMount() {
        // debugger;
        // const photo = _.find(this.props.currentAcv.photos, { id: this.props.photoId });
        const id = this.props.photoId;
        const photo = this.props.currentAcv.photos[id];
        this.setState({ photo });
    }

    onClickTakePhoto() {
        console.log(this.props.photoId);
        Actions.fullScreenPhoto({ photoId: this.props.photoId, type: 'reset' });
        // Actions.fullScreenPhoto({ photoId: this.props.photoId });
    }

    render() {
 
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <PhotoCapture
                        photo={this.state.photo}
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
    // const photo = _.find(currentAcv.photos, { id: 'govId' });
    // return { currentAcv, photo };
    return { currentAcv };
}

export default connect(mapStateToProps, {})(AcvPhotoCapture);

