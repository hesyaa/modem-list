import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {coverFooter, textBtn, text, checkout, btnReset} from './CStyle';

export class Cfooter extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {Total, Reset, Checkout, Number} = this.props;
    return (
      <View style={coverFooter}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={text}>Total : </Text>
          <Text style={text}>Rp.{Number(Total)}</Text>
        </View>
        <TouchableOpacity
          style={{
            ...checkout,
            backgroundColor: Total == 0 ? 'silver' : 'black',
          }}
          onPress={() => Checkout(Total)}
          disabled={Total == 0 ? true : false}>
          <Text style={{...textBtn, color: 'white'}}>Checkout</Text>
        </TouchableOpacity>
        {Total > 0 && (
          <View>
            <TouchableOpacity style={btnReset} onPress={Reset}>
              <Text style={{...textBtn, color: 'black'}}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Cfooter;
