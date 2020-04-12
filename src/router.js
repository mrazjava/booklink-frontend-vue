import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const POC = () => import('./views/ProofOfConcept.vue')
const Login = () => import('./views/Login.vue')
const Foo = () => import('./views/secured/Foo.vue')

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/proof-of-concept',
    name: 'poc',
    component: POC,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/secured/foo',
    component: Foo,
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active-menu-item',
  routes
});
