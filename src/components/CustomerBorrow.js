import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { borrowAmountChanged, sellAmountChanged } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm, Header, Footer } from './common';

class CustomerBorrow extends Component {

  onPrevious() {
    Actions.pop();
  }

  onNext() {
    Actions.acvPhotoCapture({photoId: 'govId'});
  }

  onBorrowAmountChange(text) {
    this.props.borrowAmountChanged(text);
  }

  onSellAmountChange(text) {
    this.props.sellAmountChanged(text);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='ACV' />
        <Card>
          <CardSection>
            <Text>
              What AMOUNT would the customer like to BORROW? For what AMOUNT would the customer SELL the vehicle?
                Please enter an AMOUNT in US Dollars.
            </Text>
          </CardSection>

          <CardSection>
            <Input
              placeholder="BORROW AMOUNT"
              label="Borrow"
              keyboardType="numeric"
              value={this.props.borrowAmount}
              onChangeText={this.onBorrowAmountChange.bind(this)}
              />
          </CardSection>

          <CardSection>
            <Input
              placeholder="SELL AMOUNT"
              label="Sell"
              keyboardType="numeric"
              value={this.props.sellAmount}
              onChangeText={this.onSellAmountChange.bind(this)}
              />
          </CardSection>
        </Card>
        <Footer onPrevious={this.onPrevious.bind(this)} onNext={this.onNext.bind(this)} />
      </View >
    );
  }
}

const mapStateToProps = ({ acv }) => {
  const { currentAcv } = acv;
  const { preQualificationInfo } = currentAcv;
  const { borrowAmount, sellAmount } = preQualificationInfo;
  console.log(currentAcv);
  return { borrowAmount, sellAmount };
}

export default connect(mapStateToProps, {
  borrowAmountChanged, sellAmountChanged
})(CustomerBorrow);
