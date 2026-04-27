<template lang="html">
	<a
		href="#"
		class="py-1 px-4 rounded-sm border duration-150 border-violet-100 bg-violet-600 text-violet-100 inset-shadow-white hover:border-violet-800 hover:bg-violet-800"
		@click="clickAction"
		>{{ label }}</a
	>
</template>
<script setup lang="ts">
const props = defineProps(["label", "clickAction"]);
</script>
