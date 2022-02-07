import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {colours} from '../../../Utils';

const Cloader = () => {
  return (
    <View
      style={{
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="#D81A3C" />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: colours.secondary,
          marginVertical: 15,
        }}>
        Loading Devices data
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'normal', color: '#7D8285'}}>
        Please wait...
      </Text>
    </View>
  );
};

export default Cloader;
