<template>
	<div class="hero min-h-screen dark:bg-[#1d232a]">
		<div class="hero-content flex-col lg:flex-row gap-10">
			<img src="@/assets/image/403.png" class="mi:w-64 md:w-[30vmax]" alt="403" />
			<div class="flex flex-col items-center">
				<h2 class="my-5 p-0 text-6xl mi:text-4xl text-center text-red-400">500</h2>
				<h4 class="mb-5 p-0 text-slate-400 text-xl mi:text-base font-bold dark:text-slate-300">
					抱歉，您无权访问该页面!<font-awesome-icon :icon="['far', 'face-sad-cry']" class="ml-3" />
				</h4>
				<button
					class="button-name relative cursor-pointer tracking-widest transition-[0.2s] duration-[ease] font-bold px-[50px] py-2 rounded-[30px]; background: transparent mi:!text-sm"
					@click="router.replace({ name: 'Home' })">
					返回主页
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="403">
import { useRouter } from 'vue-router';
const router = useRouter();
document.documentElement.dataset.theme = sessionStorage.getItem('theme') ?? 'light';
</script>

<style scoped>
@import '../assets/css/errorButton.css';
</style>
