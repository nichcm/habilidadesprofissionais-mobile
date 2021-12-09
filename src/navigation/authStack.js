import React from 'react';

import { View } from 'native-base';

//base
import { createNativeStackNavigator } from '../../node_modules/@react-navigation/native-stack';

//screens
import Login from '../screens/views/login/Login';
import SignUp from '../screens/views/signUP/signUp';
import Home from '../screens/views/home/home';


const Stack = createNativeStackNavigator();


const AuthStack = () => {

    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Home"
                component={Home}
                options = {{header: () => null}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options = {{header: () => null}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />

        </Stack.Navigator>
    );

}

export default AuthStack;