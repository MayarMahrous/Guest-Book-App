<template>
  <div>
    <div class="form">
      <div class="input-container">
        <input
          class="input"
          type="text"
          placeholder=" "
          v-model="user.name.firstname"
        />
        <label for="fname" class="placeholder">First Name</label>
      </div>
      <div class="input-container">
        <input
          class="input"
          type="text"
          placeholder=" "
          v-model="user.name.lastname"
        />
        <label for="lname" class="placeholder">Last Name</label>
      </div>
      <div class="input-container">
        <input
          class="input"
          type="text"
          placeholder=" "
          v-model="user.username"
        />
        <label for="unname" class="placeholder">User Name</label>
      </div>
      <div class="input-container">
        <input
          class="input"
          type="password"
          placeholder=" "
          v-model="user.password"
        />
        <label for="password" class="placeholder">Password</label>
      </div>
      <div class="input-container">
        <input class="input" type="text" placeholder=" " v-model="user.email" />
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container">
        <input
          class="input"
          type="text"
          placeholder=" "
          v-model="user.mobile"
        />
        <label for="mobile" class="placeholder">Mobile Number</label>
      </div>
      <button class="submit" type="button" @click="register">Sign Up</button>
    </div>
  </div>
</template>

<script>
import * as guestBookAPI from "./../common/guestBookAPIs.js";

export default {
  name: "SignUp",
  data() {
    return {
      user: {
        name: {
          firstname: null,
          lastname: null,
        },
        username: null,
        password: null,
        email: null,
        mobile: null,
      },
    };
  },
  created() {
    localStorage.removeItem("user");
  },
  methods: {
    register() {
      guestBookAPI
        .register(this.getRegisterBody.bind(this)())
        .then(this.registerSuccess.bind(this))
        .catch(this.requestFail.bind(this));
    },
    getRegisterBody() {
      return {
        email: this.user.email,
        username: this.user.username,
        password: this.user.password,
        name: this.user.name,
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: this.user.mobile,
      };
    },
    registerSuccess(res) {
      console.log(res);
      let user = JSON.stringify(res);
      localStorage.setItem("user", user);
      this.$router.push("/login");
    },
    requestFail(err) {
      console.log("error" + err);
    },
  },
};
</script>

<style scoped>
</style>
