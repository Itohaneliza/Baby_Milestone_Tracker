import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  // FlatList,
  StyleSheet,
} from "react-native";
import { milestones } from "../data";

const MilestoneList = () => {
  return (
    <View style={styles.container}>
      {milestones.map((milestone, index) => (
        <TouchableOpacity
          key={`${milestone.date}-${index}`}
          onPress={() => onEditMilestone(milestone)}
        >
          <Text style={styles.title}>{milestone.type}</Text>
          <Text style={styles.subtitle}>Note: {milestone.notes}</Text>
          <Text style={styles.subtitle}>Date: {milestone.date.toString()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 8,
    color: "#3a0ca3",
  },
  subtitle: {
    color: "#800016",
  },
});

export default MilestoneList;
