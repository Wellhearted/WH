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
        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary" @click="resetpassword">Submit</button>
          </div>
    </form>
</template>






