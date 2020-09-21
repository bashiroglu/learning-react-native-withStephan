import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import CreateBlog from "./src/screens/CreateBlog";
import EditBlog from "./src/screens/EditBlog";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";

const navigation = createStackNavigator(
  {
    Home: HomeScreen,
    ShowScreen: ShowScreen,
    CreateBlog: CreateBlog,
    EditBlog: EditBlog,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigation);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
