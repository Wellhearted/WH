

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







<template>
     <form @submit.prevent="searchby">
    <div class="page-title">
      <h4>Update Data.</h4>
    </div>
    <div class="form-container">
        <div class="form-group">
          <label> Search  </label>

<input type='text' v-model='email'>
<button type='success' onclick="updateUser" class="btn btn-primary">Submit</button>
</div>
</div>

</form>
</template>
