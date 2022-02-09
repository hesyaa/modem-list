import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {colours} from '../../../Utils';

const CPopup = ({Modal, TextModal, Close}) => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
        overflow: 'hidden',
      }}>
      <View
        style={{
          position: 'absolute',
          top: '30%',
          bottom: 0,
          backgroundColor: 'white',
          width: '80%',
          alignSelf: 'center',
          justifyContent: 'center',
          padding: 20,
          borderRadius: 10,
          height: '30%',
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: colours.secondary,
          }}>
          Success!
        </Text>
        <Text
          style={{color: colours.secondary, fontSize: 15, marginVertical: 10}}>
          {TextModal}
        </Text>
        <Pressable
          onPress={Close}
          style={{
            backgroundColor: colours.secondary,
            padding: 5,
            borderRadius: 20,
            marginVertical: 10,
          }}>
          <Text style={{color: 'white', textAlign: 'center', padding: 5}}>
            Close
          </Text>
        </Pressable>
      </View>
      {/* alert */}
    </View>
  );
};

export default CPopup;
