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

							<h2 id="information-heading" class="sr-only">Product information</h2>
							<p class="mt-2 text-sm text-gray-500">
								Version {{ product.version.name }} (Updated <time :datetime="product.version.datetime">{{ product.version.date }}</time
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
							看看其他的
						</button>
					</div>

					<div class="mt-10 border-t border-gray-200 pt-10">
						<h3 class="text-sm font-medium text-gray-900">Highlights</h3>
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
										Customer Reviews
									</button>
								</Tab>
								<Tab as="template" v-slot="{ selected }">
									<button
										:class="[
											selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
											'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
										]">
										FAQ
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
	name: `马尔代夫旅游 ${id}`,
	version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
	price: `￥22${id}`,
	description: `厌倦了城市的喧嚣？想去一个宁静的地方放松身心？那就来海岛度假吧！海岛是远离城市喧嚣的理想之地。这里有美丽的海滩、清澈的海水、温暖的阳光和友好的人们。你可以在海滩上游泳、日光浴、玩沙滩排球，也可以在海里潜水、浮潜、钓鱼。如果您喜欢冒险，您可以去丛林中徒步旅行，或者去探索海岛上的原始部落。海岛是度假的理想之地。这里有各种各样的酒店和度假村，您可以根据自己的喜好和预算选择。您也可以选择在海岛上租一间小屋，体验当地的生活。海岛是放松身心、享受美景、了解不同文化的理想之地。如果您正在寻找一个完美的度假目的地，那就来海岛吧！`,
	highlights: ['200+ SVG icons in 3 unique styles', 'Compatible with Figma, Sketch, and Adobe XD', 'Drawn on 24 x 24 pixel grid'],
	imageSrc: 'https://res.cloudinary.com/dfq7ospj9/image/upload/v1684672357/samples/landscapes/beach-boat.jpg',
	imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
};
const reviews = {
	average: 4,
	featured: [
		{
			id: 1,
			rating: 5,
			content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
			date: 'July 16, 2021',
			datetime: '2021-07-16',
			author: 'Emily Selman',
			avatarSrc: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		{
			id: 2,
			rating: 5,
			content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
			date: 'July 12, 2021',
			datetime: '2021-07-12',
			author: 'Hector Gibbons',
			avatarSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
		},
		// More reviews...
	],
};
const faqs = [
	{
		question: 'What format are these icons?',
		answer: 'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
	},
	{
		question: 'Can I use the icons at different sizes?',
		answer:
			"Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
	},
	// More FAQs...
];

onMounted(() => {
	const imgContainer = document.querySelector('img');
	console.log(imgContainer);

	imageLoaded(imgContainer, () => {
		loading.value = false;
	});
});
</script>

<style scoped>
@import '@/assets/css/logByothers.css';
</style>
