import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  listModem,
  listName,
  indicatorcover,
  coverName,
  contentCard,
  textUsage,
} from './CStyles';

export class CList extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      mainData,
      show,
      convertWidth,
      convertColor,
      covertNumber,
      convertMax,
    } = this.props;
    return (
      <View style={{width: '90%', height: '57%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mainData.map((value, index) => (
            <View style={listModem} key={index}>
              <View style={contentCard}>
                <View style={coverName}>
                  <Text style={{marginBottom: 3, color: 'black'}}>Name</Text>
                  <Text style={listName}>{value.name}</Text>
                </View>
                <View>
                  <Text style={{marginBottom: 5}}>Quota</Text>
                  <View style={indicatorcover}>
                    <View
                      style={{
                        height: 20,
                        width: convertWidth(
                          value.quota.currentUsage,
                          value.quota.maxUsage,
                        ),
                        backgroundColor: convertColor(
                          value.quota.currentUsage,
                          value.quota.maxUsage,
                        ),
                        borderRadius: 15,
                      }}
                    />
                  </View>
                </View>
                <View>
                  {value.item ? (
                    <Text
                      onPress={() => show(index)}
                      style={{fontSize: 25, fontWeight: 'bold'}}>
                      -
                    </Text>
                  ) : (
                    <Text
                      onPress={() => show(index)}
                      style={{fontSize: 25, fontWeight: 'bold'}}>
                      +
                    </Text>
                  )}
                </View>
              </View>
              {value.item == true && (
                <View>
                  <View style={{display: 'flex'}}>
                    <View
                      style={{
                        borderTopWidth: 0.5,
                        marginTop: 15,
                        borderColor: 'lightgrey',
                      }}
                    />
                    <View style={textUsage}>
                      <Text style={{color: 'black', marginBottom: 8}}>
                        Usage{' '}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'black'}}>
                          {covertNumber(value.quota.currentUsage)} {' / '}
                        </Text>

                        <Text style={{color: 'black', fontWeight: 'bold'}}>
                          {covertNumber(value.quota.maxUsage)}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 4,
                      }}>
                      <Text style={{color: 'black'}}>Validity</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'black'}}>
                          {value.validity.value}{' '}
                        </Text>
                        <Text style={{color: 'black'}}>
                          {value.validity.unit}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CList;
