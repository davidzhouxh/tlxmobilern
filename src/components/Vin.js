import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { vinChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class Vin extends Component {

  onVinChange(text) {
    this.props.vinChanged(text);
  }

  onPrevious() {
    Actions.pop();
  }

  onNext() {
    Actions.acvPhotoCapture({ photoId: 'interior', type: 'reset' });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='ACV' />

        <Card>

          <CardSection>
            <Text>
              What is the VIN?
                Enter the VIN from the vehicle. VIN is usually located under the windscreen glass.
            </Text>
          </CardSection>

          <CardSection>
            <Input
              placeholder="VIN"
              label="Vin"
              value={this.props.vin}
              onChangeText={this.onVinChange.bind(this)}
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
  const { vin } = vehicleInformation;
  console.log(currentAcv);
  return { vin };
}

export default connect(mapStateToProps, {
  vinChanged
})(Vin);
