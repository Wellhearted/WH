<script setup>
import { async } from '@firebase/util';
import { firebaseAuth, collection, addDoc, firebaseStore, createUserWithEmailAndPassword,sendEmailVerification } from '../firebase/database';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const phonenumber = ref('');
const password = ref('');
const affiliation = ref('');
const router = useRouter();

function makeuser() {
  const user = { email: email.value, password: password.value };
  createUserWithEmailAndPassword(firebaseAuth, user.email, user.password)
    .then(async(id) => {
      await sendEmailVerification(id.user);
      console.log('success');
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <div class="register">
    <form>
    <div class="page-title">
      <h4>Welcome to Register!</h4>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label>Name</label>
        <input v-model="name" type="text" class="form-control" placeholder="Enter your name" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" placeholder="Enter your password" required />
      </div>
      <div class="form-group">
        <label>Institution Affiliation</label>
        <input v-model="affiliation" type="text" class="form-control" placeholder="Enter your institution affiliation" required />
      </div>
      <div class="form-group">
        <label>Phone Number</label>
        <input v-model="phonenumber" type="text" class="form-control" placeholder="Enter your phone number" required />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="makeuser">Submit</button>
      </div>
    </div>
  </form>
  </div>
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

  .register{
    margin-top:150px;
  }
</style>