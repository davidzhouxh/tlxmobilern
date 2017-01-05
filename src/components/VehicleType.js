import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { RadioEntry, Header, Footer } from './common';
import { vehicleTypeSelect } from '../actions';

class VehicleType extends Component {

    onPrevious(){
        Actions.pop();
    }

    onNext(){
        Actions.titleStatus();
    }

    render() {
        const options = [
            "Auto",
            "Motorcycle"
        ];

        return (
            <View style={{flex:1}}>
                <Header headerText='ACV' />
                <ScrollView>
                    <RadioEntry
                        options={options}
                        title='What TYPE of Vehicle are you assessing?'
                        hintText='Select one option indicating Auto or Motorcycle.'
                        onSelection={checkListOption => this.props.vehicleTypeSelect({ checkListOption })}
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

export default connect(mapStateToProps, { vehicleTypeSelect })(VehicleType);

