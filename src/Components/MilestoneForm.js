import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  // TouchableOpacity,
  StyleSheet,
} from "react-native";
// import { addMilestone } from "../data";
import { useNavigation } from "@react-navigation/native";

const MilestoneForm = ({ onAddMilestone }) => {
  const [milestone, setMilestone] = useState("");
  const [notes, setNotes] = useState("");
  const navigation = useNavigation();

  const handleAddMilestone = () => {
    const newMilestone = {
      type: milestone,
      date: new Date().toISOString(),
      notes: notes || "",
    };

    console.log("New Milestone in Form:", newMilestone);

     navigation.navigate("Add", { milestones: [newMilestone] });
    setMilestone("");
    setNotes("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter milestone type"
        value={milestone}
        onChangeText={(text) => setMilestone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter notes (optional)"
        value={notes}
        onChangeText={(text) => setNotes(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius:25,
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

export default MilestoneForm;
