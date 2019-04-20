import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Auth stuff
import Register from '@/components/Register'
import Login from '@/components/Login'

// Recipes stuff
import AddRecipe from '@/components/AddRecipe'
import Recipe from '@/components/Recipe'
import Recipe2 from '@/components/Recipe2'

// Product stuff
import AddProduct from '@/components/AddProduct'

// Tests
import ApiTest from '@/components/ApiTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // Main Page
    {
      path: '/',
      name: 'Main',
      component: HelloWorld
    },

    // Auth Stuff
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

    // Recipes Stuff
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

    // Products Stuff
    {
      path: '/addproduct',
      name: 'AddProduct',
      component: AddProduct
    },

    // Tests
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
