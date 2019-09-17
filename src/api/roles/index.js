import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {

      getDataRoles(window){
        return getApiNoAuth()
        .get('http://localhost:3000/api/Roles?filter=%7B%22include%22%3A%22employee%22%7D')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    
}