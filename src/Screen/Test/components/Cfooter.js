import {Text, View, TouchableOpacity, Pressable, Modal} from 'react-native';
import React, {Component} from 'react';
import {coverFooter, textBtn, text, checkout, btnReset} from './CStyle';

export class Cfooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {Total, Reset, Checkout, Number, Modal, Close, TextModal} =
      this.props;
    return (
      <View style={coverFooter}>
        {Modal && (
          <View
            style={{
              position: 'absolute',
              top: -300,
              backgroundColor: 'white',
              width: '80%',
              alignSelf: 'center',
              padding: 20,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'black',
              }}>
              Success!
            </Text>
            <Text style={{color: 'black', fontSize: 15, marginVertical: 10}}>
              {TextModal}
            </Text>
            <Pressable
              onPress={Close}
              style={{
                backgroundColor: 'black',
                padding: 5,
                borderRadius: 20,
                marginVertical: 10,
              }}>
              <Text style={{color: 'white', textAlign: 'center', padding: 5}}>
                Close
              </Text>
            </Pressable>
          </View>
        )}

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
          <View style={{marginBottom: 30}}>
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
