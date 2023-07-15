<template>
	<div ref="Err" v-if="bannerType !== undefined && bannerType === 'error'" class="absolute top-full animate__animated animate__fadeInUp inset-x-0 bottom-0">
		<div class="flex items-center gap-x-6 bg-red-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
			<span class="text-sm leading-6 font-semibold font-primary text-white relative">
				<div href="#">
					<strong class="font-semibold font-primary">啊哦! 😯</strong
					><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
						<circle cx="1" cy="1" r="1" />
					</svg>
					{{ message }}
					<font-awesome-icon :icon="['fas', 'triangle-exclamation']" class="w-5 h-5 absolute ml-1" fade size="2xs" />
				</div>
			</span>
			<div class="flex flex-1 justify-end">
				<button @click="handleClickXmark" type="button" class="p-2 focus-visible:outline-offset-[-4px]">
					<span class="sr-only">Dismiss</span>
					<XMarkIcon class="h-5 w-5 text-white" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>

	<div
		v-else-if="bannerType !== undefined && bannerType === 'normal'"
		ref="Norm"
		class="absolute top-full w-full animate__animated animate__fadeInUp isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
		<div class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
			<div
				class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#fc4e96] to-[#675dfa] opacity-30"
				style="
					clip-path: polygon(
						74.8% 41.9%,
						97.2% 73.2%,
						100% 34.9%,
						92.5% 0.4%,
						87.5% 0%,
						75% 28.6%,
						58.5% 54.6%,
						50.1% 56.8%,
						46.9% 44%,
						48.3% 17.4%,
						24.7% 53.9%,
						0% 27.9%,
						11.9% 74.2%,
						24.9% 54.1%,
						68.6% 100%,
						74.8% 41.9%
					);
				" />
		</div>
		<div class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
			<div
				class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
				style="
					clip-path: polygon(
						74.8% 41.9%,
						97.2% 73.2%,
						100% 34.9%,
						92.5% 0.4%,
						87.5% 0%,
						75% 28.6%,
						58.5% 54.6%,
						50.1% 56.8%,
						46.9% 44%,
						48.3% 17.4%,
						24.7% 53.9%,
						0% 27.9%,
						11.9% 74.2%,
						24.9% 54.1%,
						68.6% 100%,
						74.8% 41.9%
					);
				" />
		</div>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
			<p class="text-sm leading-6 text-gray-900">
				<strong class="font-semibold">有新的通知! </strong
				><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
					<circle cx="1" cy="1" r="1" /></svg
				>{{ message }}
			</p>
			<a
				href="#"
				class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
				>赶紧来看看 <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		<div class="flex flex-1 justify-end">
			<button @click="handleClickXmark" type="button" class="p-3 focus-visible:outline-offset-[-4px]">
				<span class="sr-only">Dismiss</span>
				<XMarkIcon class="h-5 w-5 text-gray-900" aria-hidden="true" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid';
import emitter from '@utils/emitter';
import { onMounted, ref } from 'vue';

let bannerType = ref<string | undefined>(undefined);
let message = ref<string | undefined>(undefined);
let Err = ref<HTMLElement | null>();
let Norm = ref<HTMLElement | null>();

emitter.on('error', (msg) => {
	bannerType.value = 'error';
	message.value = msg;
	Err.value?.classList.remove('pointer-events-none');
	Err.value?.classList.remove('animate__fadeOutDown');
	Err.value?.classList.add('animate__fadeInUp');
});

emitter.on('notify', (msg) => {
	bannerType.value = 'normal';
	message.value = msg;
	Norm.value?.classList.remove('pointer-events-none');
	Norm.value?.classList.remove('animate__fadeOutDown');
	Norm.value?.classList.add('animate__fadeInUp');
});

let handleClickXmark = () => {
	if (Norm.value) {
		Norm.value?.classList.remove('animate__fadeInUp');
		Norm.value?.classList.add('animate__fadeOutDown');
	} else {
		Err.value?.classList.remove('animate__fadeInUp');
		Err.value?.classList.add('animate__fadeOutDown');
	}
};

onMounted(() => {
	Err.value?.addEventListener('animationend', () => {
		if (Err.value?.classList.contains('animate__fadeOutDown')) {
			Err.value?.classList.add('pointer-events-none');
		}
	});
	Norm.value?.addEventListener('animationend', () => {
		if (Norm.value?.classList.contains('animate__fadeOutDown')) {
			Norm.value?.classList.add('pointer-events-none');
		}
	});
});
</script>
