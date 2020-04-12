import Vue from 'vue';
import Router from 'vue-router';

const Layout = () => import(`./layouts/Layout.vue`);
const Home = () => import(`./views/Home.vue`);
const About = () => import(`./views/About.vue`);
const POC = () => import(`./views/ProofOfConcept.vue`)
const Login = () => import(`./views/Login.vue`)

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: `home`,
        name: `home`,
        component: Home,
      },
      {
        path: `proof-of-concept`,
        name: `poc`,
        component: POC,
      },
      {
        path: `about`,
        name: `about`,
        component: About,
      },
      {
        path: `login`,
        component: Login,
      }
    ]
  }],
  mode: `history`,
});
