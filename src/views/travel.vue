<template>
	<div>
		<!-- <mytransition v-if="percentage <= 90" :percentage="percentage"></mytransition> -->
		<!-- <div v-show="percentage > 90" class="text-right">
			<myToggleTheme class="p-5"></myToggleTheme>
			<div class="demo-wrapper">
				<header class="df aic jcc">
					<div>
						<h1 style="margin-bottom: 5vh">难忘的旅途回忆</h1>
						<h2>准备好了吗</h2>
					</div>
				</header>
				<section class="demo-text">
					<div class="wrapper text txt1" style="margin: 0 10vw 10vh 10vw">等待你的是世界的奇妙之旅，我们一起出发！</div>
				</section>
				<section class="demo-gallery">
					<ul class="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?china,nature,sig=124" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?japan,nature,sig=82" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?greece,island,sig=128" width="1240" />
						</li>
					</ul>
				</section>
				<section class="demo-gallery">
					<ul class="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?thailand,beach,sig=168" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?france,architecture,sig=139" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?united_kingdom,city,sig=39" width="1240" />
						</li>
					</ul>
				</section>
				<section class="demo-gallery">
					<ul class="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?egypt,pyramid,sig=121" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?nature,sig=70" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?mexico,street,sig=63" width="1240" />
						</li>
					</ul>
				</section>
				<section class="demo-gallery">
					<ul class="wrapper">
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?spain,landscape,sig=160" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?india,culture,sig=88" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?peru,mountain,sig=178" width="1240" />
						</li>
						<li>
							<img height="874" src="https://source.unsplash.com/1240x874/?nature,sig=175" width="1240" />
						</li>
					</ul>
				</section>
				<section class="demo-text">
					<div class="wrapper text" style="margin: 10vh 0">即刻出发,与大家分享您的旅途</div>
				</section>
				<myFooter></myFooter>
			</div>
		</div> -->
		<!-- <Mytransition v-if="percentage <= 90" :percentage="percentage"></Mytransition> -->
		<div>
			<myToggleTheme class="p-5 text-right"></myToggleTheme>
			<progress max="100" value="0" class="absolute z-50"></progress>
			<div class="chat chat-start animate__animated animate__fadeInLeft pl-[5vw]">
				<div class="chat-bubble">You underestimate my power!</div>
			</div>

			<div class="chat chat-end animate__animated animate__fadeInRight animate__duration-1.5s">
				<div class="chat chat-end animate__animated animate__fadeInRight animate__duration-1.5s animate__delay-1s px-10">
					<div class="chat-bubble">You underestimate my power!</div>
				</div>
				<div class="chat-bubble mt-5">You underestimate my power!</div>
			</div>

			<div>
				<section>
					<p>Scroll to add some color to your life!🎨</p>
				</section>
				<section>
					<p>You're doing great, keep going😘</p>
				</section>
				<section>
					<p>Keep scrolling just a little more 🏃‍♀️</p>
				</section>
				<section>
					<p>Here you go!<br />Did you like it?🌈</p>
				</section>
			</div>

			<MyFooter></MyFooter>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyFooter from '@/components/myFooter.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

const percentage = ref(0);

document.documentElement.dataset.theme = (sessionStorage.getItem('theme') as string) ?? 'light';
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
	// const images = gsap.utils.toArray('img');
	// const updateProgress = (instance: any) => {
	// 	percentage.value = Math.round((instance.progressedCount * 100) / images.length);
	// };
	gsap.to('progress', {
		value: 100,
		ease: 'none',
		scrollTrigger: { scrub: 0.3 },
	});
	const timer = setInterval(() => {
		percentage.value += Math.round(Math.random() * 10 + 20);
		if (percentage.value >= 90) {
			clearInterval(timer);
		}
	}, 1000);

	// 当滚动到页面底部时，隐藏元素,滚动到页面顶部时，显示元素
	gsap.to('.tobottom', {
		scrollTrigger: {
			trigger: 'body',
			start: 'top top',
			end: 'bottom bottom',
			toggleActions: 'play none none reverse',
		},
		opacity: 0,
		duration: 5,
	});

	// gsap.utils.toArray('section').forEach((section: any, index) => {
	// 	const w = section.querySelector('.wrapper');
	// 	const [x, xEnd] = index % 2 ? ['100%', (w - section.offsetWidth) * -1] : [w * -1, 0];
	// 	gsap.fromTo(
	// 		w,
	// 		{ x },
	// 		{
	// 			x: xEnd,
	// 			scrollTrigger: {
	// 				trigger: section,
	// 				scrub: 0.5,
	// 			},
	// 		},
	// 	);
	// });

	// imagesLoaded(images).on('progress', updateProgress);
});
</script>

<style scoped>
@import '@/assets/css/indicator.css';
</style>
