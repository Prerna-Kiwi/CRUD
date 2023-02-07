import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {settingList} from './DataList';
import {styles} from '../theme/applicationStyle';
import {useNavigation} from '@react-navigation/native';

const Setting = ({selectedData, settingData, isAdded}) => {
  const navigation = useNavigation();
  const renderListItem = ({item}) => {
    return (
      <View style={styles.settingInnerView}>
        <TouchableOpacity
          onPress={() => {
            if (item.id === 6) {
              navigation.navigate('ContactUs');
            } else if (item.id === 9) {
              navigation.navigate('DeleteAccount');
            } else if (item.id === 7) {
              navigation.navigate('Faqs');
            } else {
              selectedData(item);
            }
          }}>
          <Text style={styles.settingListTxt}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.settingMainView}>
      <FlatList
        style={{marginTop: 20}}
        data={settingData}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Setting;
