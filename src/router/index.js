import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgenceView from '../views/AgenceView.vue'
import PodcastView from '../views/PodcastView.vue'
import BlogView from '../views/BlogView.vue'
import ReseauxView from '../views/ReseauxView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/agence',
      name: 'AgenceView',
      component: AgenceView
    },
    {
      path: '/podcast',
      name: 'PodcastView',
      component: PodcastView
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: BlogView
    },
    {
      path: '/reseaux',
      name: 'ReseauxView',
      component: ReseauxView
    }
  ]
})

export default router
