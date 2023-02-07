import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../theme/appImage';
import {styles} from '../theme/elementStyle';

const DeleteButton = ({pressDelete}) => {
  return (
    <View style={styles.deleteView} >
      <TouchableOpacity onPress={pressDelete}>
        <Image source={Images.IMAGES.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default DeleteButton;
