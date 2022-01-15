# guest-book
It is a simple project that allows user to interact with guest books.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # Vue Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── main.js # This is where you initialize the root component into a element on html page. 
    ├── App.vue # This is the root of your app.
    ├── assets # Helpful images for your app. Use at your discretion.
    │   ├── guest-book.png
    │   ├── logo.png
    │   └── user-icon.png
    ├── common 
    │   ├── config.js # This is where you set the base URL of your APIs.
    │   ├── guestBookAPIs.js # A JavaScript API for the backend. Instructions for the methods are below..
    │   ├── user.js # This holds data of the logged in user.
	│	└── servicesEndpoint.js # This contains url of each API service in your app.
    ├── router 
    │   └── config.js # This holds all the routes of your application.
    ├── views 
    │   ├── Login.vue # This contains the template and script of login form.
    │   ├── Register.vue # This contains the template and script of register form.
	│	└── Home.vue # This contains the template and script of home page that contains messages functionality.
    ├── components 
        ├── Comments.vue # This contains comment component of each message.
        ├── Header.vue # This contains header component that is shown in login form.
	 	├── MessageContainer.vue # This is the message component that exists in home page.
		└── MessageModal.js # This is a modal where the user can create new message.
	
```


## Backend Server
The provided file [`guestBookAPIs.js`](src/common/guestBookAPIs.js) contains the methods you will need to perform necessary operations on the backend:

* [`register`](#register)
* [`login`](#login)
* [`getUsers`](#getUsers)
* [`getMessages`](#getMessages)
* [`getUserMessages`](#getUserMessages)
* [`deleteMessage`](#deleteMessage)
* [`addMessage`](#addMessage)
* [`addUserMessage`](#addUserMessage)


### `register`

Method Signature:

```js
register(body)
```

* body: `<Object>` containing data of reigstered user
* Returns a Promise which resolves to a JSON object containing user's data

### `login`

Method Signature:

```js
login(body)
```

* body: `<Object>` containing user login credentials
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `getUsers`

Method Signature:

```js
getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of user objects

### `getMessages`

Method Signature:

```js
getMessages()
```

* Returns a Promise which resolves to a JSON object containing a collection of messages.

### `getUserMessages`

Method Signature:

```js
getUserMessages()
```

* Returns a Promise which resolves to a JSON object containing a collection of users' messages.

### `deleteMessage`

Method Signature:

```js
deleteMessage(id)
```
* id: `<String>`
* Returns a Promise which resolves to a JSON object containing the data of deleted message.

### `addMessage`

Method Signature:

```js
addMessage(body)
```
* body: `<Object>` containing data of new message content
* Returns a Promise which resolves to a JSON object containing the data of new message.

### `addUserMessage`

Method Signature:

```js
addUserMessage(body)
```
* body: `<Object>` containing the new message'id and user's id.
* Returns a Promise which resolves to a JSON object containing the data of new message.

## Important
The backend API is a fake API that uses dummy data from the following url https://fakestoreapi.com/docs to test the functionality of the application. It will not add or delete data.