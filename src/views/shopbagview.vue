<template>
	<div class="dark:bg-slate-700 mt-16">
		<MyHeader></MyHeader>
		<MySideBar></MySideBar>
		<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-400">请查阅:</h2>

			<div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				<div v-for="product in products" :key="product.id" class="group relative">
					<div class="aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:scale-105 overflow-hidden transition-all duration-200 lg:h-80">
						<img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
					</div>
					<div class="mt-4 flex justify-between">
						<div>
							<h3 class="text-sm text-gray-700 dark:text-slate-300">
								<a :href="product.href">
									<span aria-hidden="true" class="absolute inset-0" />
									{{ product.name }}
								</a>
							</h3>
							<p class="mt-1 text-sm text-gray-500 dark:text-slate-300">{{ product.duration }}</p>
						</div>
						<p class="text-sm font-medium text-gray-900 dark:text-slate-300">{{ product.price }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="text-center">
			<button
				@click.prevent="pay"
				type="submit"
				class="mi:w-[50vw] w-[calc(30%)] rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
				结账
			</button>
		</div>
		<MyFooter></MyFooter>
	</div>
</template>

<script setup lang="ts">
import MyFooter from '@/components/myFooter.vue';
import MySideBar from '@/components/mySideBar.vue';
import MyHeader from '@components/myHeader.vue';
import swal from 'sweetalert2';
const pay = () => {
	// 模拟结账延时
	swal
		.fire({
			title: '结账中...',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
				swal.showLoading();
			},
			allowOutsideClick: false,
		})
		.then(() => {
			swal.fire({
				title: '结账成功',
				icon: 'success',
				timer: 1200,
				timerProgressBar: true,
			});
		})
		.then(() => {
			setTimeout(() => {
				location.reload();
			}, 1200);
		});
};
const products = [
	{
		id: 1,
		name: '桂林山水',
		duration: '5天',
		price: '￥3999',
		href: '#',
		imageSrc: 'https://i.imgtg.com/2023/07/28/OiZ16j.webp',
		imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
	},

	{
		id: 2,
		name: '江南水乡',
		duration: '7天',
		price: '￥5999',
		href: '#',
		imageSrc: 'https://i.imgtg.com/2023/07/28/OiZNkp.webp',
		imageAlt: '难以忘记的美景',
	},
	{
		id: 3,
		name: '广西之行',
		duration: '3天',
		price: '￥2999',
		href: '#',
		imageSrc: 'https://i.imgtg.com/2023/07/23/OhD5lM.jpg',
		imageAlt: '超级美丽的风景',
	}
];
</script>