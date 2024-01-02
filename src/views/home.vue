<template>
	<div class="overflow-x-hidden">
		<myHeader class="lg:block hidden"></myHeader>
		<mySideBar class="lg:hidden block"></mySideBar>

		<main class="pb-[10vh]">
			<div class="slogan z-50 mt-28 lg:mt-36 mx-auto dark:text-slate-400 text-primary font-bold font-primary text-center mb-2">
				<h1 class="text-3xl md:text-2xl mi:text-base mb-5">瞬间永存，珍藏终身</h1>
				<p class="text-xl md:text-xl mi:text-xs w-2/3 mx-auto">令人难忘畅想的旅途近在咫尺，和我们一起开始你的旅程，使你的梦想成真</p>
			</div>

			<heroBackground></heroBackground>
			<landingPage></landingPage>
			<myAutoSearch></myAutoSearch>

			<section class="relative">
				<div id="ad1" class="lg:flex lg:my-36 max-w-5xl drop-shadow-2xl mx-auto font-semibold">
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
									无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。一同分享这段旅程，让每一张照片都成为生命中闪耀的一刻。
								</p>
							</div>
						</div>
						<div class="text-center md:text-center pb-5 pt-2">
							<strong>
								<a
									href="/"
									aria-label=""
									class="inline-flex md:justify-center md:w-fit font-semibold transition-colors text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link underline-offset-8 decoration-double">
									分享您的旅途风景
									<font-awesome-icon :icon="['fas', 'reply-all']" size="xl" class="pl-1 text-secondary pt-1" />
								</a>
							</strong>
						</div>
					</section>
				</div>

				<div id="ad2" class="lg:flex flex-row-reverse max-w-6xl drop-shadow-2xl mx-auto font-semibold lg:my-28">
					<div class="bg-[url('https://i.imgtg.com/2023/07/28/OiZxAL.webp')] w-full bg-no-repeat bg-top bg-contain"></div>
					<img src="https://i.imgtg.com/2023/07/28/OiZxAL.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" />
					<section class="basis-full max-w-3xl h-60">
						<div class="md:hidden mt-6">
							<h1 class="md:text-center text-right text-[2vmax]">准备好了吗？出发吧</h1>
							<p class="container text-right lg:line-clamp-3 leading-[35px] md:px-5 w-full mt-6">
								踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。
							</p>
						</div>

						<div class="lg:hidden hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">准备好了吗？出发吧</h1>
								<p class="mb-5 leading-[40px] lg:text-right mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。
								</p>
							</div>
						</div>

						<div class="text-center md:text-center pb-5 pt-2">
							<strong>
								<font-awesome-icon :icon="['fas', 'reply-all']" size="xl" class="pl-1 rotate-180 text-secondary pt-1" />
								<a
									href="/"
									aria-label=""
									class="inline-flex md:justify-center md:w-fit font-semibold transition-colors text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link decoration-double underline-offset-8">
									看看热门风景？
								</a>
							</strong>
						</div>
					</section>
				</div>

				<div id="ad3" class="lg:flex lg:my-40 max-w-5xl drop-shadow-2xl mx-auto font-semibold mt-20">
					<div class="bg-[url('https://i.imgtg.com/2023/07/28/OiZWYN.webp')] bg-no-repeat bg-top bg-contain md:bg-none w-full"></div>
					<img src="https://i.imgtg.com/2023/07/28/OiZWYN.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" />
					<section class="basis-full h-56">
						<div class="md:hidden mt-5">
							<h1 class="md:text-center text-[2vmax]">为了更好的明天!</h1>
							<p class="container lg:line-clamp-3 leading-[40px] w-full mt-5">
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

			<div class="relative pb-14 pt-10 sm:py-24">
				<div class="relative lg:static xl:pl-10">
					<div
						class="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
						<svg
							aria-hidden="true"
							viewBox="0 0 668 1069"
							width="668"
							height="1069"
							fill="none"
							class="absolute hidden dark:block left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]">
							<defs>
								<clipPath id=":Rqla:-clip-path"><path fill="#fff" transform="rotate(-180 334 534.4)" d="M0 0h668v1068.8H0z"></path></clipPath>
							</defs>
							<g opacity=".4" clip-path="url(#:Rqla:-clip-path)" stroke-width="4">
								<path opacity=".3" d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474" stroke="#334155"></path>
								<path
									d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588"
									stroke="#334155"></path>
								<path
									d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175"
									stroke="#334155"></path>
								<circle cx="83.5" cy="384.1" r="10.438" transform="rotate(-180 83.5 384.1)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="83.5" cy="200.399" r="10.438" transform="rotate(-180 83.5 200.399)" stroke="#334155"></circle>
								<circle cx="83.5" cy="81.412" r="10.438" transform="rotate(-180 83.5 81.412)" stroke="#334155"></circle>
								<circle cx="183.699" cy="375.75" r="10.438" transform="rotate(-180 183.699 375.75)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="183.699" cy="563.625" r="10.438" transform="rotate(-180 183.699 563.625)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="384.1" cy="651.3" r="10.438" transform="rotate(-180 384.1 651.3)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="484.301" cy="574.062" r="10.438" transform="rotate(-180 484.301 574.062)" fill="#0EA5E9" fill-opacity=".42" stroke="#0EA5E9"></circle>
								<circle cx="384.1" cy="749.412" r="10.438" transform="rotate(-180 384.1 749.412)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="384.1" cy="1027.05" r="10.438" transform="rotate(-180 384.1 1027.05)" stroke="#334155"></circle>
								<circle cx="283.9" cy="924.763" r="10.438" transform="rotate(-180 283.9 924.763)" stroke="#334155"></circle>
								<circle cx="183.699" cy="870.487" r="10.438" transform="rotate(-180 183.699 870.487)" stroke="#334155"></circle>
								<circle cx="283.9" cy="738.975" r="10.438" transform="rotate(-180 283.9 738.975)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="83.5" cy="695.138" r="10.438" transform="rotate(-180 83.5 695.138)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="83.5" cy="484.3" r="10.438" transform="rotate(-180 83.5 484.3)" fill="#0EA5E9" fill-opacity=".42" stroke="#0EA5E9"></circle>
								<circle cx="484.301" cy="432.112" r="10.438" transform="rotate(-180 484.301 432.112)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="584.5" cy="432.112" r="10.438" transform="rotate(-180 584.5 432.112)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="584.5" cy="642.95" r="10.438" transform="rotate(-180 584.5 642.95)" fill="#1E293B" stroke="#334155"></circle>
								<circle cx="484.301" cy="851.699" r="10.438" transform="rotate(-180 484.301 851.699)" stroke="#334155"></circle>
								<circle cx="384.1" cy="256.763" r="10.438" transform="rotate(-180 384.1 256.763)" stroke="#334155"></circle>
							</g>
						</svg>
					</div>
					<div class="relative">
						<img
							alt=""
							fetchpriority="high"
							width="530"
							height="530"
							decoding="async"
							data-nimg="1"
							class="absolute -right-24 top-30"
							style="color: transparent"
							src="/src/assets/image/blur-indigo.webp" /><img
							alt=""
							fetchpriority="high"
							width="567"
							height="567"
							decoding="async"
							data-nimg="1"
							class="absolute haha -bottom-[350px] right-[200px]"
							style="color: transparent"
							src="/src/assets/image/blur-cyan.webp" />
						<div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"></div>
						<div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"></div>
					</div>
				</div>

				<div class="relative pb-20 pt-10 sm:pb-16">
					<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
						<div class="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
							<h1 class="text-3xl font-bold justify-self-center text-blue-600 dark:text-slate-300 sm:text-6xl sm:justify-center">
								<span class="sr-only">Tralive - </span>探索世界，分享心动瞬间
							</h1>
							<div class="mt-6 space-y-6 text-base tracking-tight text-blue-900 dark:text-slate-400">
								<p>无论是穿越大陆还是漫游异国风情，让我们一同记录这段充满激情的旅途。每一张照片都是生命中的璀璨瞬间，是对大自然之美的独特感悟。</p>
								<p>在这里，您将发现分享是一种美好的交流方式。与您一同分享最新的旅行心得，一同感受每个旅行者的独特视角，让这个平台成为我们共同记录与交流的精彩空间。</p>
							</div>
							<a
								class="inline-flex justify-center rounded-2xl bg-blue-600 dark:text-slate-400 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden"
								href="/#">
								获取更多旅行灵感
							</a>
							<dl
								class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left text-center">
								<div>
									<dt class="font-primary text-base text-blue-600 dark:text-slate-400">照片分享</dt>
									<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">689</dd>
								</div>
								<div>
									<dt class="font-primary text-base text-blue-600 dark:text-slate-400">互动参与者</dt>
									<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">1,245</dd>
								</div>
								<div>
									<dt class="font-primary text-base text-blue-600 dark:text-slate-400">平台</dt>
									<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">Tralive</dd>
								</div>
								<div>
									<dt class="font-primary text-base text-blue-600 dark:text-slate-400">在线时长</dt>
									<dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400">300天</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>

			<myPrice></myPrice>
			<Testimony></Testimony>
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
import myAutoSearch from '@components/myAutoSearch.vue';
import myFooter from '@components/myFooter.vue';
import myHeader from '@components/myHeader.vue';
import heroBackground from '@components/myHeroBackgound.vue';
import landingPage from '@components/myLandingPage.vue';
import myPrice from '@components/myPrice.vue';
import mySideBar from '@components/mySideBar.vue';
import Testimony from '@components/myTestimony.vue';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { onMounted } from 'vue';

// gsap.registerPlugin(ScrollTrigger);
</script>

<style>
@import '../assets/css/algoliaCustom.css';
</style>
