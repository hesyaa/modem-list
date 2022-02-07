import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import mobileIcon from '../../../assets/images/Icon.png';
import {imgstye} from './CStyle';
import { colours } from '../../../Utils';

const Cloader = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
      }}>
      <Image source={mobileIcon} style={imgstye} />
      <Text
        style={{
          fontSize: 20,
          color: colours.secondary,
          fontWeight: 'bold',
          marginVertical: 15,
        }}>
        Loading Modem data
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'normal'}}>Please wait...</Text>
    </View>
  );
};

export default Cloader;
