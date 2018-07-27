import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDtFzQ-bKSoXr3Q83gEnG4LltmIN_3S9o0",
  authDomain: "kanban-f7cde.firebaseapp.com",
  databaseURL: "https://kanban-f7cde.firebaseio.com",
  projectId: "kanban-f7cde",
  storageBucket: "kanban-f7cde.appspot.com",
  messagingSenderId: "720382169185"
}

firebase.initializeApp(config)

let database = firebase.database()

export default database