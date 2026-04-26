<template lang="html">
	<div class="flex flex-col w-full h-full">
		<ProjectHeader></ProjectHeader>
		<div class="flex py-4 h-full w-full gap-x-8 overflow-x-scroll">
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
		</div>
	</div>
</template>
<script setup lang="ts">
import ProjectColumn from "./ProjectColumn.vue";
import ProjectHeader from "./ProjectHeader.vue";
</script>
