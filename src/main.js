import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import HomePage from './components/pages/HomePage'
import ArtistPage from './components/pages/ArtistPage'
import SearchPage from './components/pages/SearchPage'
import GenrePage from './components/pages/GenrePage'
import CreatePlaylistPage from './components/pages/CreatePlaylistPage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path: '/', component: HomePage},
  {path: '/search', component: SearchPage},
  {path: '/artists', component: ArtistPage},
  {path: '/genres', component: GenrePage},
  {path: '/playlist', component: CreatePlaylistPage}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
