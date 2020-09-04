const TOKEN_KEY = 'tokenbro'

export const isLoggedIn = () =>
    localStorage.getItem(TOKEN_KEY) ? true : false

export const login = () =>
    localStorage.setItem(TOKEN_KEY, 'brotoken')

export const logout = () =>
    localStorage.removeItem(TOKEN_KEY)