import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import WelcomePage from './screens/Welcomepage';
import Homescreen from './screens/HomeScreen'
import login from './screens/LoginScreen';
import signup from './screens/SignUpScreen';
import OrderScreen from './screens/OrderScreen';
import SushiScreen from './screens/SushiScreen';
import FufuScreen from './screens/fufuScreen';
import PizzaScreen from './screens/PizzaScreen';
import RiceScreen from './screens/RiceScreen';
import OrderTrackingScreen from './screens/OrderTrackingScreen';


const Stack = createStackNavigator();

function App() {
  return (
   
    <NavigationContainer  independent={true} >
    <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{headerShown:false,}  }>
        <Stack.Screen name="WelcomePage" component={WelcomePage}/>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={signup} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Sushi" component={SushiScreen} />
        <Stack.Screen name="Fufu" component={FufuScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Rice" component={RiceScreen} />
        <Stack.Screen name="OrderTracking" component={OrderTrackingScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
