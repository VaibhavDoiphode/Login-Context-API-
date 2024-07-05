import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DataScreen from '../Screens/DataScreen';
const Stack = createNativeStackNavigator();

const RootScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Data" component={DataScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootScreen