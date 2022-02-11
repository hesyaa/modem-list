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
          top: -19,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

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
            onPress={Dropdown}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              padding: 6,
              backgroundColor: '#F6F6F6',
              width: '80%',
              justifyContent: 'space-around',
              borderWidth: 1,
              borderColor: '#F0F0F0',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                padding: 5,
                marginHorizontal: 5,
              }}>
              {Default}
            </Text>
            <Image source={Chevron} style={{width: 18, height: 18}} />
          </TouchableOpacity>
          {sortList && (
            <View
              style={{
                width: '80%',

                position: 'absolute',
                top: 55,
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
                onPress={() => SortData('Max', 'Highest Price')}>
                <Text style={{color: colours.secondary}}>Highest Price</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingVertical: 8,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: '#F6F6F6',

                  width: '70%',
                }}
                onPress={() => SortData('Min', 'Lowest Price')}>
                <Text style={{color: colours.secondary}}>Lowest Price</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{width: '70%', paddingVertical: 8}}
                onPress={() => SortData('Name', 'Name')}>
                <Text style={{color: colours.secondary}}>Name</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default CSort;
