<template>
	<div class="relative">
		<progress max="100" value="0" class="absolute z-50"></progress>
		<div>
			<!-- <div ref="loader" class="fixed top-0 left-0 right-0 bottom-0 dark:bg-slate-800 z-50 animate__animated transition-all duration-200">
				<myTransition :percentage="loadingPercentage"></myTransition>
			</div> -->
			<div class="flex items-center justify-between p-5">
				<a @click.prevent="router.back()" class="w-10 hover:dark:text-slate-100 hover:text-slate-400 transition-colors duration-200 hover:cursor-pointer">
					<component :is="ArrowLeftIcon" aria-hidden="true" />
				</a>

				<myToggleTheme class="text-right"></myToggleTheme>
			</div>
			<!-- <div ref="contentWrapper" class="hidden animate__animated ">
				<div class="content1_laptop animate__animated">
					
					<div class="chat chat-start animate__animated animate__fadeInLeft pl-[5vw]">
						<div class="chat-bubble">You underestimate my power!</div>
					</div>

					<div class="chat chat-end animate__animated animate__fadeInRight animate__duration-3s">
						<div class="chat chat-end animate__animated animate__fadeInRight animate__duration-2s animate__delay-1s px-10">
							<div class="chat-bubble">You underestimate my power!</div>
						</div>
						<div class="chat-bubble mt-5">You underestimate my power!</div>
					</div>
				</div>

				<div  class="content2_laptop animate__animated">
					<header class="flex items-center justify-center h-screen">
						<div>
							<h1 class="mb-[5vh] text-[5rem]">难忘的旅途回忆</h1>
							<h2 class="text-[2rem]">准备好了吗</h2>
						</div>
					</header>
					<section class="demo-text">
						<div class="wrapper text-[clamp(2rem,3vw,9rem)] leading-[1] font-extrabold flex" style="margin: 0 10vw 10vh 10vw">等待你的是世界的奇妙之旅，我们一起出发！</div>
					</section>
					<section class="demo-gallery">
						<ul class="wrapper flex pl-4 listnon">
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?china,nature,sig=124&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?japan,nature,sig=82&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?greece,island,sig=128&auto=compress&fm=webp" width="1240" />
							</li>
						</ul>
					</section>
					<section class="demo-gallery">
						<ul class="wrapper flex">
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?thailand,beach,sig=168&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?france,architecture,sig=139&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?united kingdom,city,sig=39&auto=compress&fm=webp" width="1240" />
							</li>
						</ul>
					</section>
					<section class="demo-gallery">
						<ul class="wrapper flex">
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?egypt,pyramid,sig=121&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?nature,sig=70&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?mexico,street,sig=63&auto=compress&fm=webp" width="1240" />
							</li>
						</ul>
					</section>
					<section class="demo-gallery">
						<ul class="wrapper flex">
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?spain,landscape,sig=160&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?india,culture,sig=88&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?peru,mountain,sig=178&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?nature,sig=175&auto=compress&fm=webp" width="1240" />
							</li>
						</ul>
					</section>
					<section class="demo-gallery">
						<ul class="wrapper flex">
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?france,city,sig=121&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?nature,sig=70&auto=compress&fm=webp" width="1240" />
							</li>
							<li class="flex-shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
								<img class="w-full bg-white h-auto" height="874" src="https://source.unsplash.com/1240x874/?mexico,street,sig=63&auto=compress&fm=webp" width="1240" />
							</li>
						</ul>
					</section>
					<section class="demo-text pl-12">
						<div class="wrapper text-[clamp(2rem,3vw,9rem)] leading-[1] font-extrabold my-[15vh] mx-0">即刻出发,与大家分享您的旅途</div>
					</section>
				</div>

			 

				<MyFooter></MyFooter>
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
import MyFooter from '@/components/myFooter.vue';
import myTransition from '@/components/myTransition.vue';
import { ArrowLeftIcon } from '@heroicons/vue/24/outline';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import imagesLoaded from 'imagesloaded';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const loadingPercentage = ref(0);
const loader = ref<HTMLElement>();
const contentWrapper = ref<HTMLElement>();
const content1 = ref<HTMLElement>();
const content2 = ref<HTMLElement>();
const router = useRouter();
const dynamicWidth = getCurrentInstance()?.appContext.config.globalProperties.$dynamicWidth!;

document.documentElement.dataset.theme = (sessionStorage.getItem('theme') as string) ?? 'light';
// gsap.registerPlugin(ScrollTrigger);
// onMounted(() => {
// 	const images = gsap.utils.toArray('img');
// 	const updateProgress = (instance: any) => (loadingPercentage.value = Math.round((instance.progressedCount * 100) / images.length));

// 	gsap.to('progress', {
// 		value: 100,
// 		ease: 'none',
// 		scrollTrigger: { scrub: 0.3 },
// 	});

// 	const showDemo = () => {
// 		document.body.style.overflowX = 'hidden';
// 		document.scrollingElement?.scrollTo(0, 0);

// 		loader.value?.classList.add('animate__fadeOut', 'pointer-events-none');
// 		contentWrapper.value?.classList.remove('hidden');
// 		contentWrapper.value?.classList.add('animate__fadeIn');

// 		content2.value?.classList.add('animate__fadeIn');
// 		content1.value?.classList.add('animate__fadeIn', 'animate__duration-2s');

// 		gsap.utils.toArray<HTMLElement>('section').forEach((section: HTMLElement, index: number) => {
// 			const w = section.querySelector('.wrapper')!;
// 			const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -0.5] : [w.scrollWidth * -0.5, 0];
// 			gsap.fromTo(
// 				w,
// 				{ x },
// 				{
// 					x: xEnd,
// 					scrollTrigger: {
// 						trigger: section,
// 						scrub: 0.5,
// 					},
// 				},
// 			);
// 		});
// 	};

// 	gsap.utils.toArray('section').forEach((section: any, index) => {
// 		const w = section.querySelector('.wrapper');
// 		const [x, xEnd] = index % 2 ? ['100%', (w - section.offsetWidth) * -1] : [w * -1, 0];
// 		gsap.fromTo(
// 			w,
// 			{ x },
// 			{
// 				x: xEnd,
// 				scrollTrigger: {
// 					trigger: section,
// 					scrub: 0.5,
// 				},
// 			},
// 		);
// 	});

// 	imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
// });
</script>

<style scoped>
@import '../assets/css/indicator.css';
.demo-gallery:not(.last) {
	padding-bottom: 1rem;
}
</style>
