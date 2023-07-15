<template>
	<div class="hero min-h-screen dark:bg-[#1d232a]">
		<div class="hero-content flex-col lg:flex-row gap-10">
			<img src="@/assets/image/500.png" class="mi:w-72 md:w-[35vmax]" />
			<div class="flex flex-col items-center">
				<h2 class="my-5 p-0 text-6xl mi:text-4xl text-center text-red-400">500</h2>
				<h4 class="mb-5 p-0 text-slate-400 text-xl mi:text-sm font-bold dark:text-slate-300">抱歉，您的网络不见了!<font-awesome-icon :icon="['far', 'face-frown']" class="ml-3" /></h4>
				<button
					class="button-name relative cursor-pointer tracking-widest transition-[0.2s] duration-[ease] font-bold px-[50px] py-2 rounded-[30px]; background: transparent mi:!text-sm"
					@click="router.replace({ name: 'Home' })">
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
@import '@/assets/css/errorButton.css';
</style>
