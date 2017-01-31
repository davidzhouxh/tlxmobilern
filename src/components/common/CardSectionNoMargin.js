import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSectionNoMargin = (props) => {

  const containerStyles = [styles.containerStyle];
  if(props.justifyContent){
    containerStyles.push({justifyContent: props.justifyContent});
  }
  if(props.flexDirection){
    containerStyles.push({ flexDirection: props.flexDirection})
  }
  if(props.padding){
    containerStyles.push({ padding: props.padding})
  }
  if(props.style){
    containerStyles.push(props.style);
  }  
  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 3,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});

export { CardSectionNoMargin };
