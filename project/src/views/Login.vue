<script setup>
import { firebaseAuth,signInWithEmailAndPassword} from '../firebase/database';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const email = ref("");
const password = ref("");
const errorFirebase = ref(null);

const router = useRouter();

function login() {
  const info = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword( firebaseAuth, info.email, info.password)
    .then(
      (userCredential) => {
       
        router.push("/");
     
      },
      (error) => {
        errorFirebase.value = error.message;
      }
    );
}
</script>

<template>
  <form>
    <div class="page-title">
      <h4>Welcome to Login!</h4>
    </div>
    <div class="form-container">
      <div class="form-group">
        <label>Email:</label>
        <input v-model="email" type="email" class="form-control" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input v-model="password" type="password" class="form-control" placeholder="Enter your password" required />
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="login">Submit</button>
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