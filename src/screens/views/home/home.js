import React from 'react';

import { StyleSheet, Image, View  } from 'react-native'
import { Heading, Input, Icon, Stack, Button,Box, Link, Center, Text } from 'native-base'


//editores
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

// meus arquivos    
import inputs  from '../../../styles/inputs';
import core from '../../../../styles/core'
import buttons from '../../../styles/buttons';
import { useAuth } from '../../../contexts/auth';



export default function Home({ navigation }){

    const {logOut} = useAuth()

    return (
        <View style={styles.container}>
            <LinearGradient 
                
                colors={['#FFA95F', '#FF63A6', '#FCA9BD']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
            <Text>Bem vindo</Text>
            <View >
                <Animatable.Image
                    animation="bounceIn"
                    source={require('../assets/Group1.png')}
                    alt="Alternate Text"
                    style = {core.imgLogin}
                    onPress={()=> this.bounce}
                />
                <Text >Meu Portifolio</Text>
            </View>
            <Button
                colorScheme="primary"
                onPress={()=> logOut()}
            >
                sair
            </Button>
            
            
            <Button
                colorScheme="primary"
                onPress={() => navigation.navigate("Login")}
            
            >
                Ir para tela de login
            </Button>
            <Text mb="2" >Criado por {user.nome}</Text>
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
    }



  });