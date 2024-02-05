export const milestones = [
  { type: "First Smile", date: new Date(), notes: "Such a joyful moment!" },
  { type: "First Step", date: new Date(), notes: "Baby took the first step!" },
];

export const addMilestone = (milestone) => {
  milestones.push(milestone);
};
