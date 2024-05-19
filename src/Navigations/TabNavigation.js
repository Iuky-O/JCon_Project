import React, { useContext } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import JobScreen from '../Screens/JobScreen/JobScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ConversationScreen from '../Screens/ConversationScreen/ConversationScreen';
import RankingScreen from '../Screens/RankingScreen/RankingScreen';
import PesqScreen from '../Screens/PesqScreen/PesqScreen'
import Colors from '../Utils/Colors';
import { UserContext } from '../Scripts/UserContext';

const Tab = createBottomTabNavigator();

export default function TabNavigation(){
    const {userData} = useContext(UserContext);
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
                          tabBarIcon:()=>(
                            <Image source={require('../../assets/images/icon-home.png')} style={{height: 20, width: 20}}/>
                          ),
                    }}
                />
                {userData?.TypeUser === 'contratante' ? ( 
                    <Tab.Screen  name="Pesq" component={PesqScreen}
                        options={{
                            tabBarLabel:()=>(
                                <Text style={Styles.Label}> Busca </Text>
                            ),
                            tabBarIcon:()=>(
                                <Image source={require('../../assets/images/icon-procurar.png')} style={{height: 20, width: 20}}/>
                            )
                        }}
                    />
                ) : (
                   <Tab.Screen  name="Job" component={JobScreen}
                        options={{
                            tabBarLabel:()=>(
                                <Text style={Styles.Label}> Jobs </Text>
                            ),
                            tabBarIcon:()=>(
                                <Image source={require('../../assets/images/icon-work.png')} style={{height: 20, width: 20}}/>
                            )
                        }}
                    /> 
                )}

                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Perfil </Text>
                          ),
                          tabBarIcon:()=>(
                            <Image source={require('../../assets/images/icon-user.png')} style={{height: 20, width: 20}}/>
                          )
                    }}
                />

                <Tab.Screen name="Conversation" component={ConversationScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Chats </Text>
                          ),
                          tabBarIcon:()=>(
                            <Image source={require('../../assets/images/icon-chat.png')} style={{height: 20, width: 20}}/>
                          )
                    }}
                />

                <Tab.Screen name="Ranking" component={RankingScreen}
                    options={{
                        tabBarLabel:()=>(
                            <Text style={Styles.Label}> Ranking </Text>
                          ),
                          tabBarIcon:()=>(
                            <Image source={require('../../assets/images/icon-ranking.png')} style={{height: 20, width: 20}}/>
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
