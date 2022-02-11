import {View} from 'react-native';
import React, {Component} from 'react';
import {Header, CList, Cloader, CSort} from './components';
import {containerIndex} from './components/CStyles';

export class index extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      mainData: [],
      sortList: false,
      Default: 'Default',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.getData();
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  listAction = () => {
    alert('hey');
  };

  getData = async () => {
    const {mainData} = this.state;
    const URI =
      'https://obs-staging.myorbit.id/staging-content/orbit-fe-test-2.json';
    try {
      const response = await fetch(URI);
      const json = await response.json();
      this.setState({
        mainData: json.data,
      });

      const Items = json.data.map(value => {
        return {...value, item: false};
      });

      this.setState({
        mainData: Items,
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  show = e => {
    const {mainData, sortList} = this.state;

    let select = mainData.map((value, index) => {
      if (e == index) {
        value.item = !value.item;
      }
      return {...value};
    });
    this.setState({
      mainData: select,
      sortList: false,
    });
  };

  convertColor = (a, b) => {
    const number = a / b;
    const percent = number * 100;
    const hasil = Math.floor(percent);
    if (hasil < 25) {
      return '#DB2424';
    }
    if (hasil < 75) {
      return '#FFCE20';
    }
    if (hasil >= 75) {
      return '#A9CF3B';
    }
  };

  convertWidth = (a, b) => {
    const number = a / b;
    const percent = number * 100;
    const hasil = Math.floor(percent);
    return hasil;
  };

  covertNumber = a => {
    const number = a / 1000;
    return `${number}GB`;
  };

  convertMax = b => {
    const max = b / 1000;
    return `${max}GB`;
  };

  Dropdown = e => {
    const {sortList, mainData} = this.state;

    let select = mainData.map((value, index) => {
      if (e == true) {
        value.item = false;
      }
      return {...value};
    });

    this.setState({
      sortList: !sortList,
      mainData: select,
    });
  };

  SortData = (e, type) => {
    const {mainData, Default} = this.state;

    if (type == 'name') {
      if (e == 'Name') {
        let filter = mainData.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
        });
        this.setState({
          mainData: filter,
          Default: type,
          sortList: false,
        });
      }
    }
    if (type == 'quota') {
      if (e == 'Usage') {
        let filter = mainData.sort((a, b) => {
          return (
            b.quota.currentUsage / b.quota.maxUsage -
            a.quota.currentUsage / a.quota.maxUsage
          );
        });
        this.setState({
          mainData: filter,
          Default: type,
          sortList: false,
        });
      }
    }
  };

  render() {
    const {loading, mainData, sortList, Default} = this.state;
    return (
      <View style={{backgroundColor: 'white'}}>
        <Header data={mainData.length} loading={loading} />
        {loading ? (
          <View style={containerIndex}>
            <CList
              mainData={mainData}
              convertWidth={this.convertWidth}
              convertColor={this.convertColor}
              covertNumber={this.covertNumber}
              convertMax={this.convertMax}
              show={this.show}
              listAction={this.listAction}
            />
            <CSort
              sortList={sortList}
              Dropdown={this.Dropdown}
              SortData={this.SortData}
              Default={Default}
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
