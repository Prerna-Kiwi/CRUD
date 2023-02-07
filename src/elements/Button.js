import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/elementStyle'

const Button = ({onPress,name}) => {
  return (
    <View style={styles.mainBtnView}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnView}>
        <Text style={styles.btnTxt}>{name}</Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default Button