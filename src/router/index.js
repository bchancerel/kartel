import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgenceView from '../views/AgenceView.vue'
import EvenementsView from '../views/EvenementsView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ServiceView from '../views/ServiceView.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/evenements',
    name: 'evenements',
    component: EvenementsView
  },
  {
    path: '/artistes',
    name: 'artistes',
    component: ArtistesView
  },
  {
    path: '/services',
    name: 'services',
    component: ServiceView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
