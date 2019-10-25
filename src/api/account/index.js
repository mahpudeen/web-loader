import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {

    getDataAccount(window){
        return getApiNoAuth()
        .get('Accounts')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    postAccount(userLoginId, fullname, position, role){
        return getApiNoAuth()
        .post('Accounts', {
                userLoginId: userLoginId,
                fullname: fullname,
                position: position,
                role: role
            })
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

    deleteAccount(userLoginId){
        return getApiNoAuth()
        .post('Accounts/deleteByName', {
            userLoginId: userLoginId,
        })
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
    
}