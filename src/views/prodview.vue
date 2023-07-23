<template>
	<div class=" ">
		<MyHeader></MyHeader>
		<MySideBar></MySideBar>
		<div class="mx-auto mt-10 px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
				<div class="lg:col-span-4 lg:row-end-1">
					<div class="imgContainer aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
						<img :src="product.imageSrc" :alt="product.imageAlt" class="object-cover object-center" />
					</div>
				</div>

				<div class="mx-auto mt-14 max-w-2xl lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
					<div class="flex flex-col-reverse">
						<div class="mt-4">
							<h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>

							<h2 id="information-heading" class="sr-only">travel information</h2>
							<p class="mt-2 text-sm text-gray-500">
								图片 {{ product.version.name }} (更新于 <time :datetime="product.version.datetime">{{ product.version.date }}</time
								>)
							</p>
						</div>

						<div>
							<h3 class="sr-only">Reviews</h3>
							<div class="flex items-center">
								<StarIcon
									v-for="rating in [0, 1, 2, 3, 4]"
									:key="rating"
									:class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
									aria-hidden="true" />
							</div>
							<p class="sr-only">{{ reviews.average }} out of 5 stars</p>
						</div>
					</div>

					<p class="mt-6 text-gray-500">{{ product.description }}</p>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
						<button
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
							支付 {{ product.price }}
						</button>
						<button
							@click.prevent="router.push('/shopbagview')"
							type="button"
							class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
							看看购物车
						</button>
					</div>

					<div class="mt-10 border-t border-gray-200 pt-10">
						<h3 class="text-sm font-medium text-gray-900">特色</h3>
						<div class="prose prose-sm mt-4 text-gray-500">
							<ul role="list">
								<li v-for="highlight in product.highlights" :key="highlight">{{ highlight }}</li>
							</ul>
						</div>
					</div>

					<div class="mt-6">
						<h3 class="text-sm font-semibold text-gray-900">分享到</h3>
						<ul class="social-icons icon-circle list-unstyled text-left gap-5">
							<li>
								<a href="javascript:void(0)"><i class="fa fa-weibo"></i></a>
								<a href="javascript:void(0)"><i class="fa fa-qq"></i></a>
								<a href="javascript:void(0)"><i class="fa fa-weixin"></i></a>
							</li>
						</ul>
					</div>
				</div>

				<div class="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
					<TabGroup as="div">
						<div class="border-b border-gray-200">
							<TabList class="-mb-px flex space-x-8">
								<Tab as="template" v-slot="{ selected }">
									<button
										:class="[
											selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
											'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
										]">
										旅游者的评论
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button
										:class="[
											selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
											'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
										]">
										常见问题解答
									</button>
								</Tab>
							</TabList>
						</div>
						<TabPanels as="template">
							<TabPanel class="-mb-10">
								<h3 class="sr-only">Customer Reviews</h3>

								<div v-for="(review, reviewIdx) in reviews.featured" :key="review.id" class="flex space-x-4 text-sm text-gray-500">
									<div class="flex-none py-10">
										<img :src="review.avatarSrc" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
									</div>
									<div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10']">
										<h3 class="font-medium text-gray-900">{{ review.author }}</h3>
										<p>
											<time :datetime="review.datetime">{{ review.date }}</time>
										</p>

										<div class="mt-4 flex items-center">
											<StarIcon
												v-for="rating in [0, 1, 2, 3, 4]"
												:key="rating"
												:class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
												aria-hidden="true" />
										</div>
										<p class="sr-only">{{ review.rating }} out of 5 stars</p>

										<div class="prose prose-sm mt-4 max-w-none text-gray-500" v-html="review.content" />
									</div>
								</div>
							</TabPanel>

							<TabPanel class="text-sm text-gray-500">
								<h3 class="sr-only">Frequently Asked Questions</h3>

								<dl>
									<template v-for="faq in faqs" :key="faq.question">
										<dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
										<dd class="prose prose-sm mt-2 max-w-none text-gray-500">
											<p>{{ faq.answer }}</p>
										</dd>
									</template>
								</dl>
							</TabPanel>
						</TabPanels>
					</TabGroup>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MyHeader from '@components/myHeader.vue';
import MySideBar from '@components/mySideBar.vue';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue';
import { StarIcon } from '@heroicons/vue/20/solid';
import imageLoaded from 'imagesloaded';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const loading = ref(true);
const router = useRouter();
const route = useRoute();
const id = route.params.id;
const product = {
	name: `苏州旅行 ${id}`,
	version: { name: '苏州', date: '2023年7月5日', datetime: '2023-07-05' },
	price: `￥${Math.floor(Math.random() * 5000)}`,
	description: `厌倦了城市的喧嚣？想去一个宁静的地方放松身心？那就来江南水乡吧！江南水乡是远离城市喧嚣的理想之地。这里有美丽的水乡风光、清澈的河水、温暖的阳光和友好的人们。你可以在河边散步、划船、欣赏风景，也可以在水乡中探寻古镇，感受江南悠久的历史文化。江南水乡是度假的理想之地。这里有各种各样的民宿和酒店，您可以根据自己的喜好和预算选择。您也可以选择在水乡中租一间小屋，体验当地的生活。江南水乡是放松身心、享受美景、了解不同文化的理想之地。如果您正在寻找一个完美的度假目的地，那就来江南水乡吧！`,
	highlights: ['美丽的河流和小溪', '古老的桥梁和水道', '宁静的村庄和田野','丰富的历史和文化'],
	imageSrc: 'https://i.imgtg.com/2023/07/23/OhDTBG.jpg',
	imageAlt: '难以忘记的美景',
};
const reviews = {
	average: 4,
	featured: [
		{
			id: 1,
			rating: 5,
			content: `
        <p>江南水乡，古色古香，韵味无穷。这个图标包简直就是一幅精美的水墨画集！每一个图标都独具特色，细腻入微，勾勒出江南水乡的独特魅力。让我在设计中轻松加入家乡的元素，为作品增色不少。这些图标仿佛将我带回了小时候在家乡小巷中漫步的场景，让我感受到了家乡的温暖和宁静。对于喜欢江南文化的我来说，这个真是太珍贵了！强烈推荐给所有热爱江南水乡的朋友们！</p>
      `,
			date: '2023年7月16日',
			datetime: '2023-07-16',
			author: '狄仁杰',
			avatarSrc: 'https://images.unsplash.com/photo-1532407886693-8f1cb93380be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5lc2UlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		{
			id: 2,
			rating: 5,
			content: `
        <p>这个建筑的设计相当独特，呈现出了江南水乡的一部分韵味。我喜欢它的传统风格，带给人一种古老而又亲切的感觉。外形的线条流畅，色彩柔和，很适合表现江南水乡的历史文化。不过，希望未来能加入更多当地特色的元素，让图标更加地道。总体而言，来这里旅游是一个不错的选择，对于想要一览江南水乡风情的人来说，绝对是一个十分有意义的旅行。</p>
      `,
			date: '2023年7月12日',
			datetime: '2023-07-12',
			author: '李元芳',
			avatarSrc: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		// More reviews...
	],
};

 
const faqs = [
	{
		question: '江南地区有哪些著名的古镇和水乡景点？',
		answer: '江南地区有许多著名的古镇和水乡景点。其中一些最知名的包括苏州的周庄、西塘、乌镇，杭州的西湖，无锡的南长街和西山景区，以及南京的秦淮河畔等。这些古镇和水乡以其古老的建筑、静谧的水道和独特的江南风情吸引着众多游客。',
	},
	{
		question: '江南地区的美食有哪些特色？有没有一些必尝的当地美味推荐？',
		answer:
			"著名的江南美食包括苏州的本帮菜，如沙虾、狮子头、鱼头豆腐汤等；杭州的西湖醋鱼、东坡肉、龙井虾仁等；宁波的海鲜美食，如海螺煲、海鲜粥等。此外，江南地区的小吃也非常有名，比如上海的小笼包、南京的糖火烧、无锡的阳山水蜜桃等。这些美食代表了江南的独特风味，让人流连忘返。",
	},
	// More FAQs...
];

onMounted(() => {
	const imgContainer = document.querySelector('img');
	imageLoaded(imgContainer, () => {
		loading.value = false;
	});
});
</script>

<style scoped>
@import '../assets/css/logByothers.css';
</style>
