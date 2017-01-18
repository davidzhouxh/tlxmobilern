import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import NumTextInput from 'react-native-num-textinput';
import { usernameChanged, storeNumberChanged, passwordChanged, loginUser, acceptLegalTerm, declineLegalTerm } from '../actions';
import { Button, Card, CardSection, Input, Spinner, Confirm } from './common';

class LoginForm extends Component {

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onStoreNumberChange(text) {
    this.props.storeNumberChanged(text);
  }

  onPasswordChange(text) {
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

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
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
      <Card>
        <CardSection>
          <Image
            style={{ width: 300, height: 210, resizeMode: 'contain' }}
            source={require('../../assets/img/logo.png')}
            />
        </CardSection>
        <CardSection>
          <Input
            placeholder="USERNAME"
            label="Username"
            value={this.props.username}
            onChangeText={this.onUsernameChange.bind(this)}
            />
        </CardSection>

        <CardSection>
          <Input
            placeholder="STOREID"
            keyboardType="numeric"
            label="Store ID"
            value={this.props.storeNumber}
            onChangeText={this.onStoreNumberChange.bind(this)}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="PASSWORD"
            label="Password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

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
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
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
