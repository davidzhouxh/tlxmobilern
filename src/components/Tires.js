import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { tiresConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Tires extends Component {

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.glass();
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
                        title='Rate the condition of the vehicle TIRES'
                        hintText='Inspect the vehicle TIRES and rate them appropriately.'
                        onSelection={option => this.props.tiresConditionSelect({ option })}
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

export default connect(mapStateToProps, { tiresConditionSelect })(Tires);

