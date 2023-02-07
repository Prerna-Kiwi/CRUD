import {Dimensions} from 'react-native';

export const AppDimension = {
  DEVICE_WIDTH: Dimensions.get('window').width,
  DEVICE_HEIGHT: Dimensions.get('window').height,
};

export const marginConstants = {
  MARGIN_10: 10,
  MARGIN_20: 20,
  MARGIN_30: 30,
  MARGIN_25: 25,
  MARGIN_40: 40,
  MARGIN_50: 50,
  MARGIN_100: 100,
  MARGIN_140: 140,
};
export const paddingConstants = {
  PADDING_6: 6,
  PADDING_10: 10,
  PADDING_20: 20,
  PADDING_30: 30,
  PADDING_25: 25,
};

export const fontSize = {
  FONT_SMALL: 14,
  FONT_LARGE: 24,
  FONT_12: 12,
  FONT_15: 15,
  FONT_18: 18,
  FONT_17: 17,
  FONT_20: 20,
  FONT_22: 22,
  FONT_30: 30,
};

export const fontWeight = {
  FONT_NORMAL: 'normal',
  FONT_BOLD: 'bold',
  FONT_100:  '100',
  FONT_200: '200',
  FONT_300: '300',
  FONT_400: '400',
  FONT_500: '500',
  FONT_600: '600',
  FONT_700: '700',
  FONT_800: '800',
  FONT_900: '900',
};

export const alignment = {
  COLUMN: 'column',
  ROW: 'row',
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
  FLEXEND: 'flex-end',
  FLEX_START: 'flex-start',
  BASELINE: 'baseline',
  STRETCH: 'stretch',
  ALIGNAUTO: 'auto',
  SPACE_AROUND: 'space-around',
  SPACE_BETWEEN: 'space-between',
  SPACE_EVENLY: 'space-evenly',
  TOP: 'top',
  CONTAIN: 'contain',
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
  UNDERLINE: 'underline',
  ITALIC: 'italic',
  TRANSPARENT: 'transparent',
  COLUMN_REVERSE: 'column-reverse',
  ROW_REVERSE: 'row-reverse',
  UPPERCASE: 'uppercase',
};
