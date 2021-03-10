import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Events from "@/pages/Events/index.vue";
import Participants from "@/pages/Participants/index.vue";
import Forms from "@/pages/Forms.vue";
import Tables from "@/pages/Tables.vue";
import UIElements from "@/pages/UIElements.vue";
import Login from "@/pages/Login.vue";
import Modal from "@/pages/Modal.vue";
import Card from "@/pages/Card.vue";
import Blank from "@/pages/Blank.vue";
const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: { layout: "empty" },
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/events",
        name: "Events",
        component: Events,
      },
      {
        path: "/participants",
        name: "Participants",
        component: Participants,
      },
      {
        path: "/forms",
        name: "Forms",
        component: Forms,
      },
      {
        path: "/cards",
        name: "Cards",
        component: Card,
      },
      {
        path: "/tables",
        name: "Tables",
        component: Tables,
      },
      {
        path: "/ui-elements",
        name: "UIElements",
        component: UIElements,
      },
      {
        path: "/modal",
        name: "Modal",
        component: Modal,
      },
      {
        path: "/blank",
        name: "Blank",
        component: Blank,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;