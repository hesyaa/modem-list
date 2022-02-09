import {View, Alert, Text, Modal} from 'react-native';
import React, {Component} from 'react';
import {
  Header,
  Clist,
  Cfooter,
  Cloader,
  CPopup,
  CSort,
  BottomBox,
} from './components';
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
      sortList: false,
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

  Dropdown = () => {
    const {sortList} = this.state;

    this.setState({
      sortList: !sortList,
    });
  };

  SortData = e => {
    const {datas} = this.state;
    if (e == 'Max') {
      let filter = datas.sort((a, b) => {
        return b.Price - a.Price;
      });
      this.setState({
        datas: filter,
      });
    }
    if (e == 'Min') {
      let filter = datas.sort((a, b) => {
        return a.Price - b.Price;
      });
      this.setState({
        datas: filter,
      });
    }
    if (e == 'Name') {
      let filter = datas.sort((a, b) => {
        if (a.Name < b.Name) return -1;
        if (a.Name > b.Name) return 1;
      });
      this.setState({
        datas: filter,
      });
    }
  };

  TestBtn = () => {
    this.setState({
      modalVisible: true,
    });
  };

  render() {
    const {
      loading,
      datas,
      cart,
      TotalHarga,
      text,
      TestData,
      modalVisible,
      sortList,
    } = this.state;
    return (
      <View>
        <Header total={datas.length} />
        {loading ? (
          <View>
            <Clist
              data={datas}
              Adds={this.Adds}
              cart={cart}
              Test={TestData}
              sortList={sortList}
            />
            <CSort
              sortList={sortList}
              Dropdown={this.Dropdown}
              SortData={this.SortData}
            />
            <Cfooter
              onPress={this.getFooter}
              Total={TotalHarga}
              Reset={this.reset}
              Checkout={this.checkout}
              Number={numberWithCommas}
              Modal={modalVisible}
              Close={this.close}
              TextModal={text}
              modalVisible={modalVisible}
              TextModal={text}
              Close={this.close}
            />

            {/* <BottomBox
              TestBtn={this.TestBtn}
              onPress={this.getFooter}
              Total={TotalHarga}
              Reset={this.reset}
              Checkout={this.checkout}
              Number={numberWithCommas}
              Modal={modalVisible}
              Close={this.close}
              TextModal={text}
              modalVisible={modalVisible}
              TextModal={text}
              Close={this.close}
            /> */}
          </View>
        ) : (
          <Cloader />
        )}

        {modalVisible && (
          <CPopup Modal={modalVisible} TextModal={text} Close={this.close} />
        )}
      </View>
    );
  }
}

export default index;
