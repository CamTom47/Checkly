import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Project from "./components/project/Project.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/projects/:projectId", component: Project }];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
