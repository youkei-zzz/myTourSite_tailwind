<template>
	<header class="myHeader z-[1000] fixed top-0 w-[100vw] hidden lg:fixed lg:z-50 lg:flex bg-white dark:bg-slate-800 items-center py-2 shadow-md navbar-nav justify-evenly">
		<section id="tag" class="hover:cursor-pointer ml-2">
			<a href="/">
				<img src="https://i.imgtg.com/2023/05/14/OMBppN.png" alt="logo" class="dark:hidden xl:block hidden" />
				<img src="https://i.imgtg.com/2023/05/14/OMBR5L.png" alt="logo-light" class="dark:xl:block hidden" />
				<img src="@/assets/image/dark-logo.png" alt="" class="block xl:hidden dark:hidden" />
				<img src="@/assets/image/light-logo.png" alt="" class="xl:dark:hidden dark:block hidden" />
			</a>
		</section>
		<section></section>
		<section class="flex-initial basis-[70%] lg:basis-3/5 items-center grid justify-center text-center grid-cols-5 md:flex-grow text-primary dark:text-slate-400">
			<span class="font-bold nav-item md:text-sm">
				<router-link :to="{ name: 'Home' }" class="hover:cursor-pointer">
					<font-awesome-icon :icon="['fas', 'house']" class="pr-1" />
					主页
				</router-link>
			</span>

			<span class="dropdown dropdown-hover">
				<font-awesome-icon :icon="['fas', 'compass']" class="pr-1" />
				<a tabindex="0" class="m-1 font-primary font-bold cursor-pointer">活动</a>
				<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-2xl bg-slate-50 dark:bg-slate-600 rounded-box w-52">
					<li>
						<router-link :to="{ name: 'Travel' }" class="font-semibold text-center dark:hover:text-slate-50">旅途纪实</router-link>
					</li>
					<li><router-link :to="{ name: '' }" class="font-semibold dark:hover:text-slate-50">正在进行</router-link></li>
				</ul>
			</span>

			<span class="font-bold nav-item font-primary md:text-sm">
				<router-link :to="{ name: '' }" class="hover:cursor-pointer">
					<font-awesome-icon :icon="['fas', 'bullhorn']" class="pr-[1vmin]" />
					公告
				</router-link>
			</span>

			<span class="font-bold _notif nav-item font-primary md:text-sm">
				<router-link :to="{ name: 'Blog' }" class="hover:cursor-pointer">
					<font-awesome-icon :icon="['fas', 'camera']" class="pr-1" />
					社交
				</router-link>
			</span>

			<span class="font-bold _notif nav-item font-primary md:text-sm">
				<router-link to="/help" class="hover:cursor-pointer">
					<font-awesome-icon :icon="['fas', 'circle-question']" bounce style="--fa-animation-duration: 2s" />
					帮助
				</router-link>
			</span>
		</section>

		<section></section>
		<section class="flex gap-3 justify-center text-center items-center">
			<!-- 主题切换 -->
			<myToggleTheme :key="dynamicWidth"></myToggleTheme>
			<!-- 购物车 -->
			<myShoppingCart></myShoppingCart>

			<!-- 头像 -->
			<Disclosure as="nav" v-if="logInfoStore.getLogInStatus()">
				<div>
					<div class="relative flex items-center justify-evenly h-16">
						<span class="relative inline-flex">
							<!-- 头像下拉框 -->
							<dropDown :drop-down-items="dropDownItems"></dropDown>
							<!-- 指示灯 -->
							<span v-if="logInfoStore.getLogInStatus() && other.showTip" class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
								<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
								<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
							</span>
						</span>
					</div>
				</div>
			</Disclosure>

			<div class="flex md:hidden items-center" v-if="logInfoStore.getLogOutStatus()">
				<div class="LogIn scale-90 mr-3">
					<font-awesome-icon icon="fa-solid fa-right-from-bracket" class="absolute z-20 top-[15px] left-4" />
					<router-link :to="{ name: 'Login' }">
						<button class="">
							<span class="span-mother leading-[1] text-sm">
								<span>登</span>
								<span>录</span>
							</span>
							<span class="span-mother2 leading-[1] top-[14px] text-sm">
								<span>登</span>
								<span>录</span>
							</span>
						</button>
					</router-link>
				</div>

				<div class="email_linkage scale-90 mr-5">
					<font-awesome-icon icon="fa-solid fa-envelope" class="absolute z-20 top-[15px] left-3 dark:text-slate-500" />
					<a href="mailto:yangs.private@qq.com">
						<button>
							<span class="span-mother leading-[1] text-sm">
								<span>邮</span>
								<span>箱</span>
							</span>
							<span class="span-mother2 leading-[1] text-sm top-[14px]">
								<span>腾讯</span>
								<span>邮箱</span>
							</span>
						</button>
					</a>
				</div>
			</div>
		</section>

		<myBanner></myBanner>
	</header>
</template>

<script setup lang="ts">
import DropDownProps from '@/components/interface/dropDown';
import { useLogInfoStore } from '@/stores/modules/logInfoStore';
import myBanner from '@components/myBanner.vue';
import dropDown from '@components/myDropDown.vue';
import myShoppingCart from '@components/myShoppingCart.vue';
import myToggleTheme from '@components/myToggleTheme.vue';
import { Disclosure } from '@headlessui/vue';
import { ArrowLeftOnRectangleIcon, Cog6ToothIcon, UserIcon } from '@heroicons/vue/24/outline';
import { getCurrentInstance, ref } from 'vue';

const other = ref({ showTip: true });
const dynamicWidth = getCurrentInstance()?.appContext.config.globalProperties.$dynamicWidth!;
const logInfoStore = useLogInfoStore();
const dropDownItems: DropDownProps[] = [
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
		name: '退出',
		func: function () {
			logInfoStore.setLogOutStatus(true);
			logInfoStore.setLogInStatus(false);
			window.location.reload();
		},
		icon: ArrowLeftOnRectangleIcon,
	},
];
</script>

<style scoped>
@import '../assets/css/navbar.css';
@import '../assets/css/emailButton.css';
@import '../assets/css/loginButton.css';
</style>
