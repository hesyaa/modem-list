import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colours} from '../../../Utils';

export class bottomBox extends Component {
  constructor() {
    super();
    this.state = {
      Total: 2,
    };
  }
  render() {
    const {Total, Reset, Checkout, Number, Modal, Close, TextModal} =
      this.props;
    return (
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '28%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            marginTop: -28,
            paddingBottom: 5,
          }}>
          <Text style={{color: '#262627', fontWeight: 'bold', fontSize: 20}}>
            Total:
          </Text>
          <Text style={{color: '#262627', fontWeight: 'bold', fontSize: 20}}>
            Rp. {Number(Total)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: '80%',
            padding: 10,
            borderRadius: 18,
            alignItems: 'center',
            marginVertical: 8,
            backgroundColor: Total == 0 ? 'silver' : colours.secondary,
          }}
          onPress={() => Checkout(Total)}
          disabled={Total == 0 ? true : false}>
          <Text style={{color: 'white', fontSize: 16}}>Checkout</Text>
        </TouchableOpacity>
        {Total > 1 && (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: '80%',
              padding: 10,
              borderRadius: 18,
              alignItems: 'center',
              paddingBottom: 10,
            }}
            onPress={Reset}>
            <Text style={{color: '#3A4144', fontSize: 16}}>Reset</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default bottomBox;
