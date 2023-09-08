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
							<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-400 sm:text-4xl md:text-center">旅途日记</h2>
							<div v-for="(item, index) in 5" :key="index" class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
								<article v-for="article in articles" :key="article.id" class="relative isolate flex flex-col gap-8 lg:flex-row">
									<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
										<img :src="article.imageUrl" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
										<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
									</div>
									<div>
										<div class="flex items-center gap-x-4 text-xs">
											<time :datetime="article.datetime" class="text-gray-500 dark:text-white font-semibold">{{ article.date }}</time>
											<a :href="article.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-gray-600 hover:bg-gray-100 font-semibold">{{
												article.category.title
											}}</a>
										</div>
										<div class="group relative max-w-xl">
											<h3
												class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-slate-400 group-hover:dark:text-slate-200 transition-colors duration-200">
												<a :href="article.href">
													<span class="absolute inset-0" />
													{{ article.title }}
												</a>
											</h3>
											<p class="mt-5 text-sm leading-6 text-gray-600 dark:text-slate-500">{{ article.description }}</p>
										</div>
										<div class="mt-6 flex pt-6">
											<div class="relative flex items-center gap-x-4">
												<img :src="article.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
												<div class="text-sm leading-6">
													<p class="font-semibold text-gray-900 dark:text-slate-400">
														<a :href="article.author.href">
															<span class="absolute inset-0" />
															{{ article.author.name }}
														</a>
													</p>
													<p class="text-gray-600 dark:text-slate-400">{{ article.author.role }}</p>
												</div>
											</div>
										</div>
									</div>
								</article>
								<hr />
							</div>
						</div>
					</div>
					<div class="basis-[calc(15%)] flex-col xl:flex hidden">
						<div class="right">
							<div class="sidebar">
								<aside class="search">
									<div class="autoComplete_wrapper">
										<input
											type="search"
											dir="ltr"
											placeholder="搜索相关文章"
											spellcheck="false"
											autocorrect="off"
											autocomplete="off"
											autocapitalize="off"
											class="dark:!bg-gray-500" />
									</div>
								</aside>
								<aside class="category">
									<h4>
										分类
										<hr />
									</h4>

									<ul>
										<li><a href="javascript:void(0)">餐厅食品 (37)</a></li>
										<hr />
										<li><a href="javascript:void(0)">旅游新闻 (10)</a></li>
										<hr />
										<li><a href="javascript:void(0)">旅行装备 (03)</a></li>
										<hr />
										<li><a href="javascript:void(0)">灵感 (21)</a></li>
									</ul>
								</aside>

								<aside class="recent_post">
									<h4>
										最近发表
										<hr />
									</h4>

									<ul>
										<li v-for="item in rencentPost" :key="item.id">
											<div class="post_item">
												<a :href="item.href"><img :src="item.imageUrl" alt="最近发表图片" /></a>
												<div></div>
												<div class="post_item_info">
													<h6>
														<a href="javascript:void(0)">{{ item.title }}</a>
													</h6>
													<p class="  ">{{ item.datetime }}</p>
												</div>
											</div>
											<hr />
										</li>
									</ul>
								</aside>

								<aside class="tag_cloud">
									<h4>
										热词
										<hr />
									</h4>
									<ul class="">
										<li><a href="javascript:void(0)">酒店</a></li>
										<li><a href="javascript:void(0)">机票</a></li>
										<li><a href="javascript:void(0)">签证</a></li>
										<li><a href="javascript:void(0)">自由行</a></li>
										<li><a href="javascript:void(0)">跟团游</a></li>
										<li><a href="javascript:void(0)">特价机票</a></li>
										<li><a href="javascript:void(0)">旅游线路</a></li>
										<li><a href="javascript:void(0)">国内旅游</a></li>
										<li><a href="javascript:void(0)">海外旅游</a></li>
										<li><a href="javascript:void(0)">门票</a></li>
										<li><a href="javascript:void(0)">游轮</a></li>
										<li><a href="javascript:void(0)">旅游攻略</a></li>
									</ul>
								</aside>

								<aside class="subscr">
									<h4>
										订阅 & 关注
										<em style="font-size: 70%">关注邮件，获取更多活动新闻!</em>
										<hr />
									</h4>
								</aside>
							</div>
						</div>
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

const articles = [
	{
		id: 1,
		title: '探索自然之美',
		href: '#',
		description:
			'当我踏上这次旅程时，我并没有预料到这会是一次如此刺激和令人难忘的经历。我的旅行开始于一个晴朗的早晨，我和我的朋友们在机场等待着我们的飞行。我们兴奋地谈论着我们即将探索的城市和景点，期待着新的冒险。',
		imageUrl: 'https://source.unsplash.com/1240x874/?china,nature,sig=124&auto=format&fit=crop&fm=webp&q=65',
		date: '2023年 7月 16日',
		datetime: '2023-07-23',
		category: { title: '3日游', href: '#' },
		author: {
			name: '李华',
			role: '旅游爱好者',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=compress&fm=webp&fit=facearea&facepad=2&w=256&h=256&q=60',
		},
	},
];
const rencentPost = [
	{
		id: 1,
		title: '他们在涂鸦',
		href: '#',
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1692007370455-cafc274e0796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fm=webp&fit=crop&w=125&q=75',
		datetime: '2023-08-23',
	},
	{
		id: 2,
		title: '美丽的山川',
		href: '#',
		imageUrl:
			'https://images.unsplash.com/photo-1682685794761-c8e7b2347702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&fm=webp&w=125&q=75',
		datetime: '2023-08-19',
	},
	{
		id: 3,
		title: '一个漂亮的湖',
		href: '#',
		imageUrl:
			'https://images.unsplash.com/photo-1692625290439-587150c38aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fm=webp&fit=crop&w=125&q=75',
		datetime: '2023-08-15',
	},
	{
		id: 4,
		title: '躺着真舒服',
		href: '#',
		imageUrl:
			'https://images.unsplash.com/photo-1692011949533-894a227b2558?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=125&q=75',
		datetime: '2023-08-12',
	},
];
</script>

<style scoped>
@import '../assets/css/blog.css';
@import '../assets/css/blog_lightSearch.css';
</style>
