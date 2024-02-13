<template>
  <div id="app">
    <nav class="p-0">
      <NavBar/>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 50px;
  display: grid;
  grid-template-rows: 1fr auto;
}

/* Largeur */
::-webkit-scrollbar {
  width: 10px;
}

/* Couleur de fond */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Couleur de la poignée */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Effet de survol */
::-webkit-scrollbar-thumb:hover {
  background: #2a2a2a;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.btn-outline-primary {
  --bs-btn-color: #212ea5 !important;
  --bs-btn-border-color: #212ea5 !important;
  --bs-btn-hover-bg: #212ea5 !important;
  --bs-btn-hover-border-color: #212ea5 !important;
  --bs-btn-active-bg: #212ea5 !important;
  --bs-btn-active-border-color: #212ea5 !important;
  --bs-btn-disabled-color: #212ea5 !important;
  --bs-btn-disabled-border-color: #212ea5 !important;
}
</style>
