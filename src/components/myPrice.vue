<template>
	<div class="relative isolate bg-white dark:bg-[#1d232a] px-6 py-24 sm:py-32 lg:px-8">
		<div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
			<div
				class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#ff80b5] to-[#9089fc] dark:from-teal-500 dark:to-blue-500 to-90% opacity-30"
				style="
					clip-path: polygon(
						74.1% 44.1%,
						100% 61.6%,
						97.5% 26.9%,
						85.5% 0.1%,
						80.7% 2%,
						72.5% 32.5%,
						60.2% 62.4%,
						52.4% 68.1%,
						47.5% 58.3%,
						45.2% 34.5%,
						27.5% 76.7%,
						0.1% 64.9%,
						17.9% 100%,
						27.6% 76.8%,
						76.1% 97.7%,
						74.1% 44.1%
					);
				" />
		</div>
		<div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
			<h2 class="text-base font-semibold leading-7 text-primary/70 dark:text-slate-400 italic underline underline-offset-8">价格</h2>
			<p class="mt-2 xl:text-5xl sm:text-3xl mi:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-400">无论您是谁，个人版的内容都是最划算的</p>
		</div>
		<p class="mx-auto mt-6 max-w-2xl text-center sm:text-lg mi:text-xs leading-8 text-gray-600 dark:text-slate-400">
			这是一个无聊的一段话，如果你读完了这段话，那么你也是挺无聊的🤣🤣🤣
		</p>
		<div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
			<div
				v-for="(tier, tierIdx) in tiers"
				:key="tier.id"
				:class="[
					tier.featured ? 'relative bg-white dark:bg-[#1d232ad9]/80 shadow-2xl' : 'bg-white/60 dark:bg-[#272e35d9]/70 sm:mx-8 lg:mx-0',
					tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
					'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
				]">
				<h3 :id="tier.id" class="text-base font-semibold leading-7 text-secondary">{{ tier.name }}</h3>
				<p class="mt-4 flex items-baseline gap-x-2">
					<span class="text-5xl font-bold tracking-tight text-secondary">{{ tier.priceMonthly }}</span>
					<span class="text-base text-gray-500">/月</span>
				</p>
				<p class="mt-6 text-base leading-7 text-gray-600">{{ tier.description }}</p>
				<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
					<li v-for="feature in tier.features" :key="feature" class="flex gap-x-3 dark:text-slate-300 text-primary">
						<CheckIcon class="h-6 w-5 flex-none" aria-hidden="true" />
						{{ feature }}
					</li>
				</ul>

				<a
					:href="tier.href"
					:aria-describedby="tier.id"
					:class="[
						tier.featured ? 'btn btn-primary' : 'btn btn-outline',
						'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2   sm:mt-10',
					]"
					>从现在开始</a
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid';

const tiers = [
	{
		name: '个人',
		id: 'tier-personal',
		href: 'javascript:void(0)',
		priceMonthly: '￥9',
		description: '如果你还不清楚，那么这个是最合适的',
		features: ['25 个产品', '最多 20,00 名订阅者', '电子邮件支持', 'Email support'],
		featured: true,
	},
	{
		name: '增强版',
		id: 'tier-team',
		href: 'javascript:void(0)',
		priceMonthly: '￥19',
		description: '最完美的土豪套餐，你值得拥有',
		features: ['优先支持', '单点登录', '自定义报告工具', '电子邮件支持', '最多 10,000 名订阅者', '高级分析'],
		featured: false,
	},
];
</script>
