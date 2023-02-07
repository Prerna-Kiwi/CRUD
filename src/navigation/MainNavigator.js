import AddUser from '../screens/AddUser';
import Home from '../screens/Home';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StringsConstants} from '../constants/applicationConstant';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import DeleteAccount from '../screens/DeleteAccount';
import SignOut from '../screens/SignOut';
import ContactUs from '../screens/ContactUs';
import Faqs from '../screens/Faqs';
import ShippingAddress from '../screens/ShippingAddress';
import SavedCard from '../screens/SavedCard';
import Login from '../screens/Login';
Login;
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={StringsConstants.HOME} component={Home} />
      <Stack.Screen
        name={StringsConstants.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <Stack.Screen name={StringsConstants.ADDUSER} component={AddUser} />
      <Stack.Screen
        name={StringsConstants.SETTING_SCREEN}
        component={SettingScreen}
      />
      <Stack.Screen name={StringsConstants.CONTACT_US} component={ContactUs} />
      <Stack.Screen
        name={StringsConstants.DELETE_ACCOUNT}
        component={DeleteAccount}
      />
      <Stack.Screen name={StringsConstants.SIGN_OUT} component={SignOut} />
      <Stack.Screen name={StringsConstants.FAQS} component={Faqs} />
      <Stack.Screen name={StringsConstants.SAVED_CARD} component={SavedCard} />
      <Stack.Screen
        name={StringsConstants.SHIPPING_ADDRESS}
        component={ShippingAddress}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
