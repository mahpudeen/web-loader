import axios from 'axios'

const API_URL = 'https://exist.ojk.go.id/api/';
const API_LOGIN ='https://exist.ojk.go.id/'
export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': 'https://exist.ojk.go.id',
            'COntent-Type': 'application/json'
        }
    })
}

export function getApiNoAuthLoginUser(username, password,ts){
    let params = {
        username: '',
        password: ''
      }
    params.username = username;
    params.password = password;
    params.ts = ts;

    return axios.create(
        {
            baseURL: API_LOGIN,
            timeout: 1000000,
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'COntent-Type': 'application/json'
            },
            body:params,
            param:params,
        }
    )
}

export function getApi(token, params){
    if(params){ params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL: API_URL,
        timeout: 100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}
