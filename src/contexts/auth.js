import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

import axios from "axios"

const AuthContext = createContext({user: {}, token:'', login:()=>{}})

export const AuthProvider = (props) => {
    
    const [user,setUser] = useState(undefined)
    const [token,setToken] = useState('')

    async function login(data){
        return axios({
            url: "http://192.168.0.104:3000/login",
            method: "POST",
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then(async(response) => {
            await AsyncStorage.setItem("auth_token", response.data.token)
            await AsyncStorage.setItem("user", JSON.stringify(response.data.pessoa))
            setToken(response.data.token)
            setUser(response.data.pessoa)
            return Promise.resolve(response)
        }).catch((error) => {
            console.log(error)
            return Promise.reject(error)
        })
    }





    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            login
        }}>
            {props.children}
            
        </AuthContext.Provider>
    );
}

export const useAuth = () =>{
    const context =useContext(AuthContext)
    return context
}