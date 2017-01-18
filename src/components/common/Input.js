import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Icon name="ios-book" color="white" />
      <TextInput
        underlineColorAndroid='transparent'
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'royalblue',
    backgroundColor: 'royalblue',
    textAlign: 'center',
 
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export { Input };
