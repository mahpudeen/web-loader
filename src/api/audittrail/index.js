import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getAuditTrail(window){
        return getApiNoAuth()
        .get('AuditTrails')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}