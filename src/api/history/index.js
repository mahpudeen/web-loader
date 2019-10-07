import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    saveHistory(window, uploader, files, category){

        return getApiNoAuth()
        .post('http://localhost:80/api/Histories', {
            uploader : uploader,
            files : files,
            category : category
          })
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },


    getHistory(window){
        return getApiNoAuth()
        .get('Histories')
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}