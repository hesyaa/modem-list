import {Text, View, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, {Component} from 'react';
import {
  listModem,
  listName,
  indicatorcover,
  coverName,
  contentCard,
  textUsage,
} from './CStyles';
import {colours} from '../../../Utils';

export class CList extends Component {
  constructor() {
    super();
  }

  open = () => {
    alert('hello');
  };

  render() {
    const {
      mainData,
      show,
      convertWidth,
      convertColor,
      covertNumber,
      convertMax,
      listAction,
    } = this.props;
    return (
      <View style={{width: '90%', height: '57%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mainData.map((value, index) => (
            <View key={index} style={{paddingHorizontal: 5, paddingTop: 3}}>
              <Pressable onPress={() => show(index)}>
                <View style={listModem} key={index}>
                  <View style={contentCard}>
                    <View style={coverName}>
                      <Text style={{marginBottom: 3, color: colours.secondary}}>
                        Name
                      </Text>
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
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                          -
                        </Text>
                      ) : (
                        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
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
                          <Text
                            style={{color: colours.secondary, marginBottom: 8}}>
                            Usage{' '}
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={{color: colours.secondary}}>
                              {covertNumber(value.quota.currentUsage)} {' / '}
                            </Text>

                            <Text
                              style={{
                                color: colours.secondary,
                                fontWeight: 'bold',
                              }}>
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
                          <Text style={{color: colours.secondary}}>
                            Validity
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                            <Text style={{color: colours.secondary}}>
                              {value.validity.value}{' '}
                            </Text>
                            <Text style={{color: colours.secondary}}>
                              {value.validity.unit}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CList;
