/* eslint-disable no-console */
import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    postUser(username, email){
        return getApiNoAuth()
        .post('kusers/addUser', {
                username: username,
                email: email
            })
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    deleteUser(username){
        return getApiNoAuth()
        .post('kusers/deleteByName', {
            username: username,
         })
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    findLdapUser(searchUser){
        return getApiNoAuth()
        .get('ldaps/getUsersLDAP?name='+searchUser)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }


    
}