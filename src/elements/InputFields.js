import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../theme/elementStyle';
const InputFields = ({
  placeholder,
  onChangeText,
  onBlur,
  editable = true,
  value,
  text,
  secureTextEntry,
}) => {
  return (
    <View>
      <TextInput
        style={styles.nameInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        editable={editable}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default InputFields;
