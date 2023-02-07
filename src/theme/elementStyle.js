import {StyleSheet} from 'react-native';
import {marginConstants, fontSize, alignment, fontWeight} from './appDimension';
import {FixedValue, colors} from '../constants/applicationConstant';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: alignment.ROW,
    justifyContent: alignment.SPACE_BETWEEN,
    backgroundColor: colors.DARK_GREEN,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headingView: {
    justifyContent: alignment.CENTER,
  },
  headingCenterView: {
    marginRight: 140,
    marginBottom: marginConstants.MARGIN_10,
    justifyContent: alignment.CENTER,
  },
  listText: {
    fontSize: fontSize.FONT_22,
    fontWeight: fontWeight.FONT_700,
    color: colors.WHITE,
    textAlign: 'center',
    marginTop: 5,
  },

  plus: {
    width: FixedValue.CONSTANT_VALUE_35,
    height: FixedValue.CONSTANT_VALUE_35,
    resizeMode: alignment.STRETCH,
  },
  backIconView: {
    justifyContent: alignment.FLEX_START,
    marginRight: marginConstants.MARGIN_140,
  },
  backIcon: {
    position: alignment.ABSOLUTE,
    width: FixedValue.CONSTANT_VALUE_40,
    height: FixedValue.CONSTANT_VALUE_40,
  },
  renderMainView: {
    marginTop: marginConstants.MARGIN_10,
    alignItems: alignment.CENTER,
    flexDirection: alignment.ROW,
    borderWidth: FixedValue.CONSTANT_VALUE_1,
    height: FixedValue.CONSTANT_VALUE_85,
    width: 385,
    marginLeft: marginConstants.MARGIN_20,
    borderRadius: FixedValue.CONSTANT_VALUE_8,
    justifyContent: alignment.SPACE_BETWEEN,
  },
  insideView: {
    justifyContent: alignment.FLEX_START,
    width: 230,
  },
  nameTxt: {
    fontSize: fontSize.FONT_17,
    marginLeft: marginConstants.MARGIN_10,
  },
  mailTxt: {
    fontSize: fontSize.FONT_12,
    marginLeft: marginConstants.MARGIN_10,
  },
  genderTxt: {
    fontSize: fontSize.FONT_SMALL,
    marginLeft: marginConstants.MARGIN_10,
  },
  statusTxt: {
    fontSize: fontSize.FONT_SMALL,
    marginLeft: marginConstants.MARGIN_10,
  },
  deleteView: {
    justifyContent: alignment.FLEXEND,
    marginRight: 10,
  },
  innerView: {
    marginBottom: marginConstants.MARGIN_20,
  },
  addTxt: {
    fontSize: fontSize.FONT_22,
    fontWeight: fontWeight.FONT_600,
  },
  nameInput: {
    fontSize: fontSize.FONT_18,
    borderWidth: FixedValue.CONSTANT_VALUE_1,
    borderRadius: FixedValue.CONSTANT_VALUE_8,
    height: FixedValue.CONSTANT_VALUE_50,
    width: FixedValue.CONSTANT_VALUE_250,
    marginTop: marginConstants.MARGIN_10,
    backgroundColor: colors.WHITE,
  },
  mainBtnView: {
    alignItems: alignment.CENTER,
    marginTop: marginConstants.MARGIN_20,
  },
  btnView: {
    borderWidth: FixedValue.CONSTANT_VALUE_1,
    width: FixedValue.CONSTANT_VALUE_80,
    height: FixedValue.CONSTANT_VALUE_35,
    borderRadius: FixedValue.CONSTANT_VALUE_6,
    alignItems: alignment.CENTER,
    justifyContent: alignment.CENTER,
    backgroundColor: colors.WHITE,
  },
  btnTxt: {
    color: colors.DARK_GREEN,
    fontWeight: fontWeight.FONT_800,
  },
  profileIcon: {
    justifyContent: alignment.CENTER,
    alignItems: alignment.CENTER,
  },
  bothIconView: {
    alignItems: alignment.SPACE_BETWEEN,
    flexDirection: alignment.ROW,
  },
  
});
