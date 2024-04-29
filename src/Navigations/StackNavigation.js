import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}