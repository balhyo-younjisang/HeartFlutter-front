import "react-native-gesture-handler"; // for handling to gesture 
import React, { useCallback, useState, useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
// import { Provider } from "react-redux"; // use redux
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import JoinScreen from "./pages/JoinScreen";
import ShopScreen from "./pages/ShopScreen";
import Settingscreen from "./pages/Settingscreen";

const Stack = createStackNavigator(); // create stack nav

export default function App() {
  const [fontsLoaded] = useFonts({
    'SUITE-Bold': require("./assets/font/SUITE-Bold.ttf"),
    "SUITE-Regular": require("./assets/font/SUITE-Regular.ttf"),
    "GreatVibes-Regular": require("./assets/font/GreatVibes-Regular.otf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Join" component={JoinScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="Setting" component={Settingscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
