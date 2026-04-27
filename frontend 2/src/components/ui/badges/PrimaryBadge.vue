<template lang="html">
	<a
		href="#"
		class="py-1 px-4 rounded-sm border duration-150 border-violet-100 bg-violet-300 text-violet-800 inset-shadow-white hover:border-violet-800 hover:bg-violet-800 hover:text-violet-200"
		>{{ label }}</a
	>
</template>
<script setup lang="ts">
const props = defineProps(["label"]);
</script>
