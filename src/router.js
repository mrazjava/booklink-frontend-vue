import Vue from 'vue';
import Router from 'vue-router';

const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
const SimpleLayout = () => import('@/layouts/SimpleLayout.vue')
const SecureLayout = () => import('@/layouts/SecureLayout.vue')

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const POC = () => import('@/views/ProofOfConcept.vue')
const Login = () => import('@/views/Login.vue')
const Foo = () => import('@/views/Foo.vue')
const Bar = () => import('@/views/secured/Bar.vue')

Vue.use(Router);

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
    meta: { layout: SimpleLayout }
  },
  {
    path: '/foo',
    component: Foo,
    meta: { layout: SecureLayout }
  },
  {
    path: '/secured/bar',
    component: Bar,
    meta: { layout: SecureLayout }
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active-menu-item',
  routes
});
