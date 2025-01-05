import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View>
      <Image
        source={{
          uri: "https://vau.ac.lk/wp-content/uploads/2021/07/cropped-UoV_Logo.png",
        }}
        style={styles.banner}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
});