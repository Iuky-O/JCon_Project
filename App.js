import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/Navigations/StackNavigation"
import { UserProvider } from "./src/Scripts/UserContext";


export default function App(){

  return (
    <UserProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </UserProvider>
  );

}
