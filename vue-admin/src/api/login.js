import instance from '@/utils/request'

/**
 * 获取验证码
 * @constructor
 */
export function GetSms(data) {
    return instance.request({
        method: 'POST',
        url: '/getSms/',
        data
    })
}

export function Register(data) {
    return instance.request({
        method: 'POST',
        url: '/register/',
        data
    })
}

export function Login(data) {
    return instance.request({
        method: 'POST',
        url: '/login/',
        data
    })
}
