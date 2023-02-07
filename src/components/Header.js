import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Header = ({ navigation, showBack }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "yellow",
        alignItems: "center",
        height: 100,
      }}
    >
      {showBack && (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 20,
                color: "black",
                padding: 12,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          fontSize: "30",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingLeft: 12 }}>
          blink
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "green" }}>
          It
        </Text>
      </View>
    </View>
  );
};

export default Header;
