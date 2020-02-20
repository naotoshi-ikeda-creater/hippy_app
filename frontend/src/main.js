import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import store from './store/store';
import { sync } from 'vuex-router-sync'
import Vuetify from "vuetify"; 
import "vuetify/dist/vuetify.min.css";
 
Vue.use(VueRouter);
Vue.use(Vuetify); 　//Vutify
const vuetify = new Vuetify();
 
const router = new VueRouter({
  routes
});
 
sync(store, router);
 
new Vue({
  el: '#app',
  vuetify,
  router,
  store,
  render: h => h(App)
})