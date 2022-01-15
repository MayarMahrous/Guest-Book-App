<template>
  <div id="main">
    <div v-if="userMsgs.length > 0">
      <div>
        <button @click="showMessageModal">Create Message</button>
      </div>

      <!-- MessageContainer -->
      <messages-container
        :messages="userMsgs"
        :openEdit="openEditModal"
        :deleteMsg="deleteMessage"
        :addComment="addComment"
      />

      <!-- Create Message -->
      <message-create
        :showModal="createMsg"
        :publishMessage="createMessage"
        :closeMessage="closeMessageModal"
        :editMsg="selectedMsg"
      />
    </div>
  </div>
</template>

<script>
import MessageContainer from "./../components/MessageContainer";
import MessageCreate from "./../components/MessageModal";
import userInfo from "./../common/user.js";
import * as guestBookAPI from "./../common/guestBookAPIs.js";

export default {
  name: "Home",
  components: {
    "messages-container": MessageContainer,
    "message-create": MessageCreate,
  },
  props: {
    users: Array,
    messages: Array,
  },
  computed:{
    getUsername(){
      return userInfo().username
    }
  },
  data() {
    return {
      createMsg: "none",
      userMsgs: [],
      selectedMsg: null,
    };
  },
  created() {
    guestBookAPI.getUserMessages().then(this.getUsersMessages)
  },
  methods: {
    getUsersMessages(msgs) {
      msgs.map((msg) => {
        console.log(msg);
        let fullName =
          this.users.find((user) => user.id == msg.id).name.firstname +
          " " +
          this.users.find((user) => user.id == msg.id).name.lastname;
        let message = this.messages.find(
          (msgDetails) => msgDetails.id == msg.products[0].productId
        ).description;
        let msgObj = {
          id: msg.id,
          message: message,
          name: fullName,
          comments: [],
        };
        this.userMsgs.push(msgObj);
      });
      console.log(this.userMsgs);
    },
    showMessageModal() {
      this.selectedMsg = null;
      this.createMsg = "block";
    },
    closeMessageModal() {
      this.createMsg = "none";
    },
    createMessage(msgText) {
      if (this.selectedMsg) {
        let msg = this.userMsgs.find((msg) => msg.id == this.selectedMsg.id);
        msg.message = msgText;
      } else {
        // let msgID = this.userMsgs[this.userMsgs.length - 1].id + 1;
        let msgID = this.userMsgs.length;
        let msgContent = msgText;
        let msgAuthor = this.getUsername;
        let msgObj = {
          id: msgID,
          message: msgContent,
          name: msgAuthor,
          comments: [],
        };
        this.userMsgs.unshift(msgObj);
      }
      this.createMsg = "none";
    },
    addComment(selectedMsg, comment) {
      if (selectedMsg && comment) {
        let msg = this.userMsgs.find((msg) => msg.id == selectedMsg.id);
        msg.comments.push(comment);
      }
      this.createCom = "none";
    },
    deleteMessage(id) {
      guestBookAPI.deleteMessage(id).then(res=>console.log(res));
      //As the API doesn't work correctly, I'll remove it from userMsgs array
      this.userMsgs.splice(this.userMsgs.findIndex(matchesEl), 1);
      function matchesEl(el) {
        return el.id == id;
      }
    },
    openEditModal(selectedMsg) {
      this.selectedMsg = selectedMsg;
      this.createMsg = "block";
    },
  },
};
</script>

<style>
button {
  width: unset;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 6px;
  width: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
textarea {
  width: 100%;
  height: 25vh;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
</style>
