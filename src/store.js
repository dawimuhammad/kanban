import Vue from 'vue'
import Vuex from 'vuex'
import database from './firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [ ]
  },
  mutations: {
    kanbanTask (state, payload){
        return state.task = payload
      }
  },
  actions: {
        addTask (context, payload) {
            // storing to firebase realtime-db first
            const ref = database.ref('kanban')
            const postUser = ref.child('tasks')
            const defaultStatus = 0
            let newPostUser = postUser.push()
            let postId = newPostUser.key

            newPostUser.set({
                taskId: postId,
                title: payload,
                status: defaultStatus
            })
        },
        getTask (context) {
          const ref = database.ref('kanban/tasks')
          ref.on("value", function(snapshot) {
              context.commit('kanbanTask', snapshot.val())
            }, function (errorObject) {
              console.log("The read failed: " + errorObject.code);
            })
        },
        updateTaskStatus (context, payload) {
            let taskWillUpdated = this.state.task

            // find task object based on taskId from payload
            for (var objKey in taskWillUpdated) {
              if (payload.taskId === taskWillUpdated[objKey].taskId) {
                  // console.log(taskWillUpdated[objKey])
                  // console.log(taskWillUpdated[objKey].taskId)
                  // console.log(taskWillUpdated[objKey].status)
                  // console.log(taskWillUpdated[objKey].title)

                  const ref = database.ref(`kanban/tasks/${payload.taskId}`)

                  ref.set({
                      taskId: taskWillUpdated[objKey].taskId,
                      title: taskWillUpdated[objKey].title,
                      status: payload.statusChange
                  })
              }
            }
        }
  }
})
