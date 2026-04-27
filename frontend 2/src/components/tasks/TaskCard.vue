<template>
	<div class="flex flex-col w-full justify-between bg-violet-300 text-violet-700 h-20 rounded-md p-2">
		<div class="flex w-full text-sm">
			<p>SES - Setup Frontend</p>
		</div>
		<div class="flex justify-between items-center">
			<div class="flex gap-x-2">
				<FontAwesomeIcon class="fa-icon" size="lg" :icon="faClock" />
				<FontAwesomeIcon class="fa-icon" size="lg" :icon="faCalendar" />
				<FontAwesomeIcon class="fa-icon" size="lg" :icon="faCommentDots" />
			</div>
			<FontAwesomeIcon @click="router.push('/projects/1/task/1')" class="fa-icon" :icon="faEllipsisH" size="lg" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEllipsisH, faClock, faCalendar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
