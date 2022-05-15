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
  apiKey: "AIzaSyAqsTB2ugBARb1Y44lElrqyWOG6kZmpYYQ",
  authDomain: "baemin-vue-57bc1.firebaseapp.com",
  projectId: "baemin-vue-57bc1",
  storageBucket: "baemin-vue-57bc1.appspot.com",
  messagingSenderId: "617109452175",
  appId: "1:617109452175:web:beead616b0c0471ca387fa",
  measurementId: "G-K29RZHM2M9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).use(router).mount("#app");
