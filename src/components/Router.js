import Vue from 'vue';
import VueRouter from 'vue-router';

const DefaultLayout = () => import('@/layouts/DefaultLayout')
const SimpleLayout = () => import('@/layouts/SimpleLayout')
const SecureLayout = () => import('@/layouts/SecureLayout')

const Home = () => import('@/views/Home')
const About = () => import('@/views/About')
const POC = () => import('@/views/ProofOfConcept')
const Login = () => import('@/views/Login')
const Admin = () => import('@/views/Admin')
const Reviews = () => import('@/views/secured/Reviews')

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
    path: '/admin',
    component: Admin,
    meta: { layout: SecureLayout }
  },
  {
    path: '/secured/reviews',
    component: Reviews,
    meta: { layout: SecureLayout }
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active-menu-item',
  routes
})
