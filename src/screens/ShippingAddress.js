import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { boxesData } from '../elements/DataList';

const ShippingAddress = () => {
  const [checked, setchecked] = useState(boxesData);

  useEffect(() => {
    console.log('useEffect', checked);
  }, [checked]);

  const checkItem = id => {
    const check = checked.map(item => {
      console.log('item.id', id === item.id);
      if (id === item.id) {
        return {...item, isSelected: true};
      } else return {...item, isSelected: false};
    });

    setchecked(check);
  };
  const renderItemList = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20,
          borderWidth: 1,
          borderRadius: 7,
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 30, fontWeight: '600', width: 300}}>
          {item.name}
        </Text>
        <CheckBox
          disabled={item.isSelected}
          value={item.isSelected}
          onValueChange={() => {
            checkItem(item.id);
          }}
        />
      </View>
    );
  };

  const onSubmit = () => {
    checked.map(item => {
      if (item.isSelected === true) {
        console.log('selected', item, item.name);
      } else {
        console.log('unselected', item, item.name);
      }
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#117A65'}}>
      <Text style={{textAlign: 'center', fontSize: 25, fontWeight: '700'}}>
        Radio Button
      </Text>
      <FlatList
        data={checked}
        renderItem={renderItemList}
        keyExtractor={item => item.id}
        extraData={checked}
      />
      <View style={{alignItems: 'center', paddingBottom: 350}}>
        <TouchableOpacity
          style={{width: 100, height: 50, borderWidth: 1, borderRadius: 8}}
          onPress={onSubmit}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 12,
              color: 'white',
              fontSize: 18,
              fontWeight: '800',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShippingAddress;
