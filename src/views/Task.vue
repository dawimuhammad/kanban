<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="stage in kanban" :key="`${stage}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0"> {{ stage }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: function () {
      return {
        kanban: ['backlog', 'todo', 'doing', 'done']
      }
    }
}
</script>

<style>

</style>

