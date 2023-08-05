<template>
	<div class="light-mode-hero dark:dark-mode-hero bg-no-repeat bg-contain box-border aspect-[1/0.5] dark:aspect-[1/0.45] transform-cpu w-screen relative overflow-x-hidden">
		<img
			src="@/assets/image/car.webp"
			class="dark:hidden select-none animate-[carmove_8s_alternate-reverse_infinite_linear] w-[45vw] absolute my-[calc(1vw+1vh+15%)] mx-[calc(1vw+1vh+15%)] transform-cpu"
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

onMounted(() => {
	lottie.loadAnimation({
		container: document.querySelector('#man') as HTMLElement,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: `${import.meta.env.VITE_Lottie_MAN}`,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
			hideOnTransparent: true,
			progressiveLoad: true,
		},
	});

	lottie.loadAnimation({
		container: document.querySelector('#camp_fire') as HTMLElement,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: `${import.meta.env.VITE_Lottie_FIRE}`,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
			hideOnTransparent: true,
			progressiveLoad: true,
		},
	});

	lottie.loadAnimation({
		container: document.querySelector('#moon') as HTMLElement,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		path: `${import.meta.env.VITE_Lottie_MOON}`,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
			hideOnTransparent: true,
			progressiveLoad: true,
		},
	});
});

onBeforeUnmount(() => {
	lottie.destroy();
});
</script>