import React from 'react';

import { StyleSheet, Image, Text, View  } from 'react-native'
import { Heading, Input, Icon, Stack, Button,Box, Link, Center} from 'native-base'


//editores
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

// meus arquivos    
import inputs  from '../styles/inputs';
import core from '../styles/core'
import buttons from '../styles/buttons';



export default function Home({ navigation }){
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['#FFA95F', '#FF63A6', '#FCA9BD']}
                style={core.bgLogin}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >
            {/* <Animatable.Image
                animation="bounceIn"
                source={require('../assets/Group1.png')}
                alt="Alternate Text"
                style = {core.imgLogin}
                onPress={()=> this.bounce}
            /> */}
            <Text >Bem vindo ao Meu Portifolio</Text>
            <Button
                colorScheme="primary"
                onPress={() => navigation.navigate("Login")}
            
            >
                Ir para tela de login
            </Button>
            <Text>Criado por Nicolas</Text>
            </LinearGradient>
        </View>
    );
    
}



const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });