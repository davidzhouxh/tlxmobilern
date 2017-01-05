import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { yearChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class YearModel extends Component {

  onYearChange(text) {
    this.props.yearChanged(text);
  }

  onPrevious() {
    Actions.pop();
  }

  onNext() {
    Actions.specialtyVehicle();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='ACV' />

        <Card>

          <CardSection>
            <Text>
              What YEAR MODEL is the vehicle?
                Enter the YEAR MODEL as indicated on the vehicle title.
            </Text>
          </CardSection>

          <CardSection>
            <Input
              placeholder="YEAR MODEL"
              label="Year"
              keyboardType="numeric"
              value={this.props.year}
              onChangeText={this.onYearChange.bind(this)}
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
  const { year } = vehicleInformation;
  console.log(currentAcv);
  return { year };
}

export default connect(mapStateToProps, {
  yearChanged
})(YearModel);
