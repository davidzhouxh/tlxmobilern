import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSectionNoMargin = (props) => {

  const containerStyles = [styles.containerStyle];
  if(props.justifyContent){
    containerStyles.push({justifyContent: props.justifyContent});
  }
  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSectionNoMargin };
