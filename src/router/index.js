import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import Recipe from '../views/Recipe.vue'
import Post from '../views/Post.vue'
import Detail from '../views/Detail.vue'
import Battle from '../views/Battle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recipe/:id',
    name: 'recipe-detail',
    component: RecipeDetail
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: Recipe
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/battle',
    name: 'battle',
    component: Battle
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
