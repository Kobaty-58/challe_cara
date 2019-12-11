import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore';

Vue.config.productionTip = false

Vue.use(firestorePlugin);
firebase.initializeApp({
  apiKey: "AIzaSyCfeaa4xQTeIIAua1Nefous0rK8CrDPcIc",
    authDomain: "challecara-adad1.firebaseapp.com",
    databaseURL: "https://challecara-adad1.firebaseio.com",
    projectId: "challecara-adad1",
    storageBucket: "challecara-adad1.appspot.com",
    messagingSenderId: "239795652606",
    appId: "1:239795652606:web:de40829a2aaa7c069ea2af",
    measurementId: "G-WE7JTFD0JD"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
