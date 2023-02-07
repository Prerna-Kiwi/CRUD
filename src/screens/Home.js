import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchData} from '../redux/action';
import {styles} from '../theme/applicationStyle';
import {StringsConstants} from '../constants/applicationConstant';
import ItemList from '../elements/ItemList';
import Header from '../elements/Header';
import { Images } from '../theme/appImage';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserListFromApi();
  }, []);
  // console.log('Data', userList);
  const getUserListFromApi = () => {
    dispatch(fetchData());
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        onLeftPress={() => navigation.navigate('ProfileScreen')}
        name={StringsConstants.USER_LIST}
        HeaderPress={() => navigation.navigate('AddUser', {isAdded: true})}
        rightIcon
        rightIconImage={Images.IMAGES.plusIcon}
        leftProfile
      />
      <ItemList />
    </View>
  );
};
export default Home;
