import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from '../theme/elementStyle';
import {Images} from '../theme/appImage';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  HeaderPress,
  leftIcon,
  rightIcon,
  onLeftPress,
  name,
  center,
  leftProfile,
  rightIconImage,style
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainView}>
      {leftIcon ? (
        <View style={styles.backIconView}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image style={styles.backIcon} source={Images.IMAGES.backIcon} />
          </TouchableOpacity>
        </View>
      ) : null}
      {leftProfile ? (
        <View style={styles.profileIcon}>
          <TouchableOpacity onPress={onLeftPress}>
            <Image style={styles.plus} source={Images.IMAGES.profileIcon} />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={center ? styles.headingCenterView : [styles.headingView,style]}>
        <Text style={styles.listText}>{name}</Text>
      </View>
      {rightIcon ? (
        <View>
          <TouchableOpacity onPress={HeaderPress}>
            <Image style={styles.plus} source={rightIconImage} />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
