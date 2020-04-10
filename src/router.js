import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(`./views/Home.vue`);
const About = () => import(`./views/About.vue`);
const POC = () => import(`./views/ProofOfConcept.vue`)

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: `/home`,
      alias: `/`,
      name: `home`,
      component: Home,
    },
    {
      path: `/proof-of-concept`,
      name: `poc`,
      component: POC,
    },
    {
      path: `/about`,
      name: `about`,
      component: About,
    },
  ],
  mode: `history`,
});
