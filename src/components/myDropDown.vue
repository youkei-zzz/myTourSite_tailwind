<template>
	<Menu as="div" class="relative">
		<div>
			<MenuButton class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
				<div v-if="logInfoStore.getLogOutStatus()" class="flex items-center justify-start space-x-3">
					<span class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-100">
						<svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
						</svg>
					</span>
				</div>
				<img
					v-else
					class="rounded-full h-10 w-10"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&webp=format&fit=facearea&facepad=2&w=256&h=256&q=60"
					alt="" />
			</MenuButton>
		</div>
		<transition
			enter-active-class="transition duration-100 ease-out"
			enter-from-class="transform scale-95 opacity-0"
			enter-to-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-from-class="transform scale-100 opacity-100"
			leave-to-class="transform scale-95 opacity-0">
			<MenuItems class="absolute right-0 z-10 w-48 py-1 mt-4 origin-top-right bg-white dark:bg-slate-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
				<MenuItem v-for="item in dropDownItems" :key="item.href" v-slot="{ active }" class="">
					<a
						@click.prevent="dropDownLinkClick(item)"
						:href="item.href"
						:class="[
							active ? 'bg-slate-400 text-white dark:bg-slate-400/30 dark:text-slate-50' : '',
							'px-2 py-2  text-sm text-primary dark:text-slate-400 hover:cursor-pointer dark:bg-slate-700  flex items-center',
						]">
						<component
							:is="item.icon ?? XCircleIcon"
							:class="[active ? 'text-indigo-600 dark:text-white' : 'text-gray-400 group-hover:text-indigo-600', ' mr-1 inline h-6 w-6 shrink-0']"
							aria-hidden="true" />
						{{ item.name }}

						<span
							v-if="item.count"
							class="w-9 ml-10 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
							aria-hidden="true"
							>{{ String(item.count).slice(0, 3) }}
						</span>
					</a>
				</MenuItem>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup lang="ts">
import DropDownProps from '@/components/interface/dropDown';
import { useLogInfoStore } from '@/stores/modules/logInfoStore';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { XCircleIcon } from '@heroicons/vue/24/outline';
import { PropType } from 'vue';
import { useRouter } from 'vue-router';

const logInfoStore = useLogInfoStore();
const router = useRouter();

defineProps({
	dropDownItems: {
		type: Object as PropType<DropDownProps[]>,
		default: () => {
			return [
				{
					name: '1',
					href: '#',
				},
				{
					name: '2',
					href: '#',
				},
				{
					name: '3',
					href: '#',
				},
			];
		},
	},
});

const dropDownLinkClick = (item: DropDownProps) => {
	item.func && item.func();
	item.href && router.push(item.href);
};
</script>

<style scoped>
div a {
	font-family: theme('fontFamily.primary');
	/* color: theme('colors.primary'); */
	font-size: theme('fontSize.sm');
	font-weight: theme('fontWeight.bold');
}
</style>
