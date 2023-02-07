import {StyleSheet} from 'react-native';
import {
  alignment,
  fontSize,
  fontWeight,
  marginConstants,
  paddingConstants,
} from './appDimension';
import {colors, FixedValue} from '../constants/applicationConstant';

export const styles = StyleSheet.create({
  safeViewContainer: {
    flex: FixedValue.CONSTANT_VALUE_1,
    backgroundColor: colors.DARK_GREEN,
  },
  mainContainer: {
    flex: FixedValue.CONSTANT_VALUE_1,
  },
  addMainView: {
    flex: FixedValue.CONSTANT_VALUE_1,
    alignItems: alignment.CENTER,
    backgroundColor: colors.DARK_GREEN,
  },
  profileScreen: {
    justifyContent: alignment.CENTER,
    alignItems: alignment.CENTER,
    marginTop: marginConstants.MARGIN_50,
  },
  avatarImage: {
    width: FixedValue.CONSTANT_VALUE_200,
    height: FixedValue.CONSTANT_VALUE_200,
    cropping: true,
    borderRadius: FixedValue.CONSTANT_VALUE_150,
  },
  uploadButton: {
    borderWidth: FixedValue.CONSTANT_VALUE_1,
    borderRadius: FixedValue.CONSTANT_VALUE_8,
    width: FixedValue.CONSTANT_VALUE_150,
    height: FixedValue.CONSTANT_VALUE_38,
    marginTop: marginConstants.MARGIN_10,
  },
  uploadBtnText: {
    fontWeight: fontWeight.FONT_800,
    fontSize: fontSize.FONT_17,
    textAlign: alignment.CENTER,
    paddingVertical: paddingConstants.PADDING_6,
    color: colors.DARK_GREEN,
  },
  settingMainView: {
    justifyContent: alignment.CENTER,
    alignItems: alignment.CENTER,
  },
  settingInnerView: {
    width: FixedValue.CONSTANT_VALUE_350,
    height: FixedValue.CONSTANT_VALUE_75,
    borderWidth: FixedValue.CONSTANT_VALUE_1,
    marginTop: marginConstants.MARGIN_10,
    marginBottom: marginConstants.MARGIN_40,
    borderRadius: FixedValue.CONSTANT_VALUE_8,
    justifyContent: alignment.SPACE_BETWEEN,
    alignItems: alignment.CENTER,
  },
  settingListTxt: {
    fontSize: fontSize.FONT_18,
    alignSelf: alignment.CENTER,
    marginTop: marginConstants.MARGIN_20,
  },
  savedView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 7,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
  },
  greenBtn: {
    width: 100,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#117A65',
    borderRadius: 8,
  },
  grayBtn: {
    width: 100,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderRadius: 8,
  },
  savedBtnText: {
    textAlign: 'center',
    paddingTop: 12,
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  checkBoxItem: {
    fontSize: 30,
    fontWeight: '600',
    width: 300,
  },
  headingView:{flex: 1, backgroundColor: '#117A65'},
  headingTxt:{
    textAlign: 'center', fontSize: 25, fontWeight: '700'
  },
  btnView:{
    alignItems: 'center', paddingBottom: 350
  }
});
