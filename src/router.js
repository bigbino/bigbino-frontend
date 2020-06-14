import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Dashboard.vue"),
        },
        {
          path: "/penaestrada",
          name: "penaestrada",
          component: () => import("./views/PeNaEstrada.vue"),
        },
        {
          path: "/praondevai",
          name: "praondevai",
          component: () => import("./views/PraOndeVai.vue"),
        },
        {
          path: "/vamosimbora",
          name: "vamosimbora",
          component: () => import("./views/VamoSimbora.vue"),
        },
        {
          path: "/paposerio",
          name: "paposerio",
          component: () => import("./views/PapoSerio.vue"),
        },
        {
          path: "/sabetudo",
          name: "sabetudo",
          component: () => import("./views/SabeTudo.vue"),
        },
        {
          path: "/teajudasaude",
          name: "teajudasaude",
          component: () => import("./views/TeAjudaSaude.vue"),
        },
        {
          path: "/manteratualizado",
          name: "manteratualizado",
          component: () => import("./views/ManterAtualizado.vue"),
        },
        {
          path: "/paraaonde",
          name: "paraaonde",
          component: () => import("./views/ParaAonde.vue"),
        },
        {
          path: "/comer",
          name: "comer",
          component: () => import("./views/Comer.vue"),
        },
        {
          path: "/dormir",
          name: "dormir",
          component: () => import("./views/Dormir.vue"),
        },
        {
          path: "/posto",
          name: "posto",
          component: () => import("./views/Posto.vue"),
        },
        {
          path: "/chamaalguem",
          name: "chamaalguem",
          component: () => import("./views/ChamaAlguem.vue"),
        },
        {
          path: "/acidente",
          name: "acidente",
          component: () => import("./views/Acidente.vue"),
        },
        {
          path: "/problemasaude",
          name: "problemasaude",
          component: () => import("./views/ProblemaSaude.vue"),
        },
        {
          path: "/assalto",
          name: "assalto",
          component: () => import("./views/Assalto.vue"),
        },
        {
          path: "/problemaveiculo",
          name: "problemaveiculo",
          component: () => import("./views/ProblemaVeiculo.vue"),
        },
      ],
    },
    {
      path: "/",
      redirect: "login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Register.vue"),
        },
      ],
    },
  ],
});
