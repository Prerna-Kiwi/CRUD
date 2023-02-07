import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Images} from '../theme/appImage';

const EditButton = ({pressButton}) => {
  return (
    <TouchableOpacity onPress={pressButton} style={{marginRight:30}}>
      <Image source={Images.IMAGES.editIcon} />
    </TouchableOpacity>
  );
};

export default EditButton;
