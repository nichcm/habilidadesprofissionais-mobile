import react from "react";
import { StyleSheet  } from 'react-native'

const inputs = StyleSheet.create({
    inputLaranja: {
        width: 300,
        height: 58,
        paddingLeft:8,
        paddingBottom:4,
        borderRadius: 15,
        backgroundColor: '#ffff',
        marginBottom:15,
        borderColor:"#FFA95F",
        shadowColor: "#FFA95F",
        borderWidth:1,
        borderBottomWidth:5,
        borderBottomColor: "#FFA95F99",
        marginBottom:22,


        // shadowOffset: {
        //     width: 5,
        //     height: 5,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 6,

        // elevation: 5, 
        },
    inputSenha: {
        width: 250,
        height: 58,
        paddingBottom:4,
        paddingLeft:8,
        
        backgroundColor: '#ffff',
        marginBottom:15,
        borderColor:"#FFA95F",
        shadowColor: "#FFA95F",
        borderWidth:1,
        borderBottomWidth:5,
        borderBottomColor: "#FFA95F99",
        borderRightColor:"#ffff",
        borderBottomLeftRadius: 15,
        marginBottom:22,
        borderTopLeftRadius: 15,
    },  
    
    inputRosa:{
        width: 200,
        height: 54,
        borderRadius: 15,
        backgroundColor: '#ffff',
        marginBottom:22,
        
        // shadowColor: "#FF63A6",
        // shadowOffset: {
        //     width: 6,
        //     height: 13,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 6,

        // elevation: 22,
        },
});

export default inputs