<template>
	<div>
		<span class="sr-only"> {{ theme }} </span>
		<Switch
			v-model="enabled"
			:class="[
				enabled ? 'bg-slate-500' : 'bg-gray-200',
				'relative mt-1 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-1 self-center  mr-2',
			]">
			<span
				:class="[
					enabled ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ',
				]">
				<span
					:class="[
						enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
						'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
					]"
					aria-hidden="true">
					<font-awesome-icon :icon="['fas', 'sun']" class="h-5 w-5 text-yellow-500 fill-current" />
				</span>
				<span
					:class="[
						enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out ',
						'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ',
					]"
					aria-hidden="true">
					<font-awesome-icon :icon="['fas', 'moon']" class="h-5 w-5 text-blue-700 fill-current" />
				</span>
			</span>
		</Switch>
	</div>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue';
import { useStorage } from '@vueuse/core';
import { nextTick, ref, watch } from 'vue';

const enabled = ref(false);
const theme = useStorage('theme', enabled.value ? 'dark' : 'light', sessionStorage);

const toggleTheme = async (mode: string) => {
	await nextTick(() => {
		theme.value = mode;
		enabled.value = mode === 'dark';
		document.documentElement.dataset.theme = theme.value;
	});
};

if (!sessionStorage.getItem('theme')) {
	sessionStorage.setItem('theme', 'light');
} else {
	theme.value = sessionStorage.getItem('theme') as string;
	toggleTheme(theme.value);
}

watch(enabled, (val) => {
	toggleTheme(val ? 'dark' : 'light');
});

defineOptions({
	inheritAttrs: true,
});
</script>
