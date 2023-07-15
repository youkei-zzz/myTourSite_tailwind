<template>
	<div class="z-50 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 items-center">
			<h2 class="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:mb-6 group">
				<span class="inline-block sm:mb-4 tracking-wider text-xl md:text-base dark:text-slate-400"> 我们最受欢迎的旅程 </span>
				<div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
			</h2>

			<div class="stats shadow-lg border w-full lg:w-auto dark:bg-slate-700">
				<div class="stat">
					<div class="stat-title">历史访问量：</div>
					<div class="stat-value">3600</div>
					<div class="stat-desc">较上个月增长<strong>21%</strong></div>
				</div>
			</div>
		</div>

		<div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
			<a href="/" aria-label="View Item" v-for="item in lists" :key="item.name">
				<div class="ImgContainer relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
					<img :ref="item.name" class="object-cover w-full h-56 md:h-64 xl:h-80" :src="item.imgUrl" :alt="item.name" />
					<div
						:class="item.name"
						class="absolute flex place-content-center place-items-center inset-0 px-6 py-4 transition-opacity duration-300 bg-black bg-opacity-75 animate__animated">
						<span class="loading bg-white bg-opacity-100 loading-infinity loading-lg"></span>
					</div>
				</div>
			</a>
		</div>

		<div class="text-center">
			<router-link
				:to="{ name: 'Travel' }"
				class="inline-flex items-center font-semibold transition-colors duration-200 text-slate-800 hover:text-slate-500 underline-offset-8 underline decoration-2 dark:text-slate-400 dark:hover:text-slate-100"
				>参观我们的照片墙<svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
					<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path></svg
			></router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import imagesloaded from 'imagesloaded';
import { onMounted, ref } from 'vue';

const loading = ref(true);
// CAUTION: name不能重复,因为会导致class重复而使得一个图片加载后另外一个还未加载的图片的加载效果也会消失
const lists = [
	{
		imgUrl: 'https://source.unsplash.com/1240x874/?thailand,beach,sig=168',
		name: 'thailandBeach',
	},
	{
		imgUrl: 'https://source.unsplash.com/1240x874/?japan,nature,sig=82',
		name: 'JapanNature',
	},
	{
		imgUrl: 'https://source.unsplash.com/1240x874/?china,city,sig=124',
		name: 'chinaCity',
	},
	{
		imgUrl: 'https://source.unsplash.cn/1240x874/?france,nature,sig=139',
		name: 'france',
	},
];

onMounted(() => {
	const ImgContainer = document.getElementsByClassName('ImgContainer');

	imagesloaded(ImgContainer)
		.on('progress', function (instance: any, image: any) {
			const img = image.img as HTMLImageElement;
			document.getElementsByClassName(img.alt)[0].classList.add('animate__fadeOut');
		})
		.on('fail', function (instance: any) {
			const images = instance.images as [];
			images.forEach((LoadingImage: any) => {
				LoadingImage.isLoaded === false && ((LoadingImage.img as HTMLImageElement).src = 'https://i.imgtg.com/2023/07/15/OzcE8S.png');
			});
		});
});
</script>
