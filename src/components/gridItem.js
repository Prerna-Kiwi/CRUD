import React from "react";
import { View, Pressable, Text, StyleSheet, Image } from "react-native";

const Griditem = ({ productName, productImage, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "deepGray" }}
        style={({ pressed }) => [
          styles.onPressed,
          pressed ? styles.onPressedButton : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerGrid}>
          <Image style={styles.Image} source={productImage} />
          <View style={styles.insideInner}>
            <Text style={styles.name}>{productName}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    elevation: 4,
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "black",
  },
  onPressed: {
    flex: 1,
  },
  onPressedButton: {
    opacity: 0.3,
  },
  innerGrid: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  Image: {
    alignSelf: "center",
    height: 125,
    width: 100,
    resizeMode: "contain",
  },
  insideInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    paddingBottom: 14,
  },
});

export default Griditem;