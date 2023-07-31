import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

const ScreenWrapper = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
