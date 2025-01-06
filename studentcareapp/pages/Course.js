import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { courses } from "../assets/dataset/studentdb";

import { Divider } from "react-native-paper";
import Banner from "../components/Banner";
import Footer from "../components/Footer";




export default function Course({ user1 }) {
  const course = courses.find((course) => course.id === user1.course_id);

  return (
    <ScrollView>
      <View>
        <Banner/>
      </View>
      <View style={styles.container1}>
        <Text style={styles.heading}>{course.name}</Text>
        <Text
          style={styles.headingtext}
        >{`Code: ${course.course_code} | Dept: ${course.department}`}</Text>
        <Divider style={styles.divider} />
        <View style={styles.contact}>
          <Text style={styles.heading2}>Course Information</Text>
          <Text>{`Code: ${course.course_code}`}</Text>
          <Text>{`Department: ${course.department}`}</Text>
          <Text>{`Duration: ${course.duration}`}</Text>
          <Text>{`Description: ${course.description}`}</Text>
        </View>
      </View>
      <View style={styles.footers}>
        <Footer/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 20,
    paddingBottom: 20,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  heading2: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  headingtext: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  courseContent: {
    textAlign: "left",
  },
  footers: {
    marginTop: 190,
  },
});