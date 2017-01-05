import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { glassConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Glass extends Component {

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.acvPhotoCapture({ photoId: 'vinFromVehicle', type: 'reset' });
    }

    render() {
        const options = [
            { label: 'Rough', value: 'Rough' },
            { label: 'Average', value: 'Average' },
            { label: 'Clean', value: 'Clean' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate the condition of the vehicle GLASS'
                        hintText='Inspect the vehicle GLASS and rate it appropriately.'
                        onSelection={option => this.props.glassConditionSelect({ option })}
                        />
                </ScrollView>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}


const mapStateToProps = ({acv}) => {
    const currentAcv = acv.currentAcv;
    console.log(currentAcv);
    return { currentAcv };
}

export default connect(mapStateToProps, { glassConditionSelect })(Glass);

