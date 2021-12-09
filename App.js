import React from 'react';
import {View } from 'react-native';
import Providers from './src/navigation';
//react native base
import { NativeBaseProvider } from 'native-base'
//footer

import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Providers/> 
      </AuthProvider>  
    </NativeBaseProvider>
     
  );
}



