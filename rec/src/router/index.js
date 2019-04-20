import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ApiTest from '@/components/ApiTest'
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'
import Recipe2 from '@/components/Recipe2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/addrecipe',
      name: 'AddRecipe',
      component: AddRecipe
    },
    {
      path: '/recipe/:recipeId',
      name: 'Recipe',
      component: Recipe
    },
    {
      path: '/recipe',
      name: 'Recipe',
      component: Recipe2
    },
    {
      path: '/apitest',
      name: 'Apitest',
      component: ApiTest
    }
  ]
})
