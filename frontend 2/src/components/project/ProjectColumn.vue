<template lang="html">
	<div
		class="flex flex-col min-w-60 max-w-60 w-full h-full bg-violet-50 border border-violet-200 rounded-md p-2 gap-y-2
        [&_.fa-icon]:hover:text-violet-500 [&_.fa-icon]:duration-150">
		<div class="flex justify-between items-center">
			<div class="bg-violet-200 w-fit py-1 px-4 rounded-md text-violet-700">
				<p>To Do</p>
			</div>
            <div class="bg-violet-200 rounded text-violet-700 p-1 hover:bg-violet-300 duration-150 hover:[&_.fa-icon]:text-violet-500">
                <FontAwesomeIcon class="fa-icon" :icon="faPlus" size="lg" />
            </div>
		</div>
		<div class="flex flex-col w-full justify-between bg-violet-300 text-violet-700 h-20 rounded-md p-2">
			<div class="flex w-full">
				<p>SES - Setup Frontend</p>
			</div>
			<div class="flex justify-between items-center">
				<div class="flex gap-x-2">
                    <FontAwesomeIcon class="fa-icon" size="lg" :icon="faClock" />
                    <FontAwesomeIcon class="fa-icon" size="lg" :icon="faCalendar" />
                    <FontAwesomeIcon class="fa-icon" size="lg" :icon="faCommentDots" />
                </div>
				<FontAwesomeIcon class="fa-icon" :icon="faEllipsisH" size="lg" />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faEllipsisH, faClock, faCalendar, faCommentDots} from "@fortawesome/free-solid-svg-icons";
</script>
