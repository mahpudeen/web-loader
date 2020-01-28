import VueResource from 'vue-resource'
import Vue from 'vue'
import moment from 'moment'
import {getApiNoAuth} from '../utils'
import {getApiNoAuthLoginUser} from '../utils'

Vue.use(VueResource)

export default {
    getLogin(window, username, password){
        let ts = this.dateToString(new Date(), 'YYYYMMDDhhmmss')
        return getApiNoAuthLoginUser(username, password,ts)
        .post('/auth/ldap?username='+username+'&password='+password+'&ts='+ts)
 //       .get('DataUsers/findOne?filter=%7B%22where%22%3A%7B%22userLoginId%22%3A%22'+username+'%22%7D%7D')
        .then(function (response){
            console.log('adadasd')
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log('GAGAL')
            console.log(err)
        })
    },
    dateToString (dateValue, format, language) {
        language = language === undefined ? 'ID' : language
        moment.locale(language)
        // eslint-disable-next-line new-cap
        return new moment(dateValue).format(format)
      },
}