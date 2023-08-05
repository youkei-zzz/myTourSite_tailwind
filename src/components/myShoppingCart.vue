<template>
	<Popover v-if="logInfoStore.getLogInStatus()" class="mx-2 flow-root text-sm lg:relative">
		<PopoverButton class="group -m-2 flex items-center p-2">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span class="badge badge-sm indicator-item">8</span>
				</div>
			</label>
			<span class="sr-only">items in cart, view bag</span>
		</PopoverButton>
		<transition
			enter-active-class="transition ease-out duration-200"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition ease-in duration-150"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0">
			<PopoverPanel
				class="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
				<h2 class="sr-only">Shopping Cart</h2>

				<form class="mx-auto max-w-2xl px-4">
					<ul role="list" class="divide-y divide-gray-200">
						<li v-for="product in products" :key="product.id" class="flex items-center py-6">
							<img :src="product.imageSrc" :alt="product.imageAlt" class="h-16 w-16 flex-none rounded-md border border-gray-200" />
							<div class="ml-4 flex-auto">
								<h3 class="font-bold text-gray-900">
									<router-link :to="{ name: 'Pdoverview', params: { id: product.id } }">
										{{ product.name }}
									</router-link>
								</h3>
							</div>
						</li>
					</ul>
					<button @click.prevent="router.push('/shopbagview')" class="btn btn-wide">去支付</button>
				</form>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script setup lang="ts">
import { useLogInfoStore } from '@/stores/modules/logInfoStore';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const logInfoStore = useLogInfoStore();

const products = [
	{
		id: 1,
		name: '广西之行',
		href: '/pdoverview/1',
		imageSrc: 'https://i.imgtg.com/2023/07/23/OhD5lM.jpg',
		imageAlt: '超级美丽的风景',
	},
	{
		id: 2,
		name: '江南水乡',
		href: '/pdoverview/2',
		imageSrc: 'https://i.imgtg.com/2023/07/28/OiZNkp.webp',
		imageAlt: '难以忘记的美景',
	},
];
</script>
