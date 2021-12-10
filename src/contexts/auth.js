import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"

import axios from "axios"


const AuthContext = createContext({
    user: {},
    token:'',
    login:()=>{},
    logOut:()=>{},
    pegaHabilidadesPessoa: ()=>{},
    habilidade: []
})

export const AuthProvider = (props) => {
    
    const [user,setUser] = useState(undefined)
    const [token,setToken] = useState('')
    const [habilidade, setHabilidade] = useState([])

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
        });
    }
    async function logOut(){
        return(
            setUser(null),
            setToken(null),
            await AsyncStorage.clear()
        );   
    }

    async function pegaHabilidadesPessoa(id, token){
        var config = {headers: {'Authorization': 'Bearer ' + token}}
        return (
            
            await axios.get(`http://192.168.0.104:3000/api/niveis/pessoas/${id}`,config)
            .then(response => {
                setHabilidade(response.data)
            })
        );      
    }

    

    


    return(

        <AuthContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            login,
            logOut,
            pegaHabilidadesPessoa,
            habilidade,
            isLogged: Boolean(user)
        }}>
            {props.children}
            
        </AuthContext.Provider>
    );
}

export const useAuth = () =>{
    const context =useContext(AuthContext)
    return context
}