import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigation = createStackNavigator(
  {
    Home: HomeScreen,
    ResultScreen: ResultScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Home",
    },
  }
);

export default createAppContainer(navigation);
