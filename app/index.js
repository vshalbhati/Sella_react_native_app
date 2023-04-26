import Signin from "../components/signin/Signin";
import Signup from "../components/signin/Signup";
import {createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Homepage";
import Account from "../components/account/Account";
import Verification from "../components/signin/Verification";
import Cart from "../components/Cart";
import Thekedar from "../components/Thekedar";
import Movers from "../components/Movers";
import Preparecheckout from "../components/Preparecheckout";
import Delivery from "../components/Delivery";

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="account" component={Account}/>
        <Stack.Screen name="signup" component={Signup}/>
        <Stack.Screen name="cart" component={Cart}/>
        <Stack.Screen name="thekedar" component={Thekedar}/>
        <Stack.Screen name="movers" component={Movers}/>
        <Stack.Screen name="prepare" component={Preparecheckout} options={{headerShown:false}}/>
        <Stack.Screen name="delivery" component={Delivery}/>
        <Stack.Screen name="verification" component={Verification} options={{headerShown:false}}/>

      </Stack.Navigator>
  );
}
