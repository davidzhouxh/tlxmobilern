import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { odorConditionSelect } from '../actions';
import { Condition, Header, Footer } from './common';

class Odor extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.engineAppearance();
    }

    render() {
        const options = [
            { label: 'Bad Odor', value: 'Rough' },
            { label: 'Satisfactory', value: 'Average' },
            { label: 'Good Odor', value: 'Clean' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <Condition
                        options={options}
                        title='Rate the ODOR of the interior'
                        hintText='ODORS from the cooling system can indicate future issues.'
                        onSelection={option => this.props.odorConditionSelect({ option })}
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

export default connect(mapStateToProps, { odorConditionSelect })(Odor);

