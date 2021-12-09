
import axios from "axios"

class UsuarioService{

    async login(data){
        return axios({
            url: "http://192.168.0.104:3000/login",
            method: "POST",
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then(async(response) => {
            await AsyncStorage.setItem("auth_token", response.data.token)
            await AsyncStorage.setItem
            return Promise.resolve(response)
        }).catch((error) => {
            console.log(error)
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService
