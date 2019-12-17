import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import Recipe from '../views/Recipe.vue'
//import Post from '../views/Post.vue'
import Detail from '../views/Detail.vue'
import Battle from '../views/Battle.vue'
import Interior from '../views/Interior.vue'
import InteriorDetail from '../views/InteriorDetail.vue'
import BattleResult from '../views/BattleResult.vue'
import BattleDetail from '../views/BattleDetail.vue'
import InBattleBlue from '../views/InBattleBlue.vue'
import InBattleRed from '../views/InBattleRed.vue'
import BattleResultWinner from '../views/BattleResultWinner.vue'
import BattleResultDetail from '../views/BattleResultDetail.vue'
import BattleResultLoser from '../views/BattleResultLoser.vue'
import Input from '../views/Input.vue'
import test from '../views/test.vue'

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
  // {
  //   path: '/post',
  //   name: 'post',
  //   component: Post
  // },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
  {
    path: '/battle',
    name: 'battle',
    component: Battle
  },
  {
    path: '/interior',
    name: 'interior',
    component: Interior
  },
  {
    path: '/interior/:id',
    name: 'interior-detail',
    component: InteriorDetail
  },
  {
    path: '/battle-result',
    name: 'battle-result',
    component: BattleResult
  },
  {
    path: '/battle-detail',
    name: 'battle-detail',
    component: BattleDetail
  },
  {
    path: '/in-battle-blue',
    name: 'in-battle-blue',
    component: InBattleBlue
  },
  {
    path: '/in-battle-red',
    name: 'inbattle-red',
    component: InBattleRed
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/battle-result-detail',
    name: 'battle-result-detail',
    component: BattleResultDetail
  },
  {
    path: '/battle-result-winner',
    name: 'battle-result-winner',
    component: BattleResultWinner
  },
  {
    path: '/battle-result-loser',
    name: 'battle-result-loser',
    component: BattleResultLoser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
