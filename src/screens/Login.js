import React from 'react';

import { StyleSheet, Image  } from 'react-native'
import { Heading, Input, Icon, Stack, Button,Box, Link, View} from 'native-base'

import { SafeAreaView} from 'react-native-safe-area-context'
import { MaterialIcons } from "@expo/vector-icons"

import { LinearGradient } from 'expo-linear-gradient';

import inputs  from '../styles/inputs';
import core from '../styles/core'

export default function Login(){
    const [show, setShow] = React.useState(false)

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
                        <Image
                            source={require('../assets/Group1.png')}
                            alt="Alternate Text"
                            style = {core.imgLogin}
                        />
                        <Heading
                            mt=""
                            size="lg"
                            fontWeight="600"
                            color="light.100"
                            _dark={{
                            color: "warmGray.50",
                            }}>
                            Meu Portifolio
                        </Heading>
                        
                    </Box>
                            
                    <Box safeArea >
                        <Input style={inputs.inputLaranja} placeholder="e-mail"  />
                        <Input style={inputs.inputLaranja} placeholder="senha"  />
                        <Input 
                            mb="29"
                            w={{
                                base: "75%",
                                md: "25%",
                            }}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                            placeholder="E-mail"
                        />
                        <Input
                        
                        mb="36"
                        type={show ? "text" : "password"}
                        w={{
                            base: "75%",
                            md: "25%",
                        }}
                        InputRightElement={
                            <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                            <Icon
                                    as={<MaterialIcons name="visibility-off" />}
                                    size={5}
                                    mr="2"
                                    color="muted.400"
                            />
                            </Button>
                        }
                        placeholder="Senha"
                        />
                        <Stack  direction="row" alignItems="center" space="2">
                            <Link  href="">Cadastre-se aqui!</Link>
                            <Button
                            colorScheme="indigo"
                            onPress={()=>{
                                console.log('cadastrar novo usuario')
                            }}
                        
                        >
                            Novo Usuário? 
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
