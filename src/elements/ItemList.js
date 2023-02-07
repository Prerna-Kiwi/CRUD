import {View, Text, FlatList} from 'react-native';
import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import {styles} from '../theme/elementStyle';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteUser} from '../redux/action';

const ItemList = () => {
  const {userList} = useSelector(state => state.listReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const deleteList = index => {
    dispatch(deleteUser(userList[index]));
  };

  const renderListItem = ({item, index}) => {
    return (
      <View style={styles.renderMainView}>
        <View style={styles.insideView}>
          <Text style={styles.nameTxt}>{item.name}</Text>
          <Text style={styles.mailTxt}>{item.email}</Text>
          <Text style={styles.genderTxt}>{item.gender}</Text>
          <Text style={styles.statusTxt}>{item.status}</Text>
        </View>
        <View style={styles.bothIconView}>
          <EditButton
            pressButton={() =>
              navigation.navigate('AddUser', {isEdit: true, item: item})
            }
          />
          <DeleteButton
            pressDelete={() => {
              deleteList(index);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={{marginTop: 10}}
      data={userList}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
