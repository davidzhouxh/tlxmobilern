import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { usernameChanged, storeNumberChanged, passwordChanged, loginUser, acceptLegalTerm, declineLegalTerm } from '../actions';
import { Button, Card, CardSectionNoMargin, Input, Spinner, Confirm } from './common';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { usernameError: '', storeNumberError: '', passwordError: '' };

  }

  onUsernameChange(text) {
    if (text === '') {
      this.setState({ usernameError: 'A value is required' });
    } else {
      this.setState({ usernameError: '' });
    }
    this.props.usernameChanged(text);

  }

  onStoreNumberChange(text) {
    if (text === '') {
      this.setState({ storeNumberError: 'A value is required' });
    } else if ( isNaN(text) ) {
      this.setState({ storeNumberError: 'Please enter valid Store ID' })
    } else {
      this.setState({ storeNumberError: '' });
    }
    this.props.storeNumberChanged(text);
  }

  onPasswordChange(text) {
    if (text === '') {
      this.setState({ passwordError: 'A value is required' });
    } else {
      this.setState({ passwordError: '' });
    }
    this.props.passwordChanged(text);
  }


  onButtonPress() {
    const { username, storeNumber, password } = this.props;

    this.props.loginUser({ username, storeNumber, password });

  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    if(this.props.username && this.props.storeNumber && this.props.password){
      return (
        <Button onPress={this.onButtonPress.bind(this)} color='red'>
          Get Started
        </Button>
      );      
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)} disabled={true}>
        Get Started
      </Button>
    );
  }

  onAccept() {
    this.props.acceptLegalTerm();
    Actions.main();
  }

  onDecline() {
    this.props.declineLegalTerm();
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSectionNoMargin justifyContent='center'>
            <Image
              style={{ width: 280, height: 200, resizeMode: 'contain' }}
              source={require('../../assets/img/logo.png')}
              />
          </CardSectionNoMargin>
          <CardSectionNoMargin>
            <Input
              startIcon="ios-mail-outline"
              endIcon="ios-keypad-outline"
              placeholder="USERNAME"
              errorHighLight={this.state.usernameError}
              label="Username"
              value={this.props.username}
              onChangeText={this.onUsernameChange.bind(this)}
              />
          </CardSectionNoMargin>

          <Text style={styles.errorTextStyle}>
            {this.state.usernameError}
          </Text>

          <CardSectionNoMargin>
            <Input
              startIcon="ios-pin-outline"
              endIcon="ios-keypad-outline"
              placeholder="STORE ID"
              errorHighLight={this.state.storeNumberError}
              keyboardType="numeric"
              maxLength={5}
              label="Store ID"
              value={this.props.storeNumber}
              onChangeText={this.onStoreNumberChange.bind(this)}
              />
          </CardSectionNoMargin>

          <Text style={styles.errorTextStyle}>
            {this.state.storeNumberError}
          </Text>

          <CardSectionNoMargin>
            <Input
              startIcon="ios-lock-outline"
              endIcon="ios-keypad-outline"
              secureTextEntry
              placeholder="PASSWORD"
              errorHighLight={this.state.passwordError}
              label="Password"
              value={this.props.password}
              onChangeText={this.onPasswordChange.bind(this)}
              />
          </CardSectionNoMargin>

          <Text style={styles.errorTextStyle}>
            {this.state.passwordError}
          </Text>          

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSectionNoMargin>
            {this.renderButton()}
          </CardSectionNoMargin>

          <Confirm
            visible={this.props.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
            >
            By clicking “I Agree” below, you acknowledge and agree as follows:

            Employees using this application must be clocked in to the company timekeeping system &mdash; off-the-clock work is prohibited.
            Information gathered using this application is confidential and proprietary and for company use only  &mdash; misuse or disclosure of such information is strictly prohibited.
        </Confirm>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
  const { username, storeNumber, password, error, loading, showModal } = auth;
  return { username, storeNumber, password, error, loading, showModal };
}

export default connect(mapStateToProps, {
  usernameChanged, storeNumberChanged, passwordChanged, loginUser, acceptLegalTerm, declineLegalTerm
})(LoginForm);
