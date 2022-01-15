<template>
  <div id="app">
    <router-view v-bind="getProps"></router-view>
  </div>
</template>

<script>
import * as guestBookAPI from "./common/guestBookAPIs.js";

export default {
  name: "App",
  data() {
    return {
      users: null,
      messages: null,
    };
  },
  computed: {
    getProps() {
      return {
        users: this.users,
        messages: this.messages,
      };
    },
  },
  created() {
    this.getAllMessages();
    this.getAllUsers();
  },
  methods: {
    getAllMessages() {
      guestBookAPI.getMessages().then(this.getAllMessagesSuccess.bind(this));
    },
    getAllMessagesSuccess(res) {
      console.log(res);
      this.messages = res;
    },
    getAllUsers() {
      guestBookAPI.getUsers().then(this.getAllUsersSuccess.bind(this));
    },
    getAllUsersSuccess(res) {
      console.log(res);
      this.users = res;
    },
  },
};
</script>

<style>
body {
  font-family: Verdana;
  background: url("./assets/guest-book.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  color: #0a0a0b;
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
}
#app {
  text-align: center;
}

/* Set a style for all buttons */
button {
  background-color: rgb(183 138 91 / 91%);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.submit {
  width: 100% !important;
}
.form {
  background-color: #ffffffeb;
  border-radius: 20px;
  box-sizing: border-box;
  height: 50%;
  padding: 20px;
  width: 390px;
  box-shadow: 0 0 3px 3px #ffffff;
  margin: 2% 0;
}
.input-container {
  height: 50px;
  position: relative;
  width: 100%;
  margin-top: 25px;
}

.input {
  background-color: #d7d7d79c;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #282828;
  font-size: 18px;
  height: 90%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.input:focus,
.input:not(:placeholder-shown) {
  transform: translateY(8px);
}

.placeholder {
  color: #565656;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 15px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #565656;
}

.submit {
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  outline: 0;
  text-align: center;
  width: 100%;
}
</style>
