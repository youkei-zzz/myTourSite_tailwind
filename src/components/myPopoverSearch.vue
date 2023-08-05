<template>
	<TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
		<Dialog as="div" class="relative z-50" @close="open = false">
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0">
				<div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 z-50 overflow-y-auto pt-[12vmax] px-[5vmin]">
				<TransitionChild
					as="template"
					enter="ease-out duration-300"
					enter-from="opacity-0 scale-95"
					enter-to="opacity-100 scale-100"
					leave="ease-in duration-200"
					leave-from="opacity-100 scale-100"
					leave-to="opacity-0 scale-95">
					<DialogPanel class="mx-auto transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
						<Combobox @update:modelValue="onSelect">
							<div class="relative">
								<MagnifyingGlassIcon v-if="!showSearchAnimation" class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400" aria-hidden="true" />
								<i v-else class="fa-solid fa-sync fa-spin pointer-events-none absolute left-4 top-4 text-gray-400"></i>

								<ComboboxInput
									class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
									placeholder="搜索一下..."
									@change="handlesInput($event.target.value)" />
							</div>

							<ComboboxOptions v-if="1 > 0" static class="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800">
								<ComboboxOption v-for="scenery in searchResults" :key="scenery.id" :value="scenery" as="template" v-slot="{ active }">
									<li :class="['cursor-default select-none rounded-md px-4 py-2', active && 'bg-indigo-600 text-white']">
										{{ scenery.name }}
									</li>
								</ComboboxOption>
							</ComboboxOptions>

							<div v-if="showTip" class="px-4 py-14 text-center sm:px-14">
								<QuestionMarkCircleIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
								<p class="mt-4 text-sm text-gray-900 font-primary font-bold tracking-widest">啊哦，好像没找到</p>
							</div>
						</Combobox>
					</DialogPanel>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup lang="ts">
import { City } from '@/api/interface';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from '@heroicons/vue/24/outline';
import emitter from '@utils/emitter';
import { useThrottleFn } from '@vueuse/core';
import algoliasearch from 'algoliasearch';
import { ref } from 'vue';

const open = ref(false);
const query = ref('');
const showTip = ref(false);
const searchResults = ref<any[]>();
const showSearchAnimation = ref(false);
const algoliaClient = algoliasearch(`${import.meta.env.VITE_Algolia_ID}`, `${import.meta.env.VITE_Algolia_KEY}`);
const index = algoliaClient.initIndex('my_first_index');
const handleSearch = useThrottleFn((query: string) => {
	console.log(query);
	index.search(query).then(({ hits }) => {
		console.log(hits, typeof hits);
		if (hits.length === 0) {
			showTip.value = true;
		} else {
			showTip.value = false;
		}
		searchResults.value = hits as City.cityInfo[];
		showSearchAnimation.value = false;
	});
}, 600);

index
	.setSettings({
		attributesForFaceting: ['rating', 'searchable(rating)', 'filtersOnly(rating)'],
	})
	.then(() => {
		index
			.search('', { numericFilters: `rating>=0.5` })
			.then(({ hits }) => {
				console.log(hits);
				searchResults.value = hits as City.cityInfo[];
			})
			.catch((err) => {
				emitter.emit('error', '获取热点活动失败');
			});
		// index.searchForFacetValues('rating', '', { numericFilters: 'rating>=0.7' }).then(({ facetHits }) => {
		// 	console.log(facetHits)
		// })
	})
	.catch((err) => {
		emitter.emit('error', '搜索引擎暂时关闭');
	});

function onSelect(person: any) {
	window.location = person.url;
}

function handlesInput(query: string) {
	showSearchAnimation.value = true;
	handleSearch(query);
}

emitter.on('popover', (val) => {
	open.value = val;
});
</script>
