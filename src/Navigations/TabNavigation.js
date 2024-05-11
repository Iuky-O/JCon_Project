import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** Icones do expo */
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

/** Importação de telas */
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CreateJobsScreen from '../Screens/CreateJobsScreen/CreateJobsScreen';
import JobScreen from '../Screens/JobScreen/JobScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ConversationScreen from '../Screens/ConversationScreen/ConversationScreen';
import RankingScreen from '../Screens/RankingScreen/RankingScreen';
import Colors from '../Utils/Colors';

/** isso tira a letra: tabBarShowLabel: false, */
const Tab = createBottomTabNavigator();

export default function TabNavigation(){
    return(
        
            <Tab.Navigator  screenOptions={{
                headerShown: false,
                
                tabBarActiveTintColor: Colors.AZUL_PACIFICO,
                tabBarInactiveTintColor: Colors.BRANCO,
                tabBarActiveBackgroundColor: Colors.AZUL_PACIFICO,
                tabBarStyle:{
                    backgroundColor: Colors.AZURE,  
                },
            }}>

                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Home </Text>
                          ),
                          tabBarIcon:({size})=>(
                            <Entypo name="home" size={size} color={Colors.BRANCO}/>
                          )
                    }}
                />

                <Tab.Screen name="Job" component={JobScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Jobs </Text>
                          ),
                          tabBarIcon:({size})=>(
                            <MaterialIcons name="work" size={size} color={Colors.BRANCO}/>
                          )
                    }}
                />

                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Profile </Text>
                          ),
                          tabBarIcon:({size})=>(
                            <FontAwesome6 name="user-large" size={size} color={Colors.BRANCO}/>
                          )
                    }}
                />

                <Tab.Screen name="Conversation" component={ConversationScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Chats </Text>
                          ),
                          tabBarIcon:({size})=>(
                            <Ionicons name="logo-wechat" size={size} color={Colors.BRANCO}/>
                          )
                    }}
                />

                <Tab.Screen name="Ranking" component={RankingScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Ranking </Text>
                          ),
                          tabBarIcon:({size})=>(
                            <Ionicons name="podium" size={size} color={Colors.BRANCO}/>
                          )
                    }}
                />

            </Tab.Navigator>
    
    )
}

const Styles = StyleSheet.create({
    Label:{
        color: Colors.BRANCO, 
        fontSize: 12, 
        marginTop: -7,
    },

})
