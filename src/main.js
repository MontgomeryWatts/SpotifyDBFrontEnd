import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import artistService from './artist-service'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./components/pages/HomePage')
  },
  {
    path: '/search',
    component: () => import('./components/pages/SearchPage')
  },
  {
    path: '/artists/random', 
    beforeEnter: async (to, from, next) => { 
      var response = await artistService.getRandomArtistId();
      response = response.data;
      var id = response.id;
      next(`/artists/${id}`);
    }
  },
  {
    path: '/artists/:artistID',
    component: () => import('./components/pages/ArtistPage'),
    props: true
  },
  {
    path: '/albums/:albumID',
    component: () => import('./components/pages/AlbumPage'),
    props: true
  },
  {
    path: '/genres',
    component: () => import('./components/pages/GenrePage')
  },
  {
    path: '/playlist',
    component: () => import('./components/pages/CreatePlaylistPage')
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
