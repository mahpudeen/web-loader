import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils'

Vue.use(VueResource)

export default {
    saveHistory(window, uploader, files){

        let param = {
            uploader : uploader,
            files : files
        }

        console.log(param)
        return getApiNoAuth()
        .post('http://localhost:3000/api/Histories', {
            uploader : 'uploader',
            files : 'files'
          })
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}