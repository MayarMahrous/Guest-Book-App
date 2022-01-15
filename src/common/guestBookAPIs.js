import endpoints from './servicesEndpoint'

const headers = {
  'Content-Type': 'application/json'
}

export const register = (body) =>
  fetch(endpoints.register, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      ...headers
    }
  }).then(res => res.json())
    .then(data => data)


export const login = (body) =>
  fetch(endpoints.login, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(data => data)


export const getUsers = () =>
  fetch(endpoints.users)
    .then(res => res.json())
    .then(data => data)


export const getMessages = () =>
  fetch(endpoints.messages)
    .then(res => res.json())
    .then(data => data)

export const getUserMessages = () =>
  fetch(endpoints.userMessages)
    .then(res => res.json())
    .then(data => data)

export const deleteMessage = (id) =>
  fetch(`${endpoints.userMessages}/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())
    .then(data => data)

export const addMessage = (body) =>
  fetch(endpoints.messages, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(data => data)

export const addUserMessage = (body) =>
  fetch(endpoints.userMessages, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
    .then(data => data)