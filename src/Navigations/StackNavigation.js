import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

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
import CreateJobsScreen from '../Screens/CreateJobsScreen/CreateJobsScreen'
import ExteProfileScreen from '../Screens/ExteProfileScreen/ExterProfileScreen'
import Colors from '../Utils/Colors'

const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    
      <Stack.Navigator initialRouteName="Tab"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.MALTE, 
        },
        headerTintColor: Colors.BRANCO, 
        animationEnabled: true, 
        animationTypeForReplace: 'push', 
      }}>
          <Stack.Screen name='Tab' component={TabNavigation} 
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')} 
                style={{ marginRight: 15 }}>
                <Image source={require('../../assets/images/logo-azul-claro.jpg')} style={styles.imageLogo}/>
              </TouchableOpacity>
            ),
            headerTintColor: Colors.MALTE
          })}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Conversations' component={ConversationsScreen} options={{ headerTitle: 'Conversas' }}/>
          <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Ranking' component={RankingScreen}/>
          <Stack.Screen name='Jobs' component={JobScreen} options={{ headerTitle: 'Vagas' }}/>
          <Stack.Screen name='JobsDesc' component={JobsDescScreen} options={{ headerTitle: 'Descrição da Vaga' }}/>
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerTitle: 'Perfil' }}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>

          <Stack.Screen name='EditAboutMe' component={EditAboutMeScreen} options={{ headerTitle: 'Sobre mim' }}/>
          <Stack.Screen name='ExteProfile' component={ExteProfileScreen} options={{ headerTitle: 'Perfil' }}/>
          <Stack.Screen name='CreateJobs' component={CreateJobsScreen} options={{ headerTitle: 'Crie uma vaga' }}/>

      </Stack.Navigator>
  
  )
}

const styles = StyleSheet.create({
  imageLogo:{
    height: 50,
    width: 50, 
  }
})