import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View } from 'react-native';
//react native

import { Box, NativeBaseProvider } from 'native-base'
//screens
import Login from './src/screens/Login'


//footer

import { StatusBar } from 'expo-status-bar';




export default function App() {
  return (
    <NativeBaseProvider>
      
        <Box style={{flex: 1}}>
          <Login/>
        </Box>

      
    </NativeBaseProvider>
    
  );
}



