import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/pages/Home.vue')), 'Home')
const Type = r => require.ensure([], () => r(require('@/pages/Type.vue')), 'Type')
const Cart = r => require.ensure([], () => r(require('@/pages/Cart.vue')), 'Cart')
const Login = r => require.ensure([], () => r(require('@/pages/Login.vue')), 'Login')
const Details = r => require.ensure([], () => r(require('@/pages/Details.vue')), 'Details')
const Findpwd = r => require.ensure([], () => r(require('@/pages/Findpwd.vue')), 'Findpwd')
const Mobile = r => require.ensure([], () => r(require('@/pages/Mobile.vue')), 'Mobile')
const Register = r => require.ensure([], () => r(require('@/pages/Register.vue')), 'Register')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/type',
      component: Type
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/findpwd',
      component: Findpwd
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/mobile',
      component: Mobile
    },
    {
      path: '/details/:productId',
      name:'details',
      component: Details
    },
    {
      path:'/', //默认调转
      redirect: '/home'
     }

  ]
})
