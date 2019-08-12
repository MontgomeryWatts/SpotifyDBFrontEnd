import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import artistService from '@/services/artist-service'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "HomePage" */ '@/components/pages/HomePage')
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName: "SearchPage" */ '@/components/pages/SearchPage')
  },
  {
    path: '/search/artist',
    component: () => import(/* webpackChunkName: "ArtistSearchPage" */ '@/components/pages/ArtistSearchPage'),
    props: (route) => ({
      name: route.query.name,
      genres: route.query.genres,
      mode: route.query.mode
    }) 
  },
  {
    path: '/artists/random', 
    beforeEnter: async (to, from, next) => { 
      var response = await artistService.getRandomArtistId();
      response = response.data;
      var id = response._id;
      next(`/artists/${id}`);
    }
  },
  {
    path: '/artists/:artistID',
    component: () => import(/* webpackChunkName: "ArtistPage" */ '@/components/pages/ArtistPage'),
    props: true
  },
  {
    path: '/albums/:albumID',
    component: () => import(/* webpackChunkName: "AlbumPage" */ '@/components/pages/AlbumPage'),
    props: true
  },
  {
    path: '/genres',
    component: () => import(/* webpackChunkName: "GenrePage" */ '@/components/pages/GenrePage')
  },
  {
    path: '/playlist',
    component: () => import(/* webpackChunkName: "CreatePlaylistPage" */ '@/components/pages/CreatePlaylistPage')
  },
  {
    path: '/suggest',
    component: () => import(/* webpackChunkName: "SuggestionsPage" */ '@/components/pages/SuggestionsPage')
  }
]
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
