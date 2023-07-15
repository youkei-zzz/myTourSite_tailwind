<template>
	<div>
		<myHeader></myHeader>
		<mySideBar></mySideBar>
		<div class="isolate bg-white dark:bg-[#2e3741] px-6 mi:py-16 py-24 lg:px-8">
			<div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
				<div
					class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr dark:from-[#ff9dc6] dark:to-[#a49eff] from-[#f76ba5] to-[#837ce4] opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
					style="
						clip-path: polygon(
							74.1% 44.1%,
							100% 61.6%,
							97.5% 26.9%,
							85.5% 0.1%,
							80.7% 2%,
							72.5% 32.5%,
							60.2% 62.4%,
							52.4% 68.1%,
							47.5% 58.3%,
							45.2% 34.5%,
							27.5% 76.7%,
							0.1% 64.9%,
							17.9% 100%,
							27.6% 76.8%,
							76.1% 97.7%,
							74.1% 44.1%
						);
					" />
			</div>

			<div class="antialiased">
				<transition-group
					enter-active-class="transition duration-150 ease-out transform"
					enter-class="opacity-0"
					enter-to-class="opacity-100"
					leave-active-class="absolute transition duration-100 ease-in transform"
					leave-class="opacity-100"
					leave-to-class="opacity-0"
					move-class="transition duration-300 ease-in-out transform"
					tag="main"
					class="px-4 sm:px-6 space-y-6 mt-[3vh]">
					<h1 key="title" class="text-center font-semibold text-xl text-gray-900 dark:text-slate-300">需要什么帮助?</h1>

					<section key="search" class="max-w-md mx-auto">
						<label class="relative block w-full mx-auto">
							<span class="sr-only">Search</span>
							<span class="block w-full shadow-lg rounded-lg">
								<Listbox as="div" v-model="selected">
									<div class="relative mt-2">
										<ListboxButton
											class="relative w-full cursor-default rounded-md bg-white dark:bg-slate-800/60 py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
											<span class="flex items-center">
												<font-awesome-icon :icon="['fas', 'caret-down']" class="h-6 w-6 dark:text-white" />
												<span class="ml-3 block truncate font-semibold" :class="[selected.id < 4 ? '' : 'text-slate-400 tracking-widest']">{{ selected.content }}</span>
											</span>
											<span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
												<ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
											</span>
										</ListboxButton>

										<transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
											<ListboxOptions
												class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base dark:bg-gray-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
												<ListboxOption as="template" v-for="resolve in question" :key="resolve.id" :value="resolve" v-slot="{ active, selected }">
													<li :class="[active ? 'bg-slate-500 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
														<a href="javascript:void(0)" class="flex items-center py-2">
															<span v-if="resolve.id < 4" class="basis-5">
																<font-awesome-icon v-if="resolve.id === 1" :icon="['fas', `${resolve?.svg}`]" bounce style="--fa-animation-duration: 1.55s" />
																<font-awesome-icon v-else-if="resolve.id === 2" :icon="['fas', `${resolve?.svg}`]" bounce style="--fa-animation-duration: 1.7s" />
																<font-awesome-icon v-else-if="resolve.id === 3" :icon="['fas', `${resolve?.svg}`]" bounce style="--fa-animation-duration: 1.8s" />
															</span>
															<span v-else class="basis-5">
																<font-awesome-icon :icon="['fas', 'ellipsis']" :style="resolve.duration" />
															</span>
															<span class="ml-5 pl- block truncate font-semibold" v-if="resolve.id < 4">{{ resolve.content }}</span>
														</a>
													</li>
												</ListboxOption>
											</ListboxOptions>
										</transition>
									</div>
								</Listbox>
							</span>
						</label>
					</section>
					<section key="demo">
						<div class="flow-root mx-auto mi:min-w-[300px] w-[40vmax]">
							<ul role="list" class="-mb-8">
								<li v-for="(event, eventIdx) in description" :key="event.id">
									<div class="relative pb-8">
										<span v-if="eventIdx !== description.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
										<div class="relative flex space-x-3">
											<div>
												<span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
													<component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
												</span>
											</div>
											<div class="sm:flex min-w-0 flex-1 justify-between space-x-4 pt-1.5 prose prose-p:line-clamp-3 prose-p:font-primary prose-p:leading-5 mi:">
												<div>
													<p class="text-sm text-gray-500 dark:text-slate-200 font-primary">
														{{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</section>
					<section key="button" class="text-center max-w-md mx-auto py-5">
						<router-link :to="{ name: 'Home' }" class="btn">
							<font-awesome-icon :icon="['far', 'face-smile']" />
							没有找到您想要的答案? 请联系我们
						</router-link>
					</section>
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import myHeader from '@components/myHeader.vue';
import mySideBar from '@components/mySideBar.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue';
import { ChatBubbleLeftRightIcon, ChevronUpDownIcon, PaperAirplaneIcon } from '@heroicons/vue/20/solid';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const question = [
	{
		id: 1,
		content: '关于我',
		pathName: 'About',
		avatar:
			'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',
		svg: '1',
		animation: 'bounce',
		duration: '1.2s;',
	},
	{
		id: 2,
		content: '联系我们-(企业)',
		pathName: 'EsContactus',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		svg: '2',
		animation: 'bounce',
		duration: '1.5s;',
	},
	{
		id: 3,
		content: '联系我们-(个人)',
		pathName: 'PsContactus',
		avatar:
			'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg>',
		svg: '3',
		animation: 'bounce',
		duration: '1.8s;',
	},
	{
		id: 4,
		content: '查看更多',
		pathName: '',
		avatar: '',
		svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  	<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
		</svg>`,
		duration: '',
	},
];
const description = [
	{
		id: 1,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
		target: '',
		href: '#',
		date: 'Sep 20',
		datetime: '2020-09-20',
		icon: ChatBubbleLeftRightIcon,
		iconBackground: 'bg-gray-400',
	},
	{
		id: 2,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat interdum varius sit amet. Volutpat consequat mauris nunc congue.',
		target: '',
		href: '#',
		date: 'Sep 22',
		datetime: '2020-09-22',
		icon: PaperAirplaneIcon,
		iconBackground: 'bg-blue-500',
	},
	{
		id: 3,
		content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		target: '',
		href: '#',
		date: 'Sep 28',
		datetime: '2020-09-28',
		icon: ChatBubbleLeftRightIcon,
		iconBackground: 'bg-green-500',
	},
	{
		id: 4,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		target: '',
		href: '#',
		date: 'Sep 30',
		datetime: '2020-09-30',
		icon: PaperAirplaneIcon,
		iconBackground: 'bg-blue-500',
	},
	{
		id: 5,
		content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		target: '',
		href: '#',
		date: 'Oct 4',
		datetime: '2020-10-04',
		icon: ChatBubbleLeftRightIcon,
		iconBackground: 'bg-green-500',
	},
];

const selected = ref(question[3]);

watch(
	() => selected.value,
	() => {
		if (selected.value.id === 1) {
			router.push({ name: 'About' });
		} else if (selected.value.id === 2) {
			router.push({ name: 'EsContactus' });
		} else if (selected.value.id === 3) {
			router.push({ name: 'PsContactus' });
		}
	},
);
</script>
