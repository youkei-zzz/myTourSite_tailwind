<template>
	<div class="hero min-h-screen dark:bg-[#1d232a]">
		<div class="hero-content flex-col lg:flex-row lg:space-x-20">
			<svg
				class="emoji-404 animate-[simpleBounce_2.5s_ease-in-out_infinite]"
				enable-background="new 0 0 226 249.135"
				height="249.135"
				id="Layer_1"
				overflow="visible"
				version="1.1"
				viewBox="0 0 226 249.135"
				width="226"
				xml:space="preserve">
				<circle cx="113" cy="113" fill="#FFE577" r="109" class="dark:fill-yellow-200" />
				<line
					enable-background="new    "
					fill="none"
					opacity="0.29"
					stroke="#6E6E96"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="8"
					x1="88.866"
					x2="136.866"
					y1="245.135"
					y2="245.135"
					class="dark:stroke-slate-300" />
				<line
					enable-background="new    "
					fill="none"
					opacity="0.17"
					stroke="#6E6E96"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="8"
					x1="154.732"
					x2="168.732"
					y1="245.135"
					y2="245.135"
					class="dark:stroke-slate-300" />
				<line
					enable-background="new    "
					fill="none"
					opacity="0.17"
					stroke="#6E6E96"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="8"
					x1="69.732"
					x2="58.732"
					y1="245.135"
					y2="245.135"
					class="dark:stroke-slate-300" />
				<circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
				<path
					d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
					enable-background="new    "
					fill="#FF9900"
					opacity="0.24" />
				<circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
				<ellipse cx="67.732" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106" />
				<ellipse cx="154.88" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106" />
				<path
					d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
					fill="#FFEFB5" />
				<circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" stroke-width="8" />
			</svg>
			<div class="flex flex-col items-center">
				<h2 class="my-5 p-0 text-6xl mi:text-4xl text-center text-red-400">500</h2>
				<h4 class="mb-5 p-0 text-slate-500 text-xl mi:text-base font-bold dark:text-slate-200">抱歉，遇到了未知的内部错误!<font-awesome-icon :icon="['far', 'face-sad-tear']" class="ml-3" /></h4>
				<button
					class="button-name relative cursor-pointer tracking-widest transition-[0.2s] duration-[ease] font-bold px-[50px] py-2 rounded-[30px]; background: transparent mi:!text-sm"
					@click="router.replace({ path: '/' })">
					返回主页
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
document.documentElement.dataset.theme = sessionStorage.getItem('theme') ?? 'light'
const router = useRouter();
</script>

<style scoped>
@import '../assets/css/errorButton.css';
</style>
