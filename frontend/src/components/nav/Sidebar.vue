<template lang="html">
	<div
		class="col-span-1 flex w-16 flex-col h-full bg-violet-600 items-center px-4 py-3   text-violet-100 duration-150 z-9999"
		:class="{'w-60': isOpen}">
		<FontAwesomeIcon
			:icon="faAnglesLeft"
			class="duration-150"
			:class="{ 'rotate-180': !isOpen }"
			@click="toggleSideNav" />
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const isOpen = ref(false);
const toggleSideNav = () => {
	isOpen.value = !isOpen.value;
};
</script>
