import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import ConversationsScreen from '../Screens/ConversationScreen/ConversationScreen'
import ChatScreen from '../Screens/ChatScreen/ChatScreen'
import TabNavigation from '../Navigations/TabNavigation'
import RankingScreen from '../Screens/RankingScreen/RankingScreen'
import JobScreen from '../Screens/JobScreen/JobScreen'
import JobsDescScreen from '../Screens/JobsDescScreen/JobsDescScreen'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import LoginScreen from '../Screens/LoginScreen/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen'
import EditAboutMeScreen from '../Screens/EditAboutMeScreen/EditAboutMeScreen'

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    
      <Stack.Navigator screenOptions={{
        headerShown: false,}}>

<Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Tab' component={TabNavigation}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Conversations' component={ConversationsScreen}/>
          <Stack.Screen name='Chat' component={ChatScreen}/>
          <Stack.Screen name='Ranking' component={RankingScreen}/>
          <Stack.Screen name='Jobs' component={JobScreen}/>
          <Stack.Screen name='JobsDesc' component={JobsDescScreen}/>
          <Stack.Screen name='Profile' component={ProfileScreen}/>

          <Stack.Screen name='Register' component={RegisterScreen}/>

          <Stack.Screen name='EditAboutMe' component={EditAboutMeScreen}/>

      </Stack.Navigator>
   
  )
}
