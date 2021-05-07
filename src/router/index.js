import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Events from "@/pages/Events/index.vue";
import Participants from "@/pages/Participants/index.vue";
import Bookers from "@/pages/Bookers/index.vue";
import Kategori from "@/pages/Kategori/index.vue";
import Transaksi from "@/pages/Transaksi/index.vue";
import Vouchers from "@/pages/Vouchers/index.vue";
import Tiket from "@/pages/Tiket/index.vue";
import Sertifikat from "@/pages/Sertifikat/index.vue";
import Pemateri from "@/pages/Pemateri/index.vue";
import Forms from "@/pages/Forms.vue";
import Tables from "@/pages/Tables.vue";
import UIElements from "@/pages/UIElements.vue";
import Login from "@/pages/Login.vue";
import Modal from "@/pages/Modal.vue";
import Card from "@/pages/Card.vue";
import Blank from "@/pages/Blank.vue";
import CreateEvent from "@/pages/Events/Create.vue";
import UpdateEvent from "@/pages/Events/Update.vue";
import CreateKategori from "@/pages/Kategori/Create.vue";
import CreatePemateri from "@/pages/Pemateri/Create.vue";
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
        path: "/events/create",
        name: "CreateEvent",
        component: CreateEvent,
      },
      {
        path: "/events/edit/:id",
        name: "UpdateEvent",
        component: UpdateEvent,
      },
      {
        path: "/participants",
        name: "Participants",
        component: Participants,
      },
      {
        path: "/bookers",
        name: "Bookers",
        component: Bookers,
      },
      {
        path: "/categories",
        name: "Kategori",
        component: Kategori,
      },
      {
        path: "/categories/create",
        name: "CreateKategori",
        component: CreateKategori,
      },
      {
        path: "/transactions",
        name: "Transaksi",
        component: Transaksi,
      },
      {
        path: "/tickets",
        name: "Tiket",
        component: Tiket,
      },
      {
        path: "/vouchers",
        name: "Vouchers",
        component: Vouchers,
      },
      {
        path: "/certificates",
        name: "Sertifikat",
        component: Sertifikat,
      },
      {
        path: "/pemateri",
        name: "Pemateri",
        component: Pemateri,
      },
      {
        path: "/pemateri/create",
        name: "CreatePemateri",
        component: CreatePemateri,
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