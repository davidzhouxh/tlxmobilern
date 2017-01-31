import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children, disabled, color, flex, style }) => {
  const { buttonStyle, textStyle, buttonDisabled, textDisabled } = styles;

  const buttonStyles = [buttonStyle];
  if(color){
    buttonStyles.push({backgroundColor: color, borderColor: color});
  }
  if(flex){
    buttonStyles.push({flex: flex});
  }
  if(style){
    buttonStyles.push(style);
  }

  return (
    <TouchableOpacity disabled={disabled} style={disabled ? buttonDisabled : buttonStyles} activeOpacity={disabled ? 1 : 0.5} onPress={onPress}>
      <Text style={disabled? textDisabled : textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 8
  },
  textDisabled: {
    alignSelf: 'center',
    color: 'rgba(255, 0, 0, 0.5)',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 8
  },
  buttonStyle: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: 'royalblue',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'royalblue',
    marginLeft: 3,
    marginRight: 3
  },
  buttonDisabled: {
    flex: 1,
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'rgba(255, 0, 0, 0.5)',
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',    
  }
});

export { Button };
