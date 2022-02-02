import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import mobileIcon from '../../../assets/images/Iconmobile.png';
import {container, image} from './CStyle';

const Header = ({total}) => {
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Image source={mobileIcon} style={image} />
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Modem List
          </Text>
          {total != 0 && (
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'normal',
                marginLeft: 20,
                marginTop: 3,
              }}>
              {total} Modems
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;
