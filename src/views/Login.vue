<template>
  <div>
    <div class="form">
      <app-header></app-header>
      <!-- <p class="smallMsg error">Incorrect user, you must register first</p> -->
      <div class="input-container">
        <input
          id="username"
          class="input"
          type="text"
          placeholder=" "
          v-model="user.username"
        />
        <label for="uname" class="placeholder">Username</label>
      </div>
      <div class="input-container">
        <input
          id="password"
          class="input"
          type="password"
          placeholder=" "
          v-model="user.password"
        />
        <label for="password" class="placeholder">Password</label>
      </div>
      <button type="text" class="submit" @click="login">Login</button>
      <p class="smallMsg">
        Don't have an account?
        <router-link to="/register"> Sign Up </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import { paths } from "./../router";
import userInfo from "./../common/user.js";
import * as guestBookAPI from "./../common/guestBookAPIs.js";

export default {
  name: "Login",
  components: {
    "app-header": Header,
  },
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
    };
  },
  created() {
    if (paths[paths.length - 2] == "/register") {
      let user = userInfo();
      //login automatically when user navigates from the registration page
      if (user) {
        this.user.username = user.username;
        this.user.password = user.password;
        this.login();
      }
    } else {
      this.user.username = null;
      this.user.password = null;
    }
  },
  methods: {
    login() {
      guestBookAPI
        .login(this.getLoginBody())
        .then(this.loginSuccess)
        .catch(this.requestFail);
    },
    getLoginBody() {
      return {
        username: this.user.username,
        password: this.user.password,
      };
    },
    loginSuccess(res) {
      console.log(res);
      //To access user's data in other pages
      localStorage.setItem("user", JSON.stringify(this.user));
      this.$router.push("/home");
    },
    requestFail(err) {
      console.log("error" + err);
    },
  },
};
</script>
<style scoped>
p {
  font-size: 15px;
}
/* p.error{
  color:red;
} */
</style>
