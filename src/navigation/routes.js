import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./authStack";
import AuthRoutes from './authRoutes';

import { useAuth } from '../contexts/auth';


const Routes = () => {

    const {isLogged} = useAuth();
    
    return(
        <NavigationContainer>
            {
                isLogged ? <AuthRoutes/> : <AuthStack/>
            }
            
        </NavigationContainer>
    );
}

export default Routes;