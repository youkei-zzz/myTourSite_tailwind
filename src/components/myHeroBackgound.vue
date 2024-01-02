<template>
	<div class="relative light-mode-hero dark:opacity-50 bg-no-repeat bg-contain box-border aspect-[1/0.5] transform-cpu w-screen  overflow-x-hidden">
		<img
			src="@/assets/image/car.webp"
			class=" select-none animate-[carmove_8s_alternate-reverse_infinite_linear] w-[45vw] absolute my-[calc(1vw+1vh+15%)] mx-[calc(1vw+1vh+15%)] transform-cpu"
			alt="首页背景" />
		<div class="hidden dark:block">
			<div id="man" class="absolute bottom-[calc(3%)] w-[calc(40%)]"></div>
			<div id="camp_fire" class="absolute w-[calc(8%)] mi:w-7 bottom-[calc(3.5%)] left-[calc(37%)]"></div>
			<div id="moon" class="absolute w-[calc(8%)] mi:w-16 right-[calc(12%)] top-[calc(2%)] animate__animated animate__fadeInDown animate__slow animate__duration-2s"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web/build/player/lottie_light';
import { onBeforeUnmount, onMounted } from 'vue';

</script>