import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/components/Store'

const DefaultLayout = () => import('@/layouts/DefaultLayout')

const Home = () => import('@/views/Home')
const About = () => import('@/views/About')
const POC = () => import('@/views/ProofOfConcept')
const Login = () => import('@/views/Login')
const Admin = () => import('@/views/Admin')
const Reviews = () => import('@/views/admin/Reviews')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: Home,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/proof-of-concept',
    name: 'poc',
    component: POC,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: DefaultLayout }
  },
  {
    path: '/my-account',
    component: Admin,
    meta: {
      layout: DefaultLayout,
      requiresAuth: true
    }
  },
  {
    path: '/my-account/reviews',
    component: Reviews,
    meta: {
      layout: DefaultLayout,
      requiresAuth: true
    }
  }
]

let router = new VueRouter({
  name: 'Router',
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active-menu-item',
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login?dest=' + to.path)
  }
  else if('login'.localeCompare(to.name) == 0) {
    if(!to.query['dest']) {
      to.query['dest'] = from.path
    }
    next()
  }
  else {
    next()
  }
})

export default router;
