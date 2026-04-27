<template lang="html">
	<div class="flex flex-col items-start px-4 h-full w-full overflow-x-hidden">
		<ProjectHeader></ProjectHeader>
		<div class="flex justify-start py-4 w-356 max-w-460 h-full gap-x-4 overflow-x-scroll">
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
			<ProjectColumn></ProjectColumn>
		</div>
		<RouterView></RouterView>
	</div>
</template>
<script setup lang="ts">
import ProjectColumn from "./ProjectColumn.vue";
import ProjectHeader from "./ProjectHeader.vue";
</script>
