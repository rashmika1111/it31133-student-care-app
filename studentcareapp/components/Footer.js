import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>@UoV 2025</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "purple",
    width: 300,
    height: 20,
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 20,
    position: 'relative',
    bottom: 0,
  },
  footerText: {
    color: "white",
    textAlign: "center",
  },
});