import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Details from "./views/Details.vue";
import  store from "./store";

import {
  CoverImageSection, TextImageSection, HelpSection, ServicesSection
} from "@/components";

const routes = [
  { path: "/",
    name : "Home",
    component: Home,
    children: [
        { path: "", component: CoverImageSection,
        TextImageSection, HelpSection, ServicesSection },
    ],
   },
  { path: "/about", component: About },
  { path: "/details", component: Details },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router)
.use(store)
.mount("#app");
