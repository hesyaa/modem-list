import {View, Alert, Text, Modal} from 'react-native';
import React, {Component} from 'react';
import {Header, Clist, Cfooter, Cloader} from './components';
import {numberWithCommas} from '../../Utils';

export class index extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      datas: [],
      cart: [],
      TotalHarga: 0,
      confirm: false,
      modalVisible: false,
      text: '',
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.getdata();
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  getdata = async () => {
    const {datas} = this.state;
    try {
      const response = await fetch(
        'https://obs-staging.myorbit.id/staging-content/orbit-fe-test-1.json',
      );
      const json = await response.json();
      this.getToCart(json.data);
      this.setState({
        datas: json.data,
      });
    } catch (err) {
      console.log('err ' + err);
    }
  };

  getToCart = e => {
    const {cart, datas} = this.state;
    const data = e.map(value => {
      return {...value, qty: 0, Total: 0, btn: true};
    });
    this.setState({
      cart: data,
    });
  };

  Adds = (index, type, value) => {
    const {count, cart, TotalHarga} = this.state;
    if (type) {
      let data = cart[index].qty;
      data = data + 1;
      cart[index].qty = data;
      this.setState({
        cart,
        TotalHarga: TotalHarga + value.Price,
      });
    } else {
      let data = cart[index].qty;
      data = data - 1;
      cart[index].qty = data;
      this.setState({
        cart,
        TotalHarga: TotalHarga - value.Price,
      });
    }
  };

  close = () => {
    this.setState({
      modalVisible: false,
    });
    this.reset();
  };

  reset = () => {
    const {datas, TotalHarga} = this.state;

    const data = datas.map(value => {
      return {...value, qty: 0, Total: 0, btn: true};
    });
    this.setState({
      cart: data,
      TotalHarga: 0,
    });
  };

  checkout = e => {
    const {cart, confirm} = this.state;
    const data = cart.map(value => {
      return value.qty;
    });
    const sum = data.reduce((a, b) => {
      return a + b;
    });
    this.setState({
      modalVisible: true,
      text: `you have successfully purchase ${sum} modems with total of Rp. ${numberWithCommas(
        e,
      )} Click close to buy another modems`,
    });
    // Alert.alert(
    //   'Success!',
    //   `you have successfully purchase ${sum} modems with total of Rp.${numberWithCommas(
    //     e,
    //   )} Click close to buy another modems`,
    //   [{text: 'Close', onPress: () => this.reset()}],
    // );
  };

  render() {
    const {loading, datas, cart, TotalHarga, text, TestData, modalVisible} =
      this.state;
    return (
      <View>
        <Header total={datas.length} />
        {loading ? (
          <View>
            <Clist data={datas} Adds={this.Adds} cart={cart} Test={TestData} />

            <Cfooter
              onPress={this.getFooter}
              Total={TotalHarga}
              Reset={this.reset}
              Checkout={this.checkout}
              Number={numberWithCommas}
              Modal={modalVisible}
              Close={this.close}
              TextModal={text}
            />
          </View>
        ) : (
          <Cloader />
        )}
      </View>
    );
  }
}

export default index;
