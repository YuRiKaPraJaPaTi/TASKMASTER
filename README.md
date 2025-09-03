This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# TaskMaster - React Native To-Do App

TaskMaster is a feature-rich **To-Do app** built with **React Native**. It allows users to manage their tasks efficiently with authentication, notifications, and a structured interface.

## Features

### Authentication
- Users can **sign up** and **log in** using **Firebase Authentication**.
- Securely manages user sessions.

### Home Tab
- Shows a **basic summary** of tasks (total, completed, pending).
- Displays tasks in a list format.
- Includes a **draggable Add button** to create new tasks quickly.
- Adding a task triggers a **notification** and a **2-minute scheduled reminder**.

### History Tab
- Displays **all tasks**, categorized as **Active** or **Completed**.
- Allows users to review their task history.

### Profile Tab
- Shows **user profile details**.
- Allows users to **logout**.

### Task Features
- Each task item allows:
  - **View details**
  - **Edit**
  - **Delete**
  - **Mark as done**
- Actions update the task list immediately.

### State Management & Storage
- Uses **Redux** for global state management.
- Uses **AsyncStorage** to persist tasks locally between sessions.

### Notifications
- Provides **instant notification** when a task is added.
- Schedules a **reminder notification** 2 minutes ahead for pending tasks.

## Technologies Used
- **React Native**
- **Firebase Authentication**
- **Redux**
- **AsyncStorage**
- **React Native Push Notifications**

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/YuRiKaPraJaPaTi/TASKMASTER.git
cd TASKMASTER
```

### Install dependencies
```bash
npm install
# or
yarn install
```



### Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

### Build and run app

With Metro running, open a new terminal window/pane from the root of the React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```






## Congratulations! :tada:

You've successfully run and modified React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
