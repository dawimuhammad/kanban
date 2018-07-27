<template>
  <v-container grid-list-md text-xs-center>
    <v-btn outline round v-on:click="inputTask">Add New Tasks</v-btn>
    <v-layout row wrap mt-4>
        <TaskBacklog></TaskBacklog>
        <TaskTodo></TaskTodo>
        <TaskDoing></TaskDoing>
        <TaskDone></TaskDone>
    </v-layout>
  </v-container>
</template>

<script>
import TaskBacklog from '@/components/TaskBacklog.vue'
import TaskTodo from '@/components/TaskTodo.vue'
import TaskDoing from '@/components/TaskDoing.vue'
import TaskDone from '@/components/TaskDone.vue'
import swal from 'sweetalert'
import { mapActions } from 'vuex'

export default {
    components: {
        TaskBacklog,
        TaskTodo,
        TaskDoing,
        TaskDone
    },
    data: function () {
      return {
        tasks: []
      }
    },
    methods: {
        ...mapActions([
            'getTask','addTask'
        ]),
        inputTask: function () {
            swal({
                title: "Input Task Here",
                // text: "You clicked the button!",
                button: "Submit",
                content: "input",
            })
            .then((value) => {
                if (value.length === 0) {
                    swal('Failed to add a task!')
                } else {
                    this.addTask(value)
                    swal({
                        text: `Successfully add task ${value}`,
                        timer: 650,
                        button: false
                    })
                }
            })
        }
    }
}
</script>

