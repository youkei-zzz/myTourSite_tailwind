<template>
	<div class="wave pt-5 relative">
		<footer class="bg-[#182f4a] bg-[url('@/assets/svg/cloud.svg')] will-change-transform w-full bg-top bg-no-repeat bg-cover text-center pt-[15vh] px-10 text-gray-200">
			<div class="footer_content box-border grid lg:grid-cols-3 grid-rows-1" style="">
				<div class="sc1 prose">
					<img src="https://i.imgtg.com/2023/05/14/OMBR5L.png" alt="TraLive icon" />
					<p class="text-left text-gray-200 md:line-clamp-3 md:mb-16">
						当您探索我的网站的每一个角落，感受到它所带给您的方便和快乐时，我深知这正是我不断前行的源动力。您的使用与浏览就是对我的肯定，我会不断完善和改进，让它变得越来越好。
					</p>
					<div class="footer-social lg:flex gap-8 hidden">
						<div class="tooltip tooltip-bottom" data-tip="微信">
							<span class="sr-only">微信</span>
							<a href="javascript:void(0)" @click.prevent="open('wechat')">
								<svg class="icon w-7 h-7" aria-hidden="true">
									<use xlink:href="#icon-weixin"></use>
								</svg>
							</a>
						</div>

						<div class="tooltip tooltip-bottom" data-tip="QQ">
							<span class="sr-only">QQ</span>
							<a href="javascript:void(0)" @click.prevent="open('QQ')">
								<svg class="icon w-7 h-7" aria-hidden="true">
									<use xlink:href="#icon-QQ"></use>
								</svg>
							</a>
						</div>

						<div class="tooltip tooltip-bottom" data-tip="github">
							<span class="sr-only">github</span>
							<a href="https://github.com/youkei-zzz" target="_blank" rel="noopener">
								<svg class="icon w-7 h-7" aria-hidden="true">
									<use xlink:href="#icon-github"></use>
								</svg>
							</a>
						</div>

						<div class="tooltip tooltip-bottom" data-tip="网站后台">
							<span class="sr-only">网站后台</span>
							<a href="https://tosys.vercel.app" target="_blank" rel="noopener">
								<svg class="icon w-7 h-7" aria-hidden="true">
									<use xlink:href="#icon-houtaizonglan"></use>
								</svg>
							</a>
						</div>

						<div class="tooltip tooltip-bottom" data-tip="敬请期待!">
							<span class="sr-only">敬请期待！</span>
							<a href="javascript:void(0)" class="more hover:cursor-not-allowed">
								<svg class="icon w-7 h-7" aria-hidden="true">
									<use xlink:href="#icon-qita"></use>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div class="menu gap-6 text-base lg:text-center text-left">
					<span class="footer-title">导航</span>
					<span>
						<router-link :to="{ name: 'Home' }"> 主页 </router-link>
					</span>
					<span>
						<router-link :to="{ name: '' }"> 活动 </router-link>
					</span>
					<span>
						<router-link :to="{ name: '' }"> 公告 </router-link>
					</span>

					<span>
						<a @click.prevent="enterBlog()" style="cursor: pointer">博客</a>
					</span>
					<span class="mb-16">
						<router-link :to="{ path: '/contact' }"> 联系我们 </router-link>
					</span>
				</div>

				<div class="gap-10 menu text-base text-left lg:text-center md:mb-6">
					<h2 class="footer-title">联系方式</h2>
					<p>{{ address }}</p>
					<p>{{ mail }}</p>
					<p>(+86)-1234567890</p>
				</div>
			</div>
		</footer>

		<div class="divider relative h-[1px] m-0 bg-white"></div>
		<p class="copyright relative text-center text-sm text-gray-300 bg-[#182f4a] p-5">
			<strong
				>© 2023 All Rights Reserved. Designed by <em style="color: aliceblue">{{ author }}</em></strong
			>
		</p>
	</div>
</template>

<script setup lang="ts">
import { useLogInfoStore } from '@/stores/modules/logInfoStore';
import swal from 'sweetalert2';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mail = import.meta.env.VITE_PERSON_MAIL ?? '......';
const address = import.meta.env.VITE_PERSON_ADDRESS ?? '......';
const author = import.meta.env.VITE_PERSON_AUTHOR ?? '佚名';
const LogInfoStore = useLogInfoStore();
const contactInfo = reactive({
	title: '',
	content: '',
});
const open = (contactType?: string) => {
	if (contactType === 'QQ') {
		contactInfo.title = 'QQ号';
		contactInfo.content = `${import.meta.env.VITE_PERSON_QQ}`;
	} else {
		contactInfo.title = '微信号';
		contactInfo.content = `${import.meta.env.VITE_PERSON_WECHAT}`;
	}

	swal.fire({
		title: `${contactInfo.title}`,
		text: `${contactInfo.content}`,
		confirmButtonText: '确定',
	});
};
const enterBlog = () => {
	if (LogInfoStore.getLogInStatus() === false) {
		router.push({
			path: '/blog',
			query: {
				isAuth: String(LogInfoStore.getLogInStatus()),
				dest: 'Blog',
			},
		});
	} else {
		router.push({ name: 'Blog' });
	}
};
</script>

<style>
@import '../assets/css/wave.css';
</style>
