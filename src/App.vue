<script setup lang="ts">
import { Transition } from '@/typings/vue';
</script>

<template>
	<router-view v-slot="{ Component, route }">
		<transition
			:mode="'out-in'"
			:enter-active-class="route.name === 'Loading' ? 'animate__animated animate__fadeInUp animate__slow' : `${(route.meta.transitions as Transition)?.enter}`"
			:leave-active-class="route.name === 'Loading' ? 'animate__animated animate__fadeOutDown' : `${(route.meta.transitions as Transition)?.leave}`">
			<component :is="Component" :key="route.name" />
		</transition>
	</router-view>
</template>
