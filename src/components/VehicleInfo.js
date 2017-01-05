import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { makeChanged, modelChanged, seriesChanged, styleChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class VehicleInfo extends Component {

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        Actions.paint();
    }

    onMakeChange(text) {
        this.props.makeChanged(text);
    }

    onModelChange(text) {
        this.props.modelChanged(text);
    }

    onSeriesChange(text) {
        this.props.seriesChanged(text);
    }

    onStyleChange(text) {
        this.props.styleChanged(text);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />
                <Card>

                    <CardSection>
                        <Text>
                            What is the MAKE, MODEL, SERIES, and BODY STYLE of the VEHICLE?
                Enter the vehicle information as indicated on the vehicle title.
            </Text>
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="VEHICLE MAKE"
                            label="Make"
                            value={this.props.make}
                            onChangeText={this.onMakeChange.bind(this)}
                            />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="VEHICLE MODEL"
                            label="Model"
                            value={this.props.model}
                            onChangeText={this.onModelChange.bind(this)}
                            />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="MODEL SERIES"
                            label="Series"
                            value={this.props.series}
                            onChangeText={this.onSeriesChange.bind(this)}
                            />
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="BODY STYLE"
                            label="Style"
                            value={this.props.style}
                            onChangeText={this.onStyleChange.bind(this)}
                            />
                    </CardSection>

                </Card>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({ acv }) => {
    const { currentAcv } = acv;
    const { vehicleInformation } = currentAcv;
    const { make, model, series, style } = vehicleInformation;
    console.log(currentAcv);
    return { make, model, series, style };
}

export default connect(mapStateToProps, {
    makeChanged, modelChanged, seriesChanged, styleChanged
})(VehicleInfo);
