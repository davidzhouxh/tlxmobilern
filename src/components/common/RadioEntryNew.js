import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class RadioEntryNew extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<ScrollView style={{
            backgroundColor: '#eeeeee'
        }}>
            {this.renderCheckList()}
        </ScrollView>);
    }



    renderCheckList() {
        const options = [
            "American",
            "Australian",
            "British",
        ];

        function setSelectedOption(checkListOption) {
            this.setState({
                checkListOption,
            });
        }

        function renderOption(option, selected, onSelect, index) {

            const textStyle = {
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                color: 'white',
                flex: 1,
                fontSize: 20,
            };
            const baseStyle = {
                height: 50,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 25,
                borderWidth: 5,
                borderColor: 'royalblue',
                backgroundColor: 'royalblue',
                margin: 5
            };
            var style;
            var checkMark;

            if (index > 0) {
                style = [baseStyle, {
                    borderTopColor: '#eeeeee',
                    borderTopWidth: 1,
                }];
            } else {
                style = baseStyle;
            }



            if (selected) {
                style = [baseStyle, {
                    backgroundColor: 'darkblue',
                }];
                
                checkMark = 
                <View style={{
                    // flex: 0.1,
                    height: 26,
                    width: 26,
                    backgroundColor: 'white',
                    borderRadius: 13,
                    marginRight: 10
                }}>
                <Text style={{
                    // flex: 1,
                    color: '#0de010',
                    fontWeight: 'bold',
                    padding: 2,
                    fontSize: 20,
                    alignSelf: 'center',
                }}>✓
                </Text>
                </View>;
            }

            return (
                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <View style={style}>
                        <Text style={textStyle}>{option}</Text>
                        {checkMark}
                    </View>
                </TouchableWithoutFeedback>
            );
        }

        function renderContainer(options) {
            return (
                <View style={{
                    backgroundColor: 'white',
                    paddingLeft: 20,
                    borderTopWidth: 1,
                    borderTopColor: '#cccccc',
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                }}>
                    {options}
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 10, backgroundColor: 'white' }}>
                    <Text style={{ padding: 20, fontWeight: 'bold' }}>VerticalSelect</Text>

                    <View style={{
                        backgroundColor: '#eeeeee',
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}>
                        <Text style={{
                            color: '#555555',
                            paddingLeft: 20,
                            marginBottom: 5,
                            marginTop: 5,
                            fontSize: 12,
                        }}>ACCENT</Text>
                        <RadioButtons
                            options={options}
                            onSelection={setSelectedOption.bind(this)}
                            selectedOption={this.state.checkListOption}
                            renderOption={renderOption}
                            renderContainer={renderContainer}
                            />
                    </View>
                    <Text style={{
                        margin: 20,
                    }}>Selected accent: {this.state.checkListOption || 'none'}</Text>
                </View>
            </View>);

    }


}


export { RadioEntryNew };

