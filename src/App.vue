<template>
  <div id="app">
    <div id="nav">
      <h1 v-if="['task', 'login'].indexOf($route.name) > -1">Kanban App</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/task">Task</router-link> |
      <router-link to="/login" v-if="token === null || token === undefined || token === ''">Login</router-link>
      <router-link to="" v-else>Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function () {
      return {
        token: ''
      }
  },
  methods: {
      getToken: function () {
          this.token = localStorage.getItem('token')
      }
  },
  created: function () {
      // this.getToken()
      // console.log(this.token)
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
