<template>
  <div id="myModal" class="modal" :style="{ display: showModal }">
    <div class="modal-content">
      <span class="close" @click="closeMessage">&times;</span>
      <textarea
        type="text"
        placeholder="write your Message..."
        v-model="getMessage"
      />
      <button @click="checkMessage">Add Message</button>
    </div>
  </div>
</template>
<script>
import * as guestBookAPI from "./../common/guestBookAPIs.js";

export default {
  name: "MessageCreate",
  computed: {
    getMessage: {
      get: function () {
        return this.editMsg ? this.editMsg.message : null;
      },
      set: function (newMessage) {
        this.newMessage = newMessage;
      },
    },
  },
  props: {
    showModal: String,
    publishMessage: Function,
    closeMessage: Function,
    editMsg: Object,
  },
  data() {
    return {
      newMessage: null,
      messageData: null,
    };
  },
  methods: {
    checkMessage() {
      if (this.newMessage) {
        guestBookAPI
          .addMessage(this.getMessageBody())
          .then(this.getMessageSuccess);
        //As the API doesn't work correctly, I'll add the new Message to userMsgs Array that is shown in Home.vue
        // this.publishMessage(this.newMessage);
      }
    },
    getMessageBody() {
      return {
        title: "",
        price: 0,
        description: this.newMessage,
        image: "",
        category: "",
      };
    },
    getMessageSuccess(res) {
      this.messageData = res;
      guestBookAPI
        .addUserMessage(this.getUserMessageBody())
        .then(this.addUserMessageSuccess);
    },
    getUserMessageBody() {
      return {
        userId: 5,
        date: "2020-02-03",
        products: [{ productId: this.messageData.id, quantity: 1 }],
      };
    },
    addUserMessageSuccess(res) {
      console.log(res);
      //As the API doesn't work correctly, I'll add the new Message to userMsgs Array that is shown in Home.vue
      this.publishMessage(this.messageData.description);
      //clear message caching
      this.newMessage = null;
    },
  },
};
</script>
<style>
</style>