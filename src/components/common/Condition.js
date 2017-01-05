import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class Condition extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { options, title, hintText, onSelection } = this.props;

        function setSelectedOption(option) {
            this.setState({
                selectedCustomSegment: option,
            });
            onSelection(option);
        }

        return (
            <View style={{ marginTop: 10, padding: 1, backgroundColor: 'white' }}>
                <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
                <Text style={{
                    color: '#555555',
                    paddingLeft: 10,
                    marginBottom: 5,
                    marginTop: 5,
                    fontSize: 12,
                }}>{hintText}</Text>
                <SegmentedControls
                    // tint={'#f80046'}
                    // selectedTint={'white'}
                    // backTint={'#1e2126'}
                    tint={'#0de010'}
                    selectedTint={'white'}
                    // backTint={'yellow'}

                    optionStyle={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        fontFamily: 'Snell Roundhand'
                    }}
                    containerStyle={{
                        marginLeft: 10,
                        marginRight: 10,
                    }}
                    options={options}
                    onSelection={setSelectedOption.bind(this)}
                    selectedOption={this.state.selectedCustomSegment}
                    extractText={(option) => option.label}
                    testOptionEqual={(a, b) => {
                        if (!a || !b) {
                            return false;
                        }
                        return a.label === b.label
                    } }
                    />
 
            </View>);
    }
}


export { Condition };

