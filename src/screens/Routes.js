import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

//screen 
import Splash from './Splash';
import Calc from './Calc';

//color
import Colors from '../constant/index';

const Stack = createStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <StatusBar 
      barStyle='dark-content'
      backgroundColor={Colors.primary} translucent = {true} />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name= 'Calc' component={Calc} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}