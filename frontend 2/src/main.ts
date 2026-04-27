import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Project from "./components/project/Project.vue";
import { createRouter, createWebHistory } from "vue-router";
import TaskModal from "./components/tasks/TaskModal.vue";

const routes = [
	{ path: "/projects/:projectId", component: Project, children: [{ path: "task/:taskId", component: TaskModal }] },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
