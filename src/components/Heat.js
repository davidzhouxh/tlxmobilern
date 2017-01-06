import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { heatConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Heat extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.odor();
    }

    render() {
        const options = [
            { label: 'Cool / Not Functional', value: 'Rough' },
            { label: 'Warm', value: 'Average' },
            { label: 'Hot', value: 'Clean' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate the condition of the HEAT'
                        hintText='With the engine running, put HEAT at maximum heat.'
                        onSelection={option => this.props.heatConditionSelect({ option })}
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

export default connect(mapStateToProps, { heatConditionSelect })(Heat);

