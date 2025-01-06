import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { courses, marks, subjects } from "../assets/dataset/studentdb";

import { Divider } from "react-native-paper";
import Banner from "../components/Banner";
import Footer from "../components/Footer";



export default function Subjects({ user2 }) {
  const course = courses.find((course) => course.id === user2.course_id);

  const subjectList = subjects.filter((sub) => sub.course_id === course.id);
  const subcount = subjectList.length;

  const totalMarksList = marks.filter((mark) => mark.student_id === user2.id);

  let sum = 0;
  for (let i = 0; i < totalMarksList.length; i++) {
    sum += totalMarksList[i].marks;
  }
  const avg = subcount > 0 ? Math.floor(sum / subcount) : 0;

  return (
    <ScrollView>
      <View>
        <Banner/>
      </View>
      <View style={styles.container1}>
        <Text style={styles.heading}>{course.name}</Text>
        <Text
          style={styles.headingtext}
        >{`${subcount} subjects | Average: ${avg}`}</Text>
        <Divider style={styles.divider} />

        <View>
          <Text style={styles.heading2}>Marks information</Text>
          <View style={styles.tableHeading}>
            <Text>Subjects</Text>
            <Text>Marks</Text>
          </View>
          <View>
            {subjectList.map((subject, index) => (
              <View key={index} style={styles.tableData}>
                <Text>{subject.name}</Text>
                <Text>
                  {
                    totalMarksList.find(
                      (mark) => mark.subject_id === subject.id
                    )?.marks
                  }
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.footers}>
        <Footer />
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
    marginTop: 100,
  },
  tableHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#ddd",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  tableData: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});