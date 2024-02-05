
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveMilestones = async (milestones) => {
  try {
    await AsyncStorage.setItem("milestones", JSON.stringify(milestones));
  } catch (error) {
    console.error("Error saving milestones:", error);
  }
};

export const getMilestones = async () => {
  try {
    const storedMilestones = await AsyncStorage.getItem("milestones");
    return storedMilestones ? JSON.parse(storedMilestones) : [];
  } catch (error) {
    console.error("Error getting milestones:", error);
    return [];
  }
};
