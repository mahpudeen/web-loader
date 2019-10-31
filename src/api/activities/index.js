import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    getActv(){
        return getApiNoAuth()
        .get('UserActivities')
        .then(function (response){
            return response.data
        }).catch(function(err){
            return err
        })
    },
    postUserAct(username,LoginUser,Actv){
        return getApiNoAuth()
        .post('UserActivities/addUserActivities', 
        {
            activityUserLoginId: LoginUser,
            activityTypeCode: Actv,
            menuCode: username
            }
        )
        .then(function (response){
            return response.data
        }).catch(function(err){
        return err
        })
    }
}