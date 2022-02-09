import {Text, View, TouchableOpacity, Pressable, Modal} from 'react-native';
import React, {Component} from 'react';
import {coverFooter, textBtn, text, checkout, btnReset} from './CStyle';
import {colours} from '../../../Utils';
import {CPopup} from '.';

export class Cfooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {Total, Reset, Checkout, Number, Modal, Close, TextModal} =
      this.props;
    return (
      <View style={coverFooter}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={text}>Total : </Text>
          <Text style={text}>Rp. {Number(Total)}</Text>
        </View>
        <TouchableOpacity
          style={{
            ...checkout,
            backgroundColor: Total == 0 ? 'silver' : colours.secondary,
            marginBottom: Total == 0 ? 25 : 5,
          }}
          onPress={() => Checkout(Total)}
          disabled={Total == 0 ? true : false}>
          <Text style={{...textBtn, color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
        {Total > 0 && (
          <View style={{marginBottom: 30, zIndex: -1}}>
            <TouchableOpacity style={btnReset} onPress={Reset}>
              <Text style={{...textBtn, color: colours.secondary}}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Cfooter;
