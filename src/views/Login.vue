<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap justify-space-between>
        <v-flex xs5>
           <Signin></SignIn>
        </v-flex>
        <v-flex xs5>
           <Signup></Signup>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import Signin from '@/components/Signin.vue'
import Signup from '@/components/Signup.vue'

export default {
  name: 'login',
  components: {
      Signin,
      Signup
  }
}
</script>
