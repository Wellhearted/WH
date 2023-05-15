<script setup>
import {getAuth,updateEmail} from '../firebase/database'
import {ref} from 'vue'
import {useRouter} from 'vue-router';
const router = useRouter();
const auth = getAuth();
const email = ref('')

function updateUser(){
    console.log('hello');
    const info ={email: email.value,}
updateEmail(auth.currentUser,info.email)
router.push("/")

}
</script>
<template>
<form @submit.prevent="updateUser">
<input type='text' v-model='email'>
<button type='success' onclick="updateUser" class="btn btn-primary">Submit</button>


</form>
</template>
