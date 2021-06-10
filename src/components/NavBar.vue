<template>
  <div id="nav">
    <router-link class="pad-10" to="/">Home</router-link> 
    <span v-if="isLoggedIn">
      <router-link class="pad-10" to="/user">User List</router-link> 
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link class="pad-10" to="/login">Login</router-link>
      <router-link class="pad-10" to="/register">Register</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

a:hover {
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.pad-10{
  padding-right: 10px;
}
</style>
