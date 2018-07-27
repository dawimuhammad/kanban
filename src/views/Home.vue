<template>
  <div class="home">
    <div class="row">
      <img src="../assets/k-logo.png">
    </div>
    <div class="row">
      <v-btn to="/task" outline color="light-blue darken-1">LET'S GET STARTED</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>

<style>
img {
    margin-top: 100px;
    width: 35%;
}
</style>
