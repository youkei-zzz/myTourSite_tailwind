<template>
	<div>
		<myHeader class="lg:block hidden"></myHeader>
		<mySideBar class="lg:hidden block"></mySideBar>

		<main>
			<div class="slogan z-50 mt-28 lg:mt-36 mx-auto dark:text-slate-400 text-primary font-bold font-primary text-center mb-2">
				<h1 class="text-3xl md:text-2xl mi:text-base mb-5">瞬间永存，珍藏终身</h1>
				<p class="text-base md:text-sm mi:text-xs w-2/3 mx-auto">令人难忘畅想的旅途近在咫尺，和我们一起开始你的旅程，使你的梦想成真</p>
			</div>

			<heroBackground></heroBackground>
			<landingPage></landingPage>
			<myAutoSearch></myAutoSearch>

			<section>
				<div id="ad1" class="lg:flex lg:my-40 max-w-5xl drop-shadow-2xl mx-auto font-semibold">
					<div class="bg-[url('https://i.imgtg.com/2023/07/28/OiZkqC.webp')] w-full bg-no-repeat bg-top bg-contain md:bg-none"></div>
					<img src="https://i.imgtg.com/2023/07/28/OiZkqC.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" />
					<section class="basis-full">
						<div class="md:hidden mt-5">
							<h1 class="md:text-center text-[2vmax]">开始一场旅途，记录一些心情</h1>
							<p class="container lg:line-clamp-3 leading-[40px] md:px-5 w-full text-left mt-5">
								分享这段旅程，让每张照片成为生命中璀璨的闪光点，传递对自然之美的独特感悟。准备好了吗？一同探索，让镜头定格风景，让世界见证我们的分享与热爱。
							</p>
						</div>

						<div class="lg:hidden hero-content text-center">
							<div class="max-w-xl dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">准备一场 说走就走的旅途</h1>
								<p class="!leading-[50px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									<!-- 让你的旅程变得更加丰富多彩！无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。尽情享受旅途的每一个时刻。让我们携手，让旅行成为您生命中的闪耀之一。 -->
									无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。一同分享这段旅程，让每一张照片都成为生命中闪耀的一刻。
								</p>
							</div>
						</div>
						<div class="text-left md:text-center pb-5 pt-2">
							<strong>
								<a
									href="/"
									aria-label=""
									class="inline-flex md:justify-center md:w-fit font-semibold transition-colors duration-underline decoration-2200 text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link underline-offset-8 decoration-wavy">
									分享您的旅程
									<font-awesome-icon :icon="['fas', 'reply-all']" size="xl" class="pl-1 text-secondary pt-1" />
								</a>
							</strong>
						</div>
					</section>
				</div>

				<div id="ad2" class="lg:flex flex-row-reverse max-w-6xl drop-shadow-2xl mx-auto font-semibold lg:my-36 mt-20 mb-56">
					<div class="bg-[url('https://i.imgtg.com/2023/07/28/OiZxAL.webp')] w-full bg-no-repeat bg-top bg-contain"></div>
					<img src="https://i.imgtg.com/2023/07/28/OiZxAL.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" />
					<section class="basis-full max-w-3xl h-60">
						<div class="md:hidden mt-6">
							<h1 class="md:text-center text-[2vmax]">准备好了吗？出发吧</h1>
							<p class="container lg:line-clamp-3 leading-[35px] md:px-5 w-full text-left mt-6">
								踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。
							</p>
						</div>

						<div class="lg:hidden hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">准备好了吗？出发吧</h1>
								<p class="mb-5 leading-[40px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。
								</p>
							</div>
						</div>
					</section>
				</div>

				<div id="ad3" class="lg:flex lg:my-40 max-w-5xl drop-shadow-2xl mx-auto font-semibold mt-20">
					<div class="bg-[url('https://i.imgtg.com/2023/07/28/OiZWYN.webp')] bg-no-repeat bg-top bg-contain md:bg-none w-full"></div>
					<img src="https://i.imgtg.com/2023/07/28/OiZWYN.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" />
					<section class="basis-full h-56">
						<div class="md:hidden mt-5">
							<h1 class="md:text-center   text-[2vmax]">为了更好的明天!</h1>
							<p class="container lg:line-clamp-3 leading-[40px] w-full  mt-5">
								无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。一同分享这段旅程，让每一张照片都成为生命中闪耀的一刻。
							</p>
						</div>
						<div class="lg:hidden hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">为了更好的明天!</h1>
								<p class="mb-5 !leading-[40px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									每一张图片，都是你在世界各地留下的一笔独特的生活印记，让每一帧都成为你生命中不可或缺的一部分，让您尽情享受旅途的每一个时刻,用照片记录笑声和感动。
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>

			<myPrice></myPrice>
			<Testimony></Testimony>
			<MyEditor></MyEditor>
			<div id="backTop" class="aniamate__animated">
				<el-backtop :visibility-height="350" :right="16" :bottom="100" style="box-shadow: none; --el-backtop-bg-color: transparent; --el-backtop-hover-bg-color: transparent">
					<font-awesome-icon :icon="['fas', 'circle-arrow-up']" size="2xl" style="--fa-animation-duration: 1.5s" />
				</el-backtop>
			</div>
		</main>
		<myFooter></myFooter>
	</div>
</template>

<script setup lang="ts">
import MyEditor from '@/components/myEditor.vue';
import myAutoSearch from '@components/myAutoSearch.vue';
import myFooter from '@components/myFooter.vue';
import myHeader from '@components/myHeader.vue';
import heroBackground from '@components/myHeroBackgound.vue';
import landingPage from '@components/myLandingPage.vue';
import myPrice from '@components/myPrice.vue';
import mySideBar from '@components/mySideBar.vue';
import Testimony from '@components/myTestimony.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
	const tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: '#ad1',
			start: 'top-=130 60%',
			end: 'center 40%',
			scrub: 3,
			toggleActions: 'play none none none',
		},
	});
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: '#ad2',
			start: 'top-=100 60%',
			end: 'center 40%',
			scrub: 3,
			toggleActions: 'play none reverse none',
		},
	});
	const tl3 = gsap.timeline({
		scrollTrigger: {
			trigger: '#ad3',
			start: 'top-=70 60%',
			end: 'center 40%',
			scrub: 3,
			toggleActions: 'play none reverse none',
		},
	});
	tl1.from('#ad1', { opacity: 0 }).to('#ad1', { opacity: 1, duration: 1 });
	tl2.from('#ad2', { opacity: 0 }).to('#ad2', { opacity: 1, duration: 1 });
	tl3.from('#ad3', { opacity: 0 }).to('#ad3', { opacity: 1, duration: 1 });
});
</script>

<style>
@import '../assets/css/algoliaCustom.css';
</style>
