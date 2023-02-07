import {View,  Alert} from 'react-native';
import React from 'react';
import Header from '../elements/Header';
import {StringsConstants} from '../constants/applicationConstant';
import Setting from '../elements/Setting';
import { useNavigation } from '@react-navigation/native';
import { settingList } from '../elements/DataList';


const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <Header
        name={StringsConstants.SETTING}
        leftIcon
        center
      />
     <Setting selectedData={(item) => {
        if (item.name === StringsConstants.SAVED_CARD) {
          navigation.navigate("SavedCard")
        } else if (item.name === StringsConstants.SHIPPING_ADDRESS) {
          navigation.navigate("ShippingAddress")
        } else if (item.id === 8) {
          navigation.navigate("Login")
        }
         else {
          Alert.alert("CRUD", "Coming Soon")
        }
     }}
     settingData={settingList} isAdded={true}/>
    </View>
  );
};

export default SettingScreen;
