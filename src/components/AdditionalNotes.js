import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { notesChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class AdditionalNotes extends Component {

    onNotesChange(text) {
        this.props.notesChanged(text);
    }

    onPrevious() {
        Actions.pop();
    }

    onNext() {
        // Actions.specialtyVehicle();
    }

    onButtonPress() {
        console.log('Sending ACV...');
        // Actions.vehicleType();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='ACV' />

                <Card>

                    <CardSection>
                        <Text>
                            ADDITIONAL NOTES
                            Please take a moment and tell us anything else that may help determine an appropriate valuation. This should be anything that we could not determine from the photos or ratings that you have already provided. (75 Characters Maximum)
                        </Text>
                    </CardSection>

                    <CardSection>
                        <Input
                            placeholder="ADDITIONAL NOTES"
                            label="Additional notes"
                            value={this.props.notes}
                            onChangeText={this.onNotesChange.bind(this)}
                            />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Send Assessment
                    </Button>
                    </CardSection>

                </Card>
                <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
            </View>
        );
    }
}

const mapStateToProps = ({ acv }) => {
    const { currentAcv } = acv;
    const { vehicleCondition } = currentAcv;
    const { notes } = vehicleCondition;
    console.log(currentAcv);
    return { notes };
}

export default connect(mapStateToProps, {
    notesChanged
})(AdditionalNotes);
