<template>
    <v-flex xs3>
        <v-card dark color="secondary" class="mb-3">
          <v-card-text class="px-0"> DONE</v-card-text>
        </v-card>
        <v-card>
          <v-container fluid grid-list-lg class="">
            <v-layout row wrap v-for="(onetask, i) in task" :key="`${i}`">
              <v-flex v-if="onetask.status === 3" xs12>
                <v-card color="light-green lighten-1" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">{{ onetask.title }}</div>
                  </v-card-title>
                  <v-layout justify-center class="py-3">
                    <v-btn small color="red accent-1"  v-on:click="updateTask(onetask.taskId, 5)">
                        Trash
                    </v-btn>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'task'
      ])
    }
  }
</script>