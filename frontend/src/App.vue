<script setup lang="ts">
import Sidebar from "./components/nav/Sidebar.vue";
import { RouterView } from "vue-router";
</script>

<template>
	<div class="grid grid-cols-16 bg-linear-to-t from-violet-100 to-violet-50 w-dvw h-dvh">
		<Sidebar></Sidebar>
		<div class="col-start-2 col-span-full">
			<RouterView></RouterView>
		</div>
	</div>
</template>
