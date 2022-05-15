import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsipLvPRdlk7KIBZpBC_q8FrkYmPGf6j0",
  authDomain: "baemin-vue-40b90.firebaseapp.com",
  projectId: "baemin-vue-40b90",
  storageBucket: "baemin-vue-40b90.appspot.com",
  messagingSenderId: "809897326443",
  appId: "1:809897326443:web:16bdb9e0a8ea5f2bd6be2e",
  measurementId: "G-3SRGQZ8B8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).use(router).mount("#app");
