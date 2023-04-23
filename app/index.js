import Signin from "../components/signin/Signin";
import Signup from "../components/signin/Signup";
import {createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Homepage";
import Account from "../components/account/Account";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="account" component={Account}/>
        <Stack.Screen name="signup" component={Signup}/>
      </Stack.Navigator>
  );
}
