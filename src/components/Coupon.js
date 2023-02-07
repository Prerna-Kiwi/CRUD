import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Coupon = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground
          source={require("../assets/Images/Coupon.jpeg")}
          style={{ height: "100%", width: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: "dotted",
    borderWidth: 2,
    borderRadius: 5,
    margin: 8,
    borderColor: "#32CD32",
    backgroundColor: "#DBF9DB",
    marginTop: 5,
    marginBottom: 15,
    height: 80,
  },
});

export default Coupon;
