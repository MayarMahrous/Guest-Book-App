<template>
  <div class="container">
    <div class="card" v-for="(msg, index) in messages" :key="index">
      <div class="card-header">
        <div v-if="msg.name == getUsername">
          <span class="fas fa-edit edit" @click="openEdit(msg)"></span>
          <span class="close" @click="deleteMsg(msg.id)">&times;</span>
        </div>
      </div>
      <div class="card-body">
        <p><span>&#8220;</span>{{ msg.message }}<span>&#8221;</span></p>
        <span class="tag">{{ msg.name }}</span>
      </div>
      <div v-if="msg.name != getUsername">
        <Comments :msg="msg" :addComment="addComment" />
      </div>
    </div>
  </div>
</template>
<script>
import Comments from "./Comments";
import userInfo from "./../common/user.js";

export default {
  name: "MessageContainer",
  components: {
    Comments: Comments,
  },
   computed:{
    getUsername(){
      return userInfo().username
    }
  },
  props: {
    messages: Array,
    openEdit: Function,
    deleteMsg: Function,
    addComment: Function,
  },
};
</script>
<style scoped>
.edit {
  float: left;
  padding: 10px;
}
.edit:hover {
  color: #aaaaaa;
}

.close {
  color: #aaaaaa;
  float: right;
  padding: 10px;
  font-weight: 900;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.container {
  display: flex;
  width: auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fffffff5;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 50%;
}
.card-body {
  padding: 10px;
  margin-top: 5px;
}

.tag {
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  padding: 5px 20px;
  text-transform: uppercase;
  float: right;
  margin-right: 10px;
}

.card-body p {
  font-size: 13px;
  margin: 10px;
}
</style>