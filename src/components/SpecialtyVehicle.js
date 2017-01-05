import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioEntry, Header, Footer } from './common';
import { specialtyVehicleSelect } from '../actions';

class SpecialtyVehicle extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        // Actions.vehicleInfo();
        Actions.acvPhotoCapture({ photoId: 'front', type: 'reset' });
    }


    render() {
        const options = [
            "Yes",
            "No"
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <RadioEntry
                        options={options}
                        title='Is this a SPECIALTY, EXOTIC, or CUSTOM vehicle?'
                        hintText='Select one option indicating YES or NO. Some examples might include: AC Schnitzer, AMG Mercedes, Aston Martin, Bentley, Ferrari, Hummer H1, Lamborghini, Lotus, Maserati, Maybach, McLaren, Porsche RUF, etc.'
                        onSelection={checkListOption => this.props.specialtyVehicleSelect({ checkListOption })}
                        />
                </ScrollView>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({acv}) => {
    const currentAcv = acv.currentAcv;
    return { currentAcv };
}
export default connect(mapStateToProps, { specialtyVehicleSelect })(SpecialtyVehicle);
