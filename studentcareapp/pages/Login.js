import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { students } from "../assets/dataset/studentdb";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    try {
      if (!username || !password) {
        // alert("Please enter username and password");
        setError("Please enter a username and password");
        return;
      } else {
        const student = students.find((s) => s.username === username);
        if (student && student.password === password) {
          alert("Login successful!");
          setUsername("");
          setPassword("");
          setError("");
          navigation.navigate("Home", { user:student });
        } else {
          //   alert("Invalid username or password");
          setError("Invalid username or password");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  };

  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://vau.ac.lk/wp-content/uploads/2021/07/cropped-UoV_Logo.png",
          }}
          style={styles.banner}
        />
      </View>
      <View>
        <Text style={styles.heading}>{"Student Login".toUpperCase()}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.textInput}
        />

        <TextInput
          label="Password"
          secureTextEntry={showPassword}
          mode="outlined"
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {showPassword ? (
          <Icon
            name="visibility"
            size={24}
            color="gray"
            style={styles.eyeIcon}
            onPress={() => setShowPassword(false)}
          />
        ) : (
          <Icon
            name="visibility-off"
            size={24}
            color="gray"
            style={styles.eyeIcon}
            onPress={() => setShowPassword(true)}
          />
        )}

        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          Login
        </Button>
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Icon name="info" style={styles.infoIcon} />
          <Text style={styles.errorContent}>{error}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    width: 300,
    borderRadius: 20,
    textAlign: "center",
    marginTop: 20,
  },
  eyeIcon: {
    position: "absolute",
    right: 57,
    top: 95,
    color: "gray",
  },
  previewText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  errorContainer: {
    backgroundColor: "pink",
    width: 350,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },

  errorContent: {
    fontSize: 16,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 5,
  },
});