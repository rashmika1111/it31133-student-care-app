import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

export default function Profile({ user }) {
  return (
    <>
      <ScrollView>
        <View>
          <Banner/>
        </View>
        <View style={styles.container1}>
          <View style={styles.profile}>
            <Image source={user.profile_pic} style={styles.profilePic} />
            <Text style={styles.name}>{user.name}</Text>
            <Text>{`Age: ${user.age} | Gender: ${user.gender}`}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.contact}>
            <Text style={styles.heading}>Contact Information</Text>
            <Text>{`Email :${user.email}`}</Text>
            <Text>{`Email :${user.email}`}</Text>
            <Text>{`Address :${user.address}`}</Text>
          </View>
          <Divider style={styles.divider} />

          <View style={styles.contact}>
            <Text style={styles.heading}>Biological Information</Text>
            <Text>{`Gender :${user.gender}`}</Text>
            <Text>{`Age :${user.age}`}</Text>
            <Text>{`Blood Group :${user.blood_group}`}</Text>
          </View>
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 25,
    marginBottom: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  divider: {
    width: "90%",
    marginVertical: 10,
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 40,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 15,
  },
});