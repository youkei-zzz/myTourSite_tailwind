<template>
	<div class="z-50 relative">
		<el-progress :percentage="percentage" :stroke-width="20" :text-inside="true" :color="customColorMethod" style="display: block; position: fixed; width: 100%"> </el-progress>
		<div class="flex justify-center place-content-center place-items-center">
			<div id="domId" class="lg:h-screen will-change-auto"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import lottie from 'lottie-web/build/player/lottie_light';

// const percentage = ref(0);
const customColorMethod = (percentage: number) => {
	if (percentage < 30) {
		return '#909399';
	}
	if (percentage < 60) {
		return '#e6a23c';
	}
	return '#67c23a';
};

const router = useRouter();
onMounted(() => {
	nextTick(() => {
		document.documentElement.dataset.theme = (sessionStorage.getItem('theme') as string) ?? 'light';
		const animation = lottie.loadAnimation({
			container: document.getElementById('domId') as HTMLElement,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: `${import.meta.env.VITE_Lottie_PENCIL}`,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice',
				className: 'animate__slow',
				hideOnTransparent: true,
				progressiveLoad: true,
				title: '请稍等~',
			},
		});
		animation.setSpeed(0.5);
	});
});

defineProps({
	percentage: {
		type: Number,
		required: true,
	},
});
</script>
