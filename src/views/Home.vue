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

			<div class="lg:flex max-w-screen-xl drop-shadow-2xl mx-auto font-semibold lg:my-36 my-28">
				<div class="bg-[url('https://i.imgtg.com/2023/07/13/OzehDN.png')] w-full bg-no-repeat bg-top bg-contain"></div>
				<section class="basis-full max-w-3xl">
					<div class="md:hidden">
						<h1 class="md:text-center text-[2vmax]">准备一场 说走就走的旅途</h1>
						<p class="container lg:line-clamp-3 !leading-[50px] md:px-5 w-full text-left">
							让你的旅程变得更加丰富多彩！无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。我们为您提供最便捷、最安全的旅游服务，让您尽情享受旅途的每一个时刻。让我们携手，让旅行成为您生命中的闪耀之一。
						</p>
					</div>
					<div class="lg:hidden hero w-[100vw] bg-[url('https://i.imgtg.com/2023/07/13/OzehDN.png')] bg-contain bg-no-repeat">
						<div class="bg-transparent bg-opacity-50"></div>
						<div class="hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">准备一场 说走就走的旅途</h1>
								<p class="mb-5 !leading-[50px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									让你的旅程变得更加丰富多彩！无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。我们为您提供最便捷、最安全的旅游服务，让您尽情享受旅途的每一个时刻。让我们携手，让旅行成为您生命中的闪耀之一。
								</p>
							</div>
						</div>
					</div>
					<div class="text-left md:text-center">
						<strong>
							<a
								href="/"
								aria-label=""
								class="inline-flex md:justify-center md:w-[100vw] font-semibold transition-colors duration-underline decoration-2200 text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link underline-offset-8 decoration-wavy">
								预约您的旅程
								<font-awesome-icon :icon="['fas', 'reply-all']" size="xl" class="pl-1 text-secondary pt-1" />
							</a>
						</strong>
					</div>
				</section>
			</div>

			<div class="lg:flex max-w-screen-xl drop-shadow-2xl mx-auto font-semibold lg:my-36 my-28">
				<section class="basis-full max-w-3xl text-right">
					<div class="md:hidden">
						<h1 class="md:text-center text-[2vmax]">为了更好的明天!</h1>
						<p class="container lg:line-clamp-3 !leading-[50px] md:px-5 w-full">
							😯😯Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit corporis blanditiis laudantium corrupti doloribus consectetur expedita repellendus reprehenderit,
							modi, alias accusantium amet sit? Sit dicta, quo enim magnam harum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quisquam corrupti
							quo illo mollitia ad officia facilis, recusandae, nisi quis labore dolor ducimus nam deleniti beatae ipsam dolore quos.
						</p>
					</div>
					<div class="lg:hidden hero w-[100vw] bg-[url('https://i.imgtg.com/2023/07/04/OxUwMg.png')] bg-contain bg-no-repeat">
						<div class="hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">为了更好的明天!</h1>
								<p class="mb-5 !leading-[50px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									😯😯Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit corporis blanditiis laudantium corrupti doloribus consectetur expedita repellendus
									reprehenderit, modi, alias accusantium amet sit? Sit dicta, quo enim magnam harum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
									est quisquam corrupti quo illo mollitia ad officia facilis, recusandae, nisi quis labore dolor ducimus nam deleniti beatae ipsam dolore quos.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div class="bg-[url('https://i.imgtg.com/2023/07/04/OxUwMg.png')] w-full bg-no-repeat bg-top bg-contain"></div>
			</div>

			<div class="lg:flex max-w-screen-xl drop-shadow-2xl mx-auto font-semibold lg:my-36 my-28">
				<div class="bg-[url('https://i.imgtg.com/2023/07/13/Ozei6C.png')] w-full bg-no-repeat bg-top bg-contain"></div>
				<section class="basis-full max-w-3xl">
					<div class="md:hidden">
						<h1 class="md:text-center text-[2vmax]">匆忙吗,那就即刻开始吧!</h1>
						<p class="container lg:line-clamp-3 !leading-[50px] md:px-5 w-full text-left">
							😊😊Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit corporis blanditiis laudantium corrupti doloribus consectetur expedita repellendus reprehenderit,
							modi, alias accusantium amet sit? Sit dicta, quo enim magnam harum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quisquam corrupti
							quo illo mollitia ad officia facilis, recusandae, nisi quis labore dolor ducimus nam deleniti beatae ipsam dolore quos.
						</p>
					</div>
					<div class="lg:hidden hero w-[100vw] bg-[url('https://i.imgtg.com/2023/07/13/Ozei6C.png')] bg-contain bg-no-repeat">
						<div class="hero-content text-center">
							<div class="max-w-xl text-slate-600 dark:text-slate-400">
								<h1 class="mb-5 text-xl font-bold tracking-widest">匆忙吗,那就即刻开始吧!</h1>
								<p class="mb-5 !leading-[50px] mi:line-clamp-5 underline decoration-dashed underline-offset-4">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit corporis blanditiis laudantium corrupti doloribus consectetur expedita repellendus reprehenderit,
									modi, alias accusantium amet sit? Sit dicta, quo enim magnam harum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est quisquam
									corrupti quo illo mollitia ad officia facilis, recusandae, nisi quis labore dolor ducimus nam deleniti beatae ipsam dolore quos.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>

			<myPrice></myPrice>
			<Testimony></Testimony>
		</main>
		<myFooter></myFooter>
	</div>
</template>

<script setup lang="ts">
import http from '@/api/index';
import myAutoSearch from '@components/myAutoSearch.vue';
import myFooter from '@components/myFooter.vue';
import myHeader from '@components/myHeader.vue';
import landingPage from '@components/myLandingPage.vue';
import myPrice from '@components/myPrice.vue';
import Testimony from '@components/myTestimony.vue';
import heroBackground from '@components/myheroBackgound.vue';
import emitter from '@utils/emitter';
import { AxiosError } from 'axios';

http
	.get('/api/userlogin')
	.then((res) => {
		console.log(res);
	})
	.catch((err: AxiosError) => {
		emitter.emit('error', err.message);
	});
</script>

<style>
@import '@/assets/css/algoliaCustom.css';
</style>
