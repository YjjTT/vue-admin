/**
 * 过滤特殊字符
 * @param s
 * @returns {string}
 */
export function stripscript(s) {
    const pattern = new RegExp("[`~!@#$^&*()=|{ }':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]")
    let rs = ""
    for (let i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

/**
 * 验证邮箱
 * @param value
 * @returns {boolean}
 */
export function validateEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value);
}

/**
 * 验证密码
 * @param value
 * @returns {boolean}
 */
export function validatePasswords(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return !reg.test(value)
}

/**
 * 验证验证码
 * @param value
 * @returns {boolean}
 */
export function validateCodes(value) {
    let reg = /^[a-z0-9]{6}$/
    return !reg.test(value)
}
