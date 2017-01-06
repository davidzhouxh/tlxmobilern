import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { overallConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Overall extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.additionalNotes();
    }

    render() {
        const options = [
            { label: 'Poor', value: 'Poor' },
            { label: 'Fair', value: 'Fair' },
            { label: 'Good', value: 'Good' },
            { label: 'Excellent', value: 'Excellent' }
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate OVERALL CONDITION of the vehicle'
                        hintText='Based on the information that you have collected, how would you rate the vehicle.'
                        onSelection={option => this.props.overallConditionSelect({ option })}
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

export default connect(mapStateToProps, { overallConditionSelect })(Overall);

