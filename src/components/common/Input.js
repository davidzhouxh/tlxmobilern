import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, startIcon, endIcon, maxLength, errorHighLight }) => {


  const { inputStyle, labelStyle, containerStyle, startIconStyle, endIconStyle, containerHighLight } = styles;

  return (
    <View style={errorHighLight ? containerHighLight : containerStyle}>
      <Icon style={startIconStyle} name={startIcon} color="white" size={20} />
      <TextInput
        underlineColorAndroid='transparent'
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
      >
      </TextInput>
      <Icon style={endIconStyle} name={endIcon} color="white" size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    flex: 5,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
 
  },
  startIconStyle: {
    flex: 1,
    left: 26
  },
  endIconStyle: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'royalblue',
    backgroundColor: 'royalblue',
  },
  containerHighLight: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'red',
    backgroundColor: 'royalblue',
  }

});

export { Input };
