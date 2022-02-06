import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreens from "./src/screens/ComponentScreens";

const navigator = createStackNavigator(
  {
    Home: ComponentScreens,
  },
  {
    Next: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My First App",
    },
  }
);

export default createAppContainer(navigator);
