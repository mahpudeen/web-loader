import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getLogin(window, username, password){
        return getApiNoAuth()
        .get('DataUsers/findOne?filter=%7B%22where%22%3A%7B%22userLoginId%22%3A%22'+username+'%22%7D%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){ss
            console.log(err)
        })
    }
}