import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreens from "./src/screens/ComponentScreens";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    Exercise: ExerciseScreen,
    List: ListScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
