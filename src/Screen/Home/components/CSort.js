import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import sort from '../../../assets/images/Sort.png';
import Chevron from '../../../assets/images/Chevron.png';
import {colours} from '../../../Utils';

export class CSort extends Component {
  render() {
    const {sortList, Dropdown, SortData, Default} = this.props;
    return (
      <View
        style={{
          width: '95%',
          height: '10%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 35,
          position: 'absolute',
          top: -50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            width: '25%',
            justifyContent: 'space-around',
          }}>
          <Image source={sort} style={{width: 12, height: 12}} />
          <Text style={{fontSize: 16, color: '#3A4144'}}>Sort By:</Text>
        </View>
        <View
          style={{
            alignItems: 'center',

            justifyContent: 'center',
            width: '40%',
            flexDirection: 'column',
          }}>
          <TouchableOpacity
            onPress={() => Dropdown(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              padding: 5,
              backgroundColor: '#F6F6F6',
              width: '80%',
              justifyContent: 'space-around',
              borderWidth: 1,
              borderColor: '#F0F0F0',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', padding: 5}}>
              {Default}
            </Text>
            <Image source={Chevron} style={{width: 18, height: 18}} />
          </TouchableOpacity>
          {sortList && (
            <View
              style={{
                width: '80%',
                position: 'absolute',
                top: 70,
                zIndex: 9999,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 8,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                elevation: 8,
              }}>
              <TouchableOpacity
                style={{paddingVertical: 8, width: '70%'}}
                onPress={() => SortData('Name', 'name')}>
                <Text style={{color: colours.secondary}}>Name</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  borderTopWidth: 1,
                  borderColor: '#F6F6F6',
                  width: '70%',
                }}
                onPress={() => SortData('Usage', 'quota')}>
                <Text style={{color: colours.secondary}}>Quota</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default CSort;
