<script setup>
import { getAuth, firebaseAuth } from '../firebase/database';
import { ref, onMounted } from 'vue';
let darkMode=ref(false);

const userE = ref('');
const authenticate = getAuth();
const user = authenticate.currentUser;

function darkmode(){
  darkMode.value=true;
console.log('ANYTHING');
}
onMounted(() => {
  if (user) {
    // User is signed in
    const email = user.email;
    console.log("User email:", email);
    userE.value = user.email;
  } else {
    // No user is signed in
    console.log("No user signed in.");
  }
});
</script>


<template>
  <div :class="{'darkmode': darkMode}">

    <div class="container">
      <div class="text">
          <h1>Welcome to Well Hearted </h1>
          <div v-if="user">
              <span style="color: green; font-weight: bold">{{ userE }}</span>,
              </div>
          <p>We invite you to collaborate and help us raise awareness, promote better understanding and improve the lives of those living with Cardiomyopathy. </p>
          <div class="image">
        <img src="/homescreen/heart3.png" alt="Image">
    </div>
        
      </div>
      <div class="image">
          <img src="/homescreen/heart2.png" alt="Image">
          <div class="image">
    </div>
    <form @submit.prevent="darkmode"> 
         <li class="nav-item">
         <button type="submit" onclick='darkmode'>Dark Mode</button>
         </li>
         </form>
      </div>
      </div>
      </div>
  </template>
  <style scoped>
    .container {
      display: flex;
      flex-wrap: wrap;
      background-color: #f0f0f0;
      
      transform: translate(-50%,10%);
      }
  
      .text {
      width: 50%;
      text-align: left;
      padding-top: 80px;
      margin-left: -40px;
      }
  
      .image {
      width: 50%;
      }
  
      @media screen and (max-width: 767px) {
      .text, .image {
          width: 100%;
      }
      }
        .darkmode {
  background-color: #333;
  color: #fff;
  position:relative;
}
@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
  </style>