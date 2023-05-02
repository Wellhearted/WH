<script setup>
import {sendPasswordResetEmail,firebaseAuth} from '../firebase/database';
import {ref} from "vue";
const email= ref("");
function resetpassword(){
   const newemail= {email:email.value};
    sendPasswordResetEmail(firebaseAuth,newemail.email);
    
}
</script>
<template>
  <form>
    <div class="page-title">
      <h4>Reset your Password.</h4>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="resetpassword">Submit</button>
      </div>
    </div>
  </form>
</template>
<style scoped>
.form-container{
  border: 1px solid #ccc;
  border-radius: 10px;
  transform: translate(-50%,10%);
  padding: 40px;
  width: 450px;
}

.form-group{
  margin-bottom: 15px;
}
.page-title{
  text-align: center;
  transform: translate(-50%,10%);
}
</style>




