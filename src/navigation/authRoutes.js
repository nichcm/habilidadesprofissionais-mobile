import React from 'react';

import { View } from 'native-base';

//base
import { createNativeStackNavigator } from '../../node_modules/@react-navigation/native-stack';

import Home from '../screens/views/home/home';
import Admin from '../screens/views/admin/admin';

const Auth = createNativeStackNavigator();


const AuthRoutes = () => {

    return(
        <Auth.Navigator initialRouteName="Login">
            <Auth.Screen
                name="Home"
                component={Home}
                options = {{header: () => null}}
            />
            <Auth.Screen
                name="Admin"
                component={Admin}
            />
            

        </Auth.Navigator>
    );

}

export default AuthRoutes;