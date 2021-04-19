import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView } from 'react-native';
import Books from "./app/Screens/Books";
import MainScreen from "./app/Screens/MainScreen";
import Deeds from "./app/Screens/Deeds";
import Navigator from "./app/routes/homeStack";

// console.log() - used as effectively print statement to debug code
// only use in development
export default function App() {
  
  return (
    <Navigator />
  );
      
}

 

