<template>
  <div id="app">
    <NavBar /> 
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue"; 

export default {
  components: {
    NavBar, 
  },
};
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.3px !important
}
.v-input input{
  letter-spacing: 0.3px !important
}
body{
  background: #f4f4f4;
} 
.v-input .v-label{
  left: 0 !important;
}
</style>
