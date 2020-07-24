import axios from 'axios'
import {Message} from 'element-ui'

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'

const instance = axios.create({
    baseURL: BASEURL,
    timeout: 15000
})

instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    const data = response.data
    if (data.resCode !== 0) {
        Message.error(data.message)
        return Promise.reject(data)
    }else {
        return response
    }
}, function (error) {
    return Promise.reject(error)
})

export default instance
