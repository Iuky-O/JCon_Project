import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import ConversationsScreen from '../Screens/ConversationScreen/ConversationScreen'
import ChatScreen from '../Screens/ChatScreen/ChatScreen'
import TabNavigation from '../Navigations/TabNavigation'
import RankingScreen from '../Screens/RankingScreen/RankingScreen'
import JobScreen from '../Screens/JobScreen/JobScreen'

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,}}>
        <Stack.Screen name='Tab' component={TabNavigation}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Conversations' component={ConversationsScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>
        <Stack.Screen name='Ranking' component={RankingScreen}/>
        <Stack.Screen name='Jobs' component={JobScreen}/>

    </Stack.Navigator>
  )
}
