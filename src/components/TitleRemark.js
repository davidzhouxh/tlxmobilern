import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioEntry, Header, Footer } from './common';
import { titleRemarkSelect } from '../actions';

class TitleRemark extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.customerBorrow();
    }

    render() {
        const options = [
            "Clean",
            "Salvage-Rebuilt",
            "Salvage",
            "Bonded"
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <RadioEntry
                        options={options}
                        title='Select the TITLE REMARKS'
                        hintText='Select one option that describes REMARKS on the vehicle TITLE.'
                        onSelection={checkListOption => this.props.titleRemarkSelect({ checkListOption })}
                        />
                </ScrollView>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({ acv }) => {
    const currentAcv = acv.currentAcv;
    console.log(currentAcv);
    return { currentAcv };
}

export default connect(mapStateToProps, { titleRemarkSelect })(TitleRemark);

