import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgenceView from '../views/AgenceView.vue'
import PodcastView from '../views/PodcastView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/kartel',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kartel/agence',
    name: 'agence',
    component: AgenceView
  },
  {
    path: '/kartel/podcast',
    name: 'podcast',
    component: PodcastView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
