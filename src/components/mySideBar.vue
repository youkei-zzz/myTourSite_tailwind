<template>
	<div class="fixed w-[100vw] top-0 z-50">
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
				<TransitionChild
					as="template"
					enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leave-from="opacity-100"
					leave-to="opacity-0">
					<div class="fixed inset-0 bg-gray-900/80" />
				</TransitionChild>

				<div class="fixed inset-0 flex">
					<TransitionChild
						as="template"
						enter="transition ease-in-out duration-300 transform"
						enter-from="-translate-x-full"
						enter-to="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leave-from="translate-x-0"
						leave-to="-translate-x-full">
						<DialogPanel class="relative mr-16 flex w-full max-w-[300px] flex-1">
							<TransitionChild
								as="template"
								enter="ease-in-out duration-300"
								enter-from="opacity-0"
								enter-to="opacity-100"
								leave="ease-in-out duration-300"
								leave-from="opacity-100"
								leave-to="opacity-0">
								<div class="absolute left-full top-0 flex w-16 justify-center pt-5">
									<button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
										<span class="sr-only">Close sidebar</span>
										<XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>

							<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 dark:bg-slate-800">
								<div class="flex shrink-0 mt-3 justify-between items-center">
									<img class="h-12 w-auto hidden dark:block" src="@/assets/image/light-logo.png" alt="logo" />
									<img class="h-12 w-auto dark:hidden" src="@/assets/image/dark-logo.png" alt="logo" />
									<myToggleTheme :key="dynamicWidth" class="md:block hidden"></myToggleTheme>
								</div>
								<nav class="flex flex-1 flex-col w-1/2">
									<ul role="list" class="flex flex-1 flex-col gap-y-7">
										<li>
											<ul role="list" class="-mx-2 space-y-1">
												<li v-for="item in navigation" :key="item.name">
													<a
														v-if="item.func"
														@click.prevent="item.func"
														:class="[
															item.current ? 'bg-gray-50 text-indigo-600 ' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:cursor-pointer',
														]">
														<component
															:is="item.icon"
															:class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
															aria-hidden="true" />
														{{ item.name }}
													</a>
													<router-link
														v-else
														:to="{
															path: item.href!,
														}"
														:class="[
															item.current ? 'bg-gray-50 dark:bg-gray-300 text-indigo-800' : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-300',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
														]"
														:custom="Boolean(item.func)">
														<component
															:is="item.icon"
															:class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
															aria-hidden="true" />
														{{ item.name }}
													</router-link>
												</li>
											</ul>
										</li>
										<li v-if="logInfoStore.getLogInStatus()">
											<div class="text-xs font-semibold leading-6 text-gray-400">更多</div>
											<ul role="list" class="-mx-2 mt-2 space-y-1">
												<li v-for="team in teams" :key="team.name">
													<a
														v-if="team.func"
														@click.prevent="team.func"
														:class="[
															team.current ? 'bg-gray-50 dark:bg-gray-300 text-indigo-600' : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-300',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:cursor-pointer',
														]">
														<span
															:class="[
																team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
																'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[1rem] font-medium bg-white ',
															]"
															>{{ team.index }}</span
														>
														<span class="truncate">{{ team.name }}</span>
													</a>

													<router-link
														v-else
														:to="{ path: team.href! }"
														:class="[
															team.current ? 'bg-gray-50 dark:bg-gray-300 text-indigo-600' : 'text-gray-500 hover:text-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-300',
															'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
														]">
														<span
															:class="[
																team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
																'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[1rem] font-medium bg-white',
															]"
															>{{ team.index }}</span
														>
														<span class="truncate">{{ team.name }}</span>
													</router-link>
												</li>
											</ul>
										</li>

										<li v-if="router.currentRoute.value.name === 'Blog'">手机博客右侧操作区</li>
									</ul>
								</nav>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>
		<div class="sticky top-0 z-50 flex items-center justify-between px-5 bg-white py-5 shadow-md lg:hidden dark:bg-slate-800">
			<button type="button" class="p-1 text-gray-700 lg:hidden" @click="sidebarOpen = true">
				<Bars3Icon class="h-6 w-6 dark:text-white" aria-hidden="true" />
			</button>

			<!-- 弹出框 -->
			<div class="relative flex-initial justify-center md:basis-[calc(60%)]">
				<div>
					<div class="relative" @click="emitter.emit('popover', true)">
						<input
							type="text"
							name="search"
							id="search"
							placeholder="热门景点"
							class="block bg-white dark:bg-[#1e293b] hover:cursor-pointer w-full rounded-md border-0 py-2.5 sm:py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-500 dark:focus:ring-slate-200 sm:text-sm text-xs sm:leading-6 font-bold tracking-widest" />
						<div class="absolute hover:cursor-pointer inset-y-0 right-0 flex py-1.5 pr-1.5">
							<kbd class="kbd kbd-xs font-bold text-sm">搜索</kbd>
						</div>
					</div>
					<!-- TODO:等余额足够再使用 -->
					<!-- <popOverSearch></popOverSearch> -->
				</div>
			</div>

			<div class="flex items-center gap-2">
				<!-- 购物车 -->
				<div v-if="logInfoStore.getLogInStatus()" class="dropdown dropdown-end md:hidden">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<span v-if="logInfoStore.getLogInStatus()" class="badge badge-sm indicator-item">8</span>
						</div>
					</label>
					<div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
						<div class="card-body dark:bg-slate-200 rounded-lg drop-shadow-xl space-y-5 text-center">
							<span class="font-bold text-lg dark:text-slate-500 text-primary">8件商品</span>
							<span class="dark:text-slate-500 text-primary font-semibold">总价: 999￥</span>
							<div class="card-actions">
								<button class="btn btn-block">查看购物车</button>
							</div>
						</div>
					</div>
				</div>

				<!-- 头像 -->
				<span class="relative inline-flex">
					<dropDown :drop-down-items="dropDownItems"></dropDown>
					<span v-if="logInfoStore.getLogInStatus() && other.showTip === true" class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
					</span>
				</span>
			</div>
		</div>
		<myBanner></myBanner>
	</div>
</template>

<script setup lang="ts">
import DropDownProps from '@/components/interface/dropDown';
import { useLogInfoStore } from '@/stores/modules/loginfoStore';
import myBanner from '@components/myBanner.vue';
import dropDown from '@components/myDropDown.vue';
// import popOverSearch from '@components/myPopoverSearch.vue';
import myToggleTheme from '@components/myToggleTheme.vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import {
	ArrowLeftOnRectangleIcon,
	ArrowRightOnRectangleIcon,
	Bars3Icon,
	BellAlertIcon,
	ChatBubbleBottomCenterTextIcon,
	Cog6ToothIcon,
	CurrencyYenIcon,
	EnvelopeIcon,
	HomeIcon,
	MapIcon,
	QuestionMarkCircleIcon,
	ShoppingCartIcon,
	UserIcon,
	UsersIcon,
	XMarkIcon,
} from '@heroicons/vue/24/outline';
import emitter from '@utils/emitter';
import { getCurrentInstance, h, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import myShoppingCart from './myShoppingCart.vue';

const router = useRouter();
const dynamicWidth = getCurrentInstance()?.appContext.config.globalProperties.$dynamicWidth!;
const sidebarOpen = ref(false);
const logInfoStore = useLogInfoStore();
const dropDownItems: DropDownProps[] = [];
const path = router.currentRoute.value.path;
const other = ref({ cartNumber: 8, showTip: true });

type personal = Pick<DropDownProps, 'index' | 'func' | 'name' | 'href' | 'icon'> & { current: boolean };
type navi = Pick<DropDownProps, 'name' | 'href' | 'icon' | 'func'> & { current: boolean };

const navigation: navi[] = [
	{ name: '首页', href: '/', icon: HomeIcon, current: path === '/' },
	{ name: '公告', href: '', icon: BellAlertIcon, current: path === '' },
	{ name: '定价', href: '', icon: CurrencyYenIcon, current: path === '' },
	{ name: '照片墙', href: '/travel', icon: UsersIcon, current: path === '/travel' },
	{ name: '预定计划', href: '', icon: ChatBubbleBottomCenterTextIcon, current: path === '' },
	{ name: '地图路线', href: '', icon: MapIcon, current: path === '/tourmap' },
];
const teams: personal[] = [
	{ index: 1, name: '博客', href: '/blog', icon: ChatBubbleBottomCenterTextIcon, current: path === '/blog' },
	{ index: 2, name: '帮助', href: '/help', icon: QuestionMarkCircleIcon, current: path === '/help' },
	{
		index: 3,
		name: '注销',
		func: () => {
			logInfoStore.setLogInStatus(false);
			logInfoStore.setLogOutStatus(true);
			window.location.reload();
		},
		current: false,
	},
];

if (logInfoStore.getLogOutStatus()) {
	navigation.push({ name: '登录', href: '/login', icon: ArrowRightOnRectangleIcon, current: false });
}

if (logInfoStore.getLogOutStatus()) {
	dropDownItems.push({ index: 1, name: '登录', href: '/login', icon: ArrowRightOnRectangleIcon, linkName: 'Login' });
	dropDownItems.push({ index: 2, name: '邮箱', href: 'mailto:yangs.private@qq.com', icon: EnvelopeIcon });
} else {
	dropDownItems.push(
		{
			index: 1,
			name: '个人信息',
			href: '#',
			icon: UserIcon,
			count: 1,
		},
		{
			index: 2,
			name: '设置中心',
			href: '#',
			icon: Cog6ToothIcon,
		},
		{
			index: 3,
			name: '购物车',
			href: '/shopbagview',
			icon: ShoppingCartIcon,
			count: other.value.cartNumber,
		},
		{
			index: 4,
			name: '退出',
			func: () => {
				logInfoStore.setLogInStatus(false);
				logInfoStore.setLogOutStatus(true);
				window.location.reload();
			},
			icon: ArrowLeftOnRectangleIcon,
		},
	);
}

watch(dynamicWidth, (value) => {
	if (value >= 855) {
		emitter.emit('popover', false);
	}
});
</script>
