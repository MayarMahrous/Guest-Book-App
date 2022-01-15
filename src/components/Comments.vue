<template>
  <div>
    <div class="comment" v-for="(comment, index) in msg.comments" :key="index">
      <div class="comment-box">
        <div class="commentDetails">
          <span class="commenter-pic">
            <img src="../assets/user-icon.png" class="img-fluid" />
          </span>
          <span class="commenter-name">
            <span class="name" v-text="getUsername"></span>
            <span class="comment-time" v-text="getCurrentTime"></span>
          </span>
        </div>
        <p class="comment-txt more">{{ comment }}</p>
      </div>
      <!-- <p v-for="(comment, index) in msg.comments" :key="index">{{ comment }}</p> -->
    </div>
    <textarea
      type="text"
      class="input"
      placeholder="Write a comment"
      v-model="getComment"
    ></textarea>
    <button v-on:click="checkComment" type="submit">Add Comment</button>
  </div>
</template>
<script>
import userInfo from "./../common/user.js";
export default {
  name: "Comment",
  computed: {
    getComment: {
      get: function () {
        return null;
      },
      set: function (comment) {
        this.newComment = comment;
      },
    },
    getUsername() {
      return userInfo().username;
    },
    getCurrentTime(){
       let currentTime = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
       return currentTime;
    }
  },
  props: {
    msg: Object,
    addComment: Function,
  },
  data() {
    return {
      newComment: null,
    };
  },
  methods: {
    checkComment() {
      if (this.newComment) {
        this.addComment(this.msg, this.newComment);
        this.newComment = null;
      }
    },
  },
};
</script>
<style scoped>
.commentDetails {
  display: flex;
  justify-content: left;
}
.container textarea {
  width: 90%;
  background: #e8e8e8;
  padding: 5px 10px;
  height: 50%;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid #9c9c9c;
  transition: all 0.5s;
  margin-top: 15px;
  font-size: 15px;
}
button {
  float: right;
  margin-right: 40px;
}

.comment-box {
  height: 100%;
  background-color: #bdbdbd40;
  padding: 10px 10px 10px;
  margin: 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.commenter-pic {
  display: inline-block;
  border-radius: 100%;
  border: 2px solid #fff;
  overflow: hidden;
  background-color: #fff;
  width: 37px;
  height: 40px;
}
.commenter-name {
  margin: 10px;
  font-size: 12px;
}

p.comment-txt {
  font-size: 12px;
  padding: 0px 0px 15px;
  text-align: left;
  margin: 0 0 0 60px;
}
span.name {
  text-decoration: underline;
  font-weight: bold;
}
.comment-time{
  margin-left: 5px;
}
</style>