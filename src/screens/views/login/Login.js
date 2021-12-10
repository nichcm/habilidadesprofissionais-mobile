import React from 'react';

import { StyleSheet, Image, TextInput  } from 'react-native'
import { Heading, Input, Icon, Stack, Button,Box, Link, View} from 'native-base'

import { SafeAreaView} from 'react-native-safe-area-context'
import { MaterialIcons } from "@expo/vector-icons"

//editores
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';



// meus arquivos    
import inputs  from '../../../styles/inputs';
import core from '../../../styles/core'
import buttons from '../../../styles/buttons';
import { useAuth } from '../../../contexts/auth';

export default function Login({ navigation }){
    const [show, setShow] = React.useState(false)
    const [email, setEmail] = React.useState("");
    const [psw, setPsw] = React.useState("");   

    const {login} = useAuth();

    const entrar = async (event) =>{
        let data ={
            email: email,
            senha: psw
        }
        try {
            const response = await login(data)

        
        } catch (error) {
            console.log(error)
            alert('senha ou email errado')
        }
        
        

    }

    const handleClick = () => setShow(!show)
    return (
        <View style={core.bgLogin}>
            <LinearGradient 
                colors={['#FFA95F', '#FF63A6', '#FCA9BD']}
                style={core.bgLogin}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >           
                <Stack space={4} w="100%" alignItems="center">
                    <Box safeArea alignItems="center" mt="81">
                        <Animatable.Image
                            animation="bounceIn"
                            source={require('../../../assets/Group1.png')}
                            alt="Alternate Text"
                            style = {core.imgLogin}
                            onPress={()=> this.bounce}
                        />
                        <Heading
                            mt="22"
                            size="lg"
                            fontWeight="600"
                            color="light.100"
                            _dark={{
                            color: "warmGray.50",
                            }}>
                            Meu Portifolio
                        </Heading>
                        
                    </Box>
                            
                    <Box safeArea maxW="80">
                        <TextInput
                            onChangeText={value => setEmail(value)}
                            style={inputs.inputLaranja} 
                            placeholder="e-mail" 
                            numberOfLines={1}


                        />
                        <Stack direction="row">
                            <TextInput
                                style={inputs.inputSenha} placeholder="senha"  
                                type={show ? "text" : "password"}
                                onChangeText={value => setPsw(value)}
                            />
                            <Button  style={buttons.iconesLaranja} onPress={handleClick}>
                                <Icon
                                        as={<MaterialIcons name="visibility-off" />}
                                        size={5}
                                        mr="2"
                                        color="muted.400"
                                    />
                            </Button>
                        </Stack>
                        
                        

                        
                        <Stack  direction="row" alignItems="center" space="2">
                            <Link  onPress={()=>{ navigation.navigate('SignUp')}}>Cadastre-se aqui!</Link>
                            <Button
                            colorScheme="indigo"
                            onPress={()=> entrar()}
                            >
                            entrar
                        </Button>
                        </Stack>
                        
                        
                        
                    </Box>
                </Stack>
            </LinearGradient>
        </View>    

        
            
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
