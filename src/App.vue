<template>
  <div id="app">
    <div id="nav" v-if="['task'].indexOf($route.name) > -1">
      
      <h1>Kanban App</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/task">Task</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: function () {
      return {
        tasks: []
      }
  },
  methods: {
    ...mapActions([
        'getTask'
      ])
  },
  created () {
    this.getTask()
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
