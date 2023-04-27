
<template>

    <form @submit.prevent="searchby">
    <label>Search</label>
    <input type="text" v-model="search" class="form-control" required>
    <button type="submit" class="btn btn-primary" onclick="searchby">Submit</button>
    <div v-for="data in info" :key="data.id">{{ data.data()[search] }}</div>
    </form>
</template>
<script setup>
import { getDocs, query, where, collection, firebaseStore } from '../firebase/database';
import { ref } from 'vue'

const search = ref('');

async function searchby() {
    const databasename = collection(firebaseStore, 'hcms');
  const getData = query(databasename, where(search.value, ">=", "1"));
  const info = await getDocs(getData);

  if (info.docs.length > 0) {
    const data = info.docs[0].data();
    console.log(data);
    return data;
  } else {
    console.log('No matching documents found');
    return null;
  }
}
</script>
