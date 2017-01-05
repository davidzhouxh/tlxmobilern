import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { transmissionShiftConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class TransmissionShift extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.dashboard();
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
                        title='Rate the TRANSMISSION SHIFT'
                        hintText='While the car is running, shift from PARK to DRIVE then back to PARK.'
                        onSelection={option => this.props.transmissionShiftConditionSelect({ option })}
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

export default connect(mapStateToProps, { transmissionShiftConditionSelect })(TransmissionShift);

