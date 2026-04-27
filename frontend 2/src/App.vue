<template>
	<div class="relative flex w-screen h-dvh bg-linear-to-t from-violet-100 to-violet-50">
		<Sidebar></Sidebar>
		<div class="ms-12 w-content">
			<RouterView></RouterView>
		</div>
	</div>
</template>

<script setup lang="ts">
import Sidebar from "./components/nav/Sidebar.vue";
import { RouterView } from "vue-router";
</script>
