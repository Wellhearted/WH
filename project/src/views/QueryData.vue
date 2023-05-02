
<template>
  <form @submit.prevent="searchby">
    <div class="page-title">
      <h4>Query Data.</h4>
    </div>
    <div class="form-container">
        <div class="form-group">
          <label>Search</label>
        <input type="text" v-model="search" class="form-control" required>
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary" onclick="searchby">Submit</button>
        </div>
        <div class="form-group">
        <p> {{ results }}</p>
        <p v-for="result in searchResults" :key="result.id">{{ result.name }}</p>
        <div v-for="data in info" :key="data.id">{{ data.data()[search] }}</div>
        </div>
    </div>  
  </form>
</template>
<script setup>
import { getDocs, query, where, collection, firebaseStore } from '../firebase/database';
import { ref } from 'vue'

const search = ref('');
const results = ref("");

async function searchby() {
const databasename = collection(firebaseStore, 'hcms');
const querySnapshot = await getDocs(query(databasename, where(search.value, '==', 1)));

if (querySnapshot.docs.length > 0) {
  const searchResults = querySnapshot.docs.map(doc => doc.data());
  results.value=searchResults
  console.log(searchResults);
  return searchResults;
} else {
  console.log('No matching documents found');
  return null;
}
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