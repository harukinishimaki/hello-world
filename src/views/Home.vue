<template>
  <div class="home">
    <div v-for="(User,index) in users" :key="index">
      <p>{{user.name}}さん</p>
      <p>{{user.age}}歳</p>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    get() {
      var db = firebase.firestore();
      db.collection("users")
        .get()
        .then(query => {
          query.forEach(doc => {
            var data = doc.data();
            this.users.push(data);
          });
        });
    }
  },
  created() {
    this.get();
  }
};
</script>