import React from 'react';

import { StyleSheet, Image  } from 'react-native'
import { Heading, Input, Icon, Stack, Button,Box, Link, Text, View} from 'native-base'




export default function SignUp({ navigation }){
    return (        
    <View>
        <Text  fontSize="xs">SignUp</Text>

        <View>
            <Heading> digite o seu nome</Heading>
            <Input placeholder="Default Input"  />
            <Heading> digite o seu nome</Heading>
            <Input placeholder="Default Input"  />
            <Heading> digite o seu nome</Heading>
            <Input placeholder="Default Input"  />



        </View>

    </View>
    );
}

