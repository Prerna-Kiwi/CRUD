import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ITEMS } from "../models/Items";

const Card = ({ route }) => {
  const productInfo = route.params.productId;
  const displayProduct = ITEMS.find((product) => product.id === productInfo);
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={displayProduct.productImage} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>{displayProduct.productName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log()
        }}
      >
        <Text style={styles.cart}>ADD</Text>
      </TouchableOpacity>
      <Text style={styles.price}>&#8377;{displayProduct.productPrice}</Text>
      <Text style={styles.textdesc}>Description</Text>
      <Text style={styles.desc}>{displayProduct.productDesc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderColor: "gray",
    height: 250,
    width: 250,
  },
  text: {
    fontSize: 21,
    fontWeight: "700",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 8,
    marginTop: 15,
  },
  cart: {
    fontSize: 20,
    fontWeight: "500",
    borderRadius: 6,
    borderWidth: 1,
    width: 90,
    height: 35,
    marginTop: 14,
    marginRight: 15,
    color: "green",
    textAlign: "center",
    paddingTop: 6,
  },
  desc: {
    marginLeft: 8,
    fontSize: 18,
    marginTop: 3,
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 8,
  },

  textdesc: {
    fontSize: 29,
    fontWeight: "700",
    marginLeft: 8,
    marginTop: 3,
  },
});

export default Card;
