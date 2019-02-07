import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// TODO: Add pages for deleting and updating data in DB
// TODO: A component for deleting will call "ClearDBCollections"
// TODO: A component for updating will call "UpdateDBData"