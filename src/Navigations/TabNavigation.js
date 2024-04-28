import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** Icones do expo */
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

/** Importação de telas */
=======

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

>>>>>>> 2d1526a70fd7670d20811b8ab002428508821a2b
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import JobScreen from '../Screens/JobScreen/JobScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ConversationScreen from '../Screens/ConversationScreen/ConversationScreen';
import RankingScreen from '../Screens/RankingScreen/RankingScreen';
<<<<<<< HEAD
import Colors from '../Utils/Colors';
=======
>>>>>>> 2d1526a70fd7670d20811b8ab002428508821a2b

const Tab = createBottomTabNavigator();

export default function TabNavigation(){
    return(
<<<<<<< HEAD
 
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.AZUL_MARINHO,
                tabBarActiveBackgroundColor: Colors.AZUL_PACIFICO,
                tabBarStyle:{backgroundColor: Colors.AZURE},
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
=======

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Job" component={JobScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Conversation" component={ConversationScreen}/>
            <Tab.Screen name="Ranking" component={RankingScreen}/>
        </Tab.Navigator>

    )
}
>>>>>>> 2d1526a70fd7670d20811b8ab002428508821a2b
