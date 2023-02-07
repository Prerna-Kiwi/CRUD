import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../elements/Header';
import {StringsConstants} from '../constants/applicationConstant';
import ImagePicker from 'react-native-image-crop-picker';
import {Images} from '../theme/appImage';
import {styles} from '../theme/applicationStyle';
import {androidCameraPermission} from '../../permission';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = props => {
  const navigation = useNavigation();
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const onSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      setUri(image.path);
      console.log('Imageee', image);
    });
  };
  const selectFromCamera = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'ios') {
      Alert.alert('profile picture', 'choose an option', [
        {text: 'Camera', onPress: OnCamera},
        {text: 'Images', onPress: onSelectImage},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
      console.log('cameraaaa', image);
    });
  };
  console.log(uri, 'data');
  return (
    <>
      <Header
      style={{marginRight:80}}
        leftIcon
        name="Profile"
        rightIcon
        rightIconImage={Images.IMAGES.settingIcon}
        HeaderPress={() => {
          navigation.navigate(StringsConstants.SETTING_SCREEN);
        }}
      />
      <View style={styles.profileScreen}>
        <View>
          <Image
            style={styles.avatarImage}
            {...props}
            source={uri ? {uri} : Images.IMAGES.Avatar}
          />
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={onSelectImage}>
          <Text style={styles.uploadBtnText}>
            {StringsConstants.UPLOAD_IMAGE}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileScreen;
