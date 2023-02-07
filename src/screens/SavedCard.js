import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {styles} from '../theme/applicationStyle';
import {boxesData} from '../elements/DataList';

const SavedCard = () => {
  const [checked, setchecked] = useState(boxesData);
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    // console.log('useEffect', checked);
  }, [checked]);

  const checkItem = id => {
    const check = checked.map(item => {
      if (id === item.id) {
        return {...item, isSelected: !item.isSelected};
      }
      return item;
    });
    setchecked(check);

    const data = check.filter(item => {
      return item.isSelected === true;
    });
    setSelected(data.length);
    console.log(data.length, 'hello');
  };

  const renderItemList = ({item}) => {
    return (
      <View style={styles.savedView}>
        <Text style={styles.checkBoxItem}>{item.name}</Text>
        <CheckBox
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
    <View style={styles.headingView}>
      <Text style={styles.headingTxt}>CheckBox</Text>
      <FlatList
        data={checked}
        renderItem={renderItemList}
        keyExtractor={item => item.id}
      />
      <View style={styles.btnView}>
        <TouchableOpacity
          style={selected >= 1 ? styles.greenBtn : styles.grayBtn}
          onPress={onSubmit}
          disabled={selected === 0 ? true : false}>
          <Text style={styles.savedBtnText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SavedCard;
















