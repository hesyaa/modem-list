import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {menuBtn, btn, btnAdd, coverList} from './CStyle';
import {colours, numberWithCommas} from '../../../Utils';

export class Clist extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const {count, button} = this.state;
    const {data, Adds, cart, Test, sortList} = this.props;
    return (
      <View
        style={{
          paddingTop: 25,
          marginTop: 60,
          height: '85%',
        }}>
        <View
          style={{
            backgroundColor: '#F0F0F0',
            width: '90%',
            alignSelf: 'center',
            marginVertical: 15,
            height: 2,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((value, index) => (
            <View style={{...coverList, zIndex: -1}} key={index}>
              <View style={{flexDirection: 'column', width: 150}}>
                <Text
                  style={{
                    fontSize: 18,
                    color: colours.secondary,
                    fontWeight: 'bold',
                  }}>
                  {value.Name}
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: 'bold', color: '#7D8285'}}>
                  Rp. {numberWithCommas(value.Price)}
                </Text>
              </View>
              <View style={menuBtn}>
                <TouchableOpacity
                  style={{
                    ...btn,
                    backgroundColor:
                      cart[index].qty == 0 ? '#CFCFCF' : colours.secondary,
                  }}
                  onPress={() => Adds(index, false, value)}
                  disabled={cart[index].qty == 0 ? true : false}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>{cart[index].qty}</Text>
                <TouchableOpacity
                  style={{
                    ...btnAdd,
                    backgroundColor:
                      cart[index].qty < value.Stock
                        ? colours.secondary
                        : '#CFCFCF',
                  }}
                  onPress={() => Adds(index, true, value)}
                  disabled={cart[index].qty < value.Stock ? false : true}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Clist;
