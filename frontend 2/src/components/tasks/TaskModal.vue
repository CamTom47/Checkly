<template>
	<div class="absolute left-0 top-0 w-full h-screen bg-violet-400/90 z-11 px-60 py-12">
		<div
			class="grid grid-cols-12 grid-rows-12 gap-x-4 gap-y w-full h-full bg-violet-800 rounded-lg py-2 px-4 opacity-100 [&_.section]:p-1">
			<div class="section flex items-start justify-between col-span-12 row-span-1">
				<PrimaryBadge label="status"></PrimaryBadge>
				<PrimaryButton label="Close"></PrimaryButton>
			</div>
			<div class="section col-span-8 row-span-6 bg-violet-300 rounded-md mb-4">
				<p>Slug - Title</p>
				<textarea
					class="border border-black rounded-md p-1 w-full bg-violet-100"
					rows="4"
					placeholder="Enter A Description"
					name="description"
					:value="description"
					id=""></textarea>
			</div>
			<div class="flex flex-col section row-span-11 col-span-4 bg-violet-300 rounded-md w-full h-full">
				<div class="flex justify-end">
					<FontAwesomeIcon class="fa-icon" :icon="faEllipsisH" size="lg" />
				</div>
			</div>
			<div class="section col-span-8 row-span-6 bg-violet-300 rounded-md w-full h-full">
				<p>box 3</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PrimaryBadge from "../ui/badges/PrimaryBadge.vue";
import PrimaryButton from "../ui/buttons/PrimaryButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const description = ref("oihfdsa");
</script>
