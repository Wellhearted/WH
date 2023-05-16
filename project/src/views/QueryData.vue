
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
  <button class="btn btn-danger" @click="deletePost">Delete Post</button>

        </div>
        <div class="form-group">
        <p> {{ results }}</p>
        <p v-for="results in searchResults" :key="results.id">{{ results.name }}</p>
        <div v-for="data in info" :key="data.id">{{ data.data()[search] }}</div>
        </div>
    </div>  
  </form>

  
</template>



<script setup>
import { getDocs, query, where, collection, firebaseStore,deleteDoc} from '../firebase/database';
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
async function deletePost() {
  const Deletehcms = collection(firebaseStore, 'hcms');
  const d = query(Deletehcms, where(search.value, '==', 1)); // Update the field name in the where() clause
  
  try {
    const querySnapshot = await getDocs(d); // Rename docSnap to querySnapshot for clarity

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(querySnapshot.docs.length);

      deleteDoc(doc.ref);
      console.log("Successfully deleted");
    });
  } catch (error) {
    console.error("Error deleting post:", error);
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