import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import TrackList from "./src/screens/track-list/TrackList";
import TrackDetail from "./src/screens/track-detail/TrackDetail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./src/screens/account/Account";
import CreateTrack from "./src/screens/create-track/CreateTrack";
import { Provider as AuthProvider, Context } from "./src/context/authContext";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { StyleSheet, Text, View } from "react-native";

const AuthStack = createStackNavigator();
const TrackListStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const TrackListFlowStack = () => {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackList} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetail} />
    </TrackListStack.Navigator>
  );
};

const BottomTabsScreens = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="TrackListFlow" component={TrackListFlowStack} />
      <BottomTabs.Screen name="CreateTrack" component={CreateTrack} />
      <BottomTabs.Screen name="Account" component={Account} />
    </BottomTabs.Navigator>
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={BottomTabsScreens}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreens}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

function App() {
  const { state } = React.useContext(Context); 
  return (
    <NavigationContainer>
      <RootStackScreen userToken={state.token} />
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
