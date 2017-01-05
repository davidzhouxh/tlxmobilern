import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioEntry, Header, Footer } from './common';
import { titleStatusSelect } from '../actions';

class TitleStatus extends Component {
    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.titleRemark();
    }

    render() {
        const options = [
            "Buyout",
            "Title Transfer",
            "Add-On with Title",
            "Add-On without Title",
            "Title - Needs Lien",
            "Electronic"
        ];

        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <ScrollView>
                    <RadioEntry
                        options={options}
                        title='Select the TITLE STATUS'
                        hintText='Select one option that describes the STATUS of the vehicle TITLE.'
                        onSelection={checkListOption => this.props.titleStatusSelect({ checkListOption })}
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

export default connect(mapStateToProps, { titleStatusSelect })(TitleStatus);

