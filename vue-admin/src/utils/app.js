import cookie from 'cookie_js'

const TOKEN = 'token'
const USERNAME = 'username'

export function getToken() {
    return cookie.get(TOKEN)
}

export function setToken(token) {
    return cookie.set(TOKEN, token)
}

export function removeToken() {
    return cookie.remove(TOKEN)
}

export function getUsername() {
    return cookie.get(USERNAME)
}

export function setUsername(username) {
    return cookie.set(USERNAME, username)
}

export function removeUsername() {
    return cookie.remove(USERNAME)
}
