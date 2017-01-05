import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';

class MainMenu extends Component {
    onButtonPress() {
        Actions.acvList();
    }

    render() {
        return (
            <View>
                <Header headerText='ACV' />
                <Card>
                    <CardSection>
                        <Image
                            style={{ width: 290, height: 210 }}
                            source={require('../../assets/img/logo.png')}
                            />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            STORE ACV
                    </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            REPO APPRAISAL
                    </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default MainMenu;
