import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigations/TabNavigation";

export default function App(){
  return (
    <NavigationContainer>
    <TabNavigation/>
  </NavigationContainer>
  );
}