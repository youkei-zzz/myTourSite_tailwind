<template>
	<div>
		<myHeader></myHeader>
		<mySideBar></mySideBar>
		<div class="overflow-hidden bg-white dark:bg-gradient-to-b dark:from-[#1a2026] dark:from-15% dark:via-slate-800 via-30% dark:to-[#1d232a] dark:to-90% shadow sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<div class="py-24 sm:py-32 flex">
					<div class="xl:basis-[calc(5%)] basis-[calc(10%)]"></div>
					<div class="mx-auto max-w-7xl px-6 lg:px-8 flex-1">
						<div class="mx-auto max-w-2xl lg:max-w-4xl">
							<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-400 sm:text-4xl">我的奇妙之旅！</h2>
							<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
								<article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
									<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
										<img :src="post.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
										<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div>
										<div class="flex items-center gap-x-4 text-xs">
											<time :datetime="post.datetime" class="text-gray-500 dark:text-slate-500 font-semibold">{{ post.date }}</time>
											<a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100 font-semibold">{{
												post.category.title
											}}</a>
										</div>
										<div class="group relative max-w-xl">
											<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-400 group-hover:dark:text-slate-200 transition-colors duration-200">
												<a :href="post.href">
													<span class="absolute inset-0" />
													{{ post.title }}
												</a>
											</h3>
											<p class="mt-5 text-sm leading-6 text-gray-600 dark:text-slate-500">{{ post.description }}</p>
										</div>
										<div class="mt-6 flex border-t border-gray-900/5 pt-6">
											<div class="relative flex items-center gap-x-4">
												<img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
												<div class="text-sm leading-6">
													<p class="font-semibold text-gray-900 dark:text-slate-400">
														<a :href="post.author.href">
															<span class="absolute inset-0" />
															{{ post.author.name }}
														</a>
													</p>
													<p class="text-gray-600 dark:text-slate-400">{{ post.author.role }}</p>
												</div>
											</div>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
					<div class="basis-[calc(30%)] flex-col xl:flex hidden">
						<section class="bg-slate-50" v-for="item in 5">{{ item }}</section>
					</div>
					<div class="xl:basis-[calc(5%)] basis-[calc(10%)]"></div>
				</div>
			</div>
		</div>
		<myFooter></myFooter>
	</div>
</template>

<script setup lang="ts">
import myFooter from '@components/myFooter.vue';
import myHeader from '@components/myHeader.vue';
import mySideBar from '@components/mySideBar.vue';
const posts = [
	{
		id: 1,
		title: '探索自然之美',
		href: '#',
		description:
			'当我踏上这次旅程时，我并没有预料到这会是一次如此刺激和令人难忘的经历。我的旅行开始于一个晴朗的早晨，我和我的朋友们在机场等待着我们的飞行。我们兴奋地谈论着我们即将探索的城市和景点，期待着新的冒险。',
		imageUrl: 'https://source.unsplash.com/1240x874/?china,city,sig=124',
		date: '2023年 7月 16日',
		datetime: '2023-07-23',
		category: { title: '3日游', href: '#' },
		author: {
			name: '李华',
			role: '旅游爱好者',
			href: '#',
			imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	// More posts...
];
</script>
