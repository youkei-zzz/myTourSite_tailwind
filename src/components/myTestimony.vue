<template>
	<swiper
		:spaceBetween="30"
		:centeredSlides="true"
		:autoplay="{
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: false,
		}"
		:pagination="{
			clickable: true,
		}"
		:navigation="dynamicWidth! >= 600"
		:modules="modules"
		class="mySwiper my-12">
		<swiper-slide v-for="item in response_handled?.content">
			<section class="drop-shadow-2xl px-6 py-24 sm:py-32 lg:px-8 dark:bg-gradient-to-b dark:from-[#1d232a] dark:from-5% dark:via-slate-800 via-35% dark:to-[#1d232a] dark:to-90%">
				<figure class="mx-auto max-w-2xl">
					<p class="sr-only">5 out of 5 stars</p>
					<div class="flex gap-x-1 text-secondary">
						<StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
						<StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
						<StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
						<StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
						<StarIcon class="h-5 w-5 flex-none" aria-hidden="true" />
					</div>
					<blockquote class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-slate-400 sm:text-2xl sm:leading-9 line-clamp-4">
						<p>
							{{ item.message }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, ea ratione. Esse, cum quaerat obcaecati est exercitationem ut tempora. Nihil esse
							maxime suscipit eligendi sit eos reiciendis, et iste provident.
							{{ item.avatar }}
						</p>
					</blockquote>
					<figcaption class="mt-10 flex items-center gap-x-6">
						<img
							class="h-12 w-12 rounded-full"
							src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
							alt="" />
						<div class="text-sm leading-6">
							<div class="font-semibold text-gray-900 dark:text-slate-400">{{ item.name }}</div>
							<div class="mt-0.5 text-gray-600 dark:text-slate-400">CEO of Workcation</div>
						</div>
					</figcaption>
				</figure>
			</section>
		</swiper-slide>
	</swiper>
</template>
<script lang="ts" setup>
import { Testimony } from '@/api/interface';
import { getUserTestimony } from '@/api/modules/user';
import { StarIcon } from '@heroicons/vue/20/solid';
import emitter from '@utils/emitter';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { getCurrentInstance, ref } from 'vue';

const response_handled = ref<Testimony.homeTestimony>();
const modules = [Autoplay, Pagination, Navigation];
const dynamicWidth = getCurrentInstance()?.appContext.config.globalProperties.$dynamicWidth;

try {
	getUserTestimony().then((res) => {
		response_handled.value = res.data;
	});
} catch (error: any) {
	emitter.emit('error', error.message);
}
</script>
