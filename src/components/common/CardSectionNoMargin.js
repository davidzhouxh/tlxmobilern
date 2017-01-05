import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSectionNoMargin = (props) => {
  return (
    <View style={styles.containerStyle}>
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
