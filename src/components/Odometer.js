import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { odometerConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Odometer extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        // Actions.body();
    }

    render() {
        const options = [
            { label: '5 digit', value: 'Rough' },
            { label: 'Broken', value: 'Average' },
            { label: 'Functional', value: 'Clean' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate the condition of the ODOMETER'
                        hintText='Inspect the vehicle ODOMETER and rate it appropriately.'
                        onSelection={option => this.props.odometerConditionSelect({ option })}
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

export default connect(mapStateToProps, { odometerConditionSelect })(Odometer);

