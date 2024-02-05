# Baby Milestones Tracker App

Welcome to the Baby Milestones Tracker app! This application helps parents keep track of their baby's developmental milestones.

## Table of Contents

- [Key Design Decisions](#key-design-decisions)
- [Considerations](#considerations)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Key Design Decisions

1. **Technology Stack:**
   - React Native for cross-platform mobile development.
   - AsyncStorage for local data persistence.
   - React Navigation for intuitive navigation.

2. **Architecture:**
   - Follows a simple component-based architecture.
   - Utilizes local state for managing component-specific data.

3. **State Management:**
   - Primarily uses local component state.
   - AsyncStorage for persistent storage of milestone data.

4. **Navigation:**
   - Implemented using React Navigation for seamless navigation between screens.
   - Follows a stack-based navigation model.

5. **UI/UX Design:**
   - Prioritizes a user-friendly and intuitive design.
   - Utilizes basic styling for a clean and visually appealing interface.

6. **Data Persistence:**
   - Utilizes AsyncStorage for storing and retrieving milestone data locally.
   - Provides offline access to previously added milestones.

7. **Network Requests:**
   - Currently, the app doesn't involve external APIs.
   - Supports basic local functionality without requiring a network connection.

## Considerations

1. **Performance:**
   - Emphasizes a lightweight design for smooth performance.
   - Minimal background processing to conserve device resources.

2. **Accessibility:**
   - Incorporates basic accessibility features for a wider user audience.
   - Ensures readability and navigation are user-friendly.

3. **Security:**
   - Focuses on securing local data stored in AsyncStorage.
   - No sensitive user information is stored externally.

4. **Error Handling:**
   - Implements basic error handling for user input validation.
   - Provides clear error messages to guide users.
