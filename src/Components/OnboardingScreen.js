import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";


const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../Images/onboarding.jpg")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.Text}>
          Welcome to Baby Milestones Tracker - A Mother's Guide to Cherishing
          Every Moment! 💖
        </Text>
        <Text style={styles.Title}>Dear Amazing Moms,</Text>
        <Text style={styles.Paragraph}>
          🌟 Embrace the journey of motherhood with us. We're here to help you
          capture and savor those precious milestones that make every day
          extraordinary.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    padding: 16,
  },
  Text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
    color: "#8f2d56",
  },
  Title: {
    fontSize: 25,
    marginTop: 370,
    color: "#780000",
  },
  Paragraph: {
    fontSize: 18,
    color: "#800016",
    marginTop: 12,
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#480ca8",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default OnboardingScreen;
