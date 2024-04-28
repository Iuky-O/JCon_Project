import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import JobScreen from '../Screens/JobScreen/JobScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import ConversationScreen from '../Screens/ConversationScreen/ConversationScreen';
import RankingScreen from '../Screens/RankingScreen/RankingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation(){
    return(

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Job" component={JobScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Conversation" component={ConversationScreen}/>
            <Tab.Screen name="Ranking" component={RankingScreen}/>
        </Tab.Navigator>

    )
}