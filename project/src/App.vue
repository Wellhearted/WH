<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { getAuth,firebaseAuth, } from './firebase/database';
const authenticate=getAuth();
const user=authenticate.currentUser;
const nav=[];
if (user){nav.push({key:"query",label:"Query",link:"/query"})}
</script>


<template>
<header>

  <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./logo.jpg" height="90" width=170>
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink to="/">Home</RouterLink>

        </li>
        <li class="nav-item">
          <RouterLink to="/login">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/register">Register</RouterLink>
               </li>
        <li class="nav-item">
          <RouterLink to="/resetpassword">Reset passsword</RouterLink>
         </li>
         <li class="nav-item">
          <RouterLink to="/add">Add Data</RouterLink>
               </li>
        <li class="nav-item">
          <RouterLink to="/query">Query</RouterLink>
         </li>
         <li class="nav-item">
          <RouterLink to="/update">Update</RouterLink>
         </li>
         <li class="nav-item">
          <RouterLink to="/logout">Logout</RouterLink>
         </li>
        <li v-for="nav in log" :key="nav.key" class="nav-item">
          <router-link v-if="nav.link" :to="nav.link">{{ nav.label }}</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 200%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  
}
</style>
