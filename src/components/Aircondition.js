import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { airconditionConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Aircondition extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.heat();
    }

    render() {
        const options = [
            { label: 'Warm / Not Functional', value: 'Rough' },
            { label: 'Cool', value: 'Average' },
            { label: 'Cold', value: 'Clean' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate the condition of the A/C'
                        hintText='With the engine running, put A/C at maximum cool.'
                        onSelection={option => this.props.airconditionConditionSelect({ option })}
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

export default connect(mapStateToProps, { airconditionConditionSelect })(Aircondition);

