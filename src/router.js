// using routes

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: () => import("../src/pages/Home.vue"),
  },

  {
    path: "/contracts",
    name: "contracts-route",
    component: () => import("../src/pages/Contract/Contracts.vue"),
  },

  {
    path: "/contract-edit/:id",
    name: "contract.edit",
    component: () => import("../src/components/contract/ContractEdit.vue"),
    props: true,
  },

  {
    path: "/create-contract",
    name: "create.contract",
    component: () => import("../src/components/contract/CreateContract.vue"),
  },
  // /acceptance
  {
    path: "/create-acceptance",
    name: "create.acceptance",
    component: () =>
      import("../src/components/acceptance/CreateAcceptance.vue"),
  },

  {
    path: "/acceptance-edit/:id",
    name: "acceptance.edit",
    component: () => import("../src/components/acceptance/AcceptanceEdit.vue"),
    props: true,
  },
  {
    path: "/transactions",
    name: "transactions-route",
    component: () => import("../src/pages/Transactions.vue"),
  },

  // acceptances

  {
    path: "/acceptances",
    name: "acceptances-route",
    component: () => import("../src/pages/Acceptance/Acceptances.vue"),
  },


  {
    path: "/ts",
    redirect: "/",
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import("../src/pages/404NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
