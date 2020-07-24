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
