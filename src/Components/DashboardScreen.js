import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
// import MilestoneList from "../Components/MilestoneList";
import MilestoneForm from "../Components/MilestoneForm";

const DashboardScreen = ({ navigation }) => {
  const [milestones, setMilestones] = useState([]);

 const handleAddMilestone = (newMilestone) => {
   setMilestones([...milestones, newMilestone]);
   };

  return (
    <ImageBackground
      source={require("../Images/siblings.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Baby's Milestones</Text>
        <MilestoneForm onAddMilestone={handleAddMilestone} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Add", { milestones: milestones })}
        >
          <Text style={styles.buttonText}>Add Milestone</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 180,
    marginTop: 170,
    color: "#800016",
  },
  button: {
    borderRadius: 20,
    backgroundColor: "#480ca8",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});


export default DashboardScreen;
