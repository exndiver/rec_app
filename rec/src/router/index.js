import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ApiTest from '@/components/ApiTest'
import AddRecipe from '@/components/AddRecipe'

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
      path: '/apitest',
      name: 'Apitest',
      component: ApiTest
    }
  ]
})
