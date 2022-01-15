import { baseURL } from './config.js'

const endpoints = {
    login: `${baseURL}/auth/login`,
    register: `${baseURL}/users`,
    users: `${baseURL}/users`,
    messages: `${baseURL}/products`,
    userMessages: `${baseURL}/carts`,
}

export default endpoints;



