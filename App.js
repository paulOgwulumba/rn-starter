import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreens from "./src/screens/ComponentScreens";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import ListScreen from "./src/screens/ListScreen";
import NatureScreen from "./src/screens/NatureScreen";
import CounterScreen from "./src/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreens,
    Exercise: ExerciseScreen,
    List: ListScreen,
    Nature: NatureScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My App",
    },
  }
);

export default createAppContainer(navigator);
