import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgenceView from '../views/AgenceView.vue'
import PodcastView from '../views/PodcastView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: '/kartel',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/agence',
      name: 'agence',
      component: AgenceView
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: PodcastView
    }
  ]
})

export default router
