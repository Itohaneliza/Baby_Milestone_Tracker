import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  // TouchableOpacity,
 ImageBackground,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MilestoneList from "./MilestoneList";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddScreen = ({ route }) => {
   const navigation = useNavigation();
   const {params} = useRoute();
   const { milestones: initialMilestones } = params || { milestones: [] };
   const [milestones, setMilestones] = useState(initialMilestones);
   const [editedMilestone, setEditedMilestone] = useState(null);

  // useEffect(() => {
  //   if (editedMilestone) {
  //     console.log("Edited Milestone:", editedMilestone);
  //     setMilestones((prev) =>
  //       prev.map((milestone) =>
  //         milestone.id === editedMilestone.id ? editedMilestone : milestone
  //       )
  //     );
  //     setEditedMilestone(null);
  //   }
  // }, [editedMilestone]);

  const saveMilestones = async (milestones) => {
    try {
      await AsyncStorage.setItem("milestones", JSON.stringify(milestones));
    } catch (error) {
      console.error("Error saving milestones:", error);
    }
  };

  const getMilestones = async () => {
    try {
      const storedMilestones = await AsyncStorage.getItem("milestones");
      return storedMilestones ? JSON.parse(storedMilestones) : [];
    } catch (error) {
      console.error("Error getting milestones:", error);
      return [];
    }
  };

  const handleAddMilestone = () => {
    if (editedMilestone) {
      setEditedMilestone(null);
    } else {
      const newMilestone = {
        id: Date.now(),
        type: "New Milestone",
        date: new Date().toISOString(),
        notes: "",
      };
      setMilestones([...milestones, newMilestone]);
      saveMilestones([...milestones, newMilestone]);
    }
  };

  useEffect(() => {
    // Load stored milestones when the component mounts
    const loadMilestones = async () => {
      const storedMilestones = await getMilestones();
      setMilestones(storedMilestones);
    };

    loadMilestones();
  }, []);

  const handleEditMilestone = (editedMilestone) => {
    const indexOfEditedMilestone = milestones.findIndex(
      (milestone) => milestone.date === editedMilestone.date
    );
    const updatedMilestones = [...milestones];
    updatedMilestones[indexOfEditedMilestone] = editedMilestone;

    setMilestones(updatedMilestones);
    saveMilestones(updatedMilestones);
  };

  // const handleAddMilestone = () => {
  //   if (editedMilestone) {
  //     setEditedMilestone(null); // Reset the editedMilestone state
  //   } else {
  //     const newMilestone = {
  //       id: Date.now(),
  //       type: "New Milestone",
  //       date: new Date().toISOString(),
  //       notes: "",
  //     };
  //     setMilestones([...milestones, newMilestone]);
  //     saveMilestones([...milestones, newMilestone]);

  //   }
  // };

  // useEffect(() => {
  //   // Load stored milestones when the component mounts
  //   const loadMilestones = async () => {
  //     const storedMilestones = await getMilestones();
  //     setMilestones(storedMilestones);
  //   };

  //   loadMilestones();
  // }, []);

  // const handleEditMilestone = (editedMilestone) => {
  //   const indexOfEditedMilestone = milestones.findIndex(
  //     (milestone) => milestone.date === editedMilestone.date
  //   );
  //   const updatedMilestones = [...milestones];
  //   updatedMilestones[indexOfEditedMilestone] = editedMilestone;

  //   setMilestones(updatedMilestones);
  //   saveMilestones(updatedMilestones);
  // };

  return (
    <ImageBackground
      source={require("../Images/dashboard.jpg")} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.listHeader}>Added Milestones:</Text>
        <MilestoneList
          milestones={milestones}
          onEditMilestone={handleEditMilestone}
        />
        {/* <TouchableOpacity onPress={handleAddMilestone}>
          <Text>{editedMilestone ? "Save Changes" : "Add Milestone"}</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    color: "#800016",
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default AddScreen;
