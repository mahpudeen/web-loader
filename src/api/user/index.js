import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {

    getDataUser(window){
        return getApiNoAuth()
        .get('users')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },


    postUser(username, email, password){
        return getApiNoAuth()
        .post('users', {
                realm: 'string',
                username: username,
                email: email,
                emailVerified: true,
                password: password
            })
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    deleteUser(id){
        return getApiNoAuth()
        .delete('users/'+id)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
    
}