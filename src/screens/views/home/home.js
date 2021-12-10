import React from 'react';
import { StyleSheet, Image, View  } from 'react-native'
import { FlatList,Heading, Input, Icon, Stack, Button,Box, Link, Center, Text } from 'native-base'

import AsyncStorage from "@react-native-async-storage/async-storage"

//editores
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

// meus arquivos    
import inputs  from '../../../styles/inputs';
import core from '../../../styles/core'
import buttons from '../../../styles/buttons';
import { useAuth } from '../../../contexts/auth';
import axios from 'axios';


export default function Home({ navigation }){

    const {user, logOut, token, pegaHabilidadesPessoa, habilidade} = useAuth()

    
    React.useEffect(()=>{
        pegaHabilidadesPessoa(user.id,token)
    },[])

    return (
        <View style={styles.container} >
            <LinearGradient 
                
                colors={['#FFA95F', '#FF63A6', '#FCA9BD']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <View >
                <Text>Bem vindo</Text>
                <Text mb="2" >Criado por {user.name}</Text>
                <View >
                    <Animatable.Image
                        animation="bounceIn"
                        source={require('../../../assets/Group1.png')}
                        alt="Alternate Text"
                        style = {core.imgLogin}
                        onPress={()=> this.bounce}
                />
                <Text >Meu Portifolio</Text>
                </View>
            </View>

            <View style={styles.table}>
                {habilidade.map(form => {
                    return (
                        <View style={styles.linha}>
                            <Text  fontSize="xs">{form.titulo}</Text>
                            <Text  fontSize="xs">{form.nivel}</Text>
                            <Text  fontSize="xs">{form.experiencia}</Text>
                            
                        </View>
                        
                    )
                })}

            </View>
            
                            
            <Button
                style={styles.button}
                colorScheme="primary"
                onPress={()=> logOut()}
            >
                sair
            </Button>
            
           
             
           
            
            </LinearGradient>
        </View>
    );
    
}



const styles = StyleSheet.create({

    container: {
      flex: 1,
 
      justifyContent: 'center',
    },
    gradient:{
        flex:1,
    },
    table: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        backgroundColor: '#FFA95F',
        borderRadius: 15,
        marginBottom:15,
        borderColor:"#FFA95F",
        padding: 22
    },
    button:{
        bottom: 10,
        width: '100%',
        position: 'absolute'
    }


  });