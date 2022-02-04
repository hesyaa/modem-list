import {View, Text, Image} from 'react-native';
import React from 'react';
import {CHeader, THeader} from './CStyles';
import iconmobile from '../../../assets/images/Iconmobile.png';

const Header = ({data, loading}) => {
  return (
    <View style={CHeader}>
      <View style={{paddingTop: 40}}>
        <Image source={iconmobile} style={{width: 18, height: 29}} />
        <Text style={THeader}>Manage devices</Text>
        {data > 1 && (
          <Text style={{color: 'white', fontSize: 16}}>{data} devices</Text>
        )}
      </View>
    </View>
  );
};

export default Header;
