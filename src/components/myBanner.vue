<template>
	<div id="err" ref="Err" v-if="errorArr.length !== 0 && show_error_again === 'true'" class="absolute space-y-3 top-full animate__animated animate__fadeInUp inset-x-0 bottom-0 z-30">
		<el-alert
			v-for="(item, index) in errorArr"
			:key="index"
			type="error"
			:center="dynamicWidth >= 640"
			:close-text="index === 0 ? '不再提示' : ''"
			@close.prevent="handleErrorClose(index)"
			style="padding: 20px 20px"
			class="animate__animated animate__fadeInDown animate__delay-slow">
			<template #default>
				<div class="text-sm font-semibold font-primary">
					<strong class="font-semibold font-primary">啊哦! 😯</strong>
					{{ item }}
					<font-awesome-icon :icon="['fas', 'circle-exclamation']" class="w-4 h-4 absolute ml-1" shake />
				</div>
			</template>
		</el-alert>
	</div>

	<div
		id="norm"
		ref="Norm"
		v-if="notifyBanner && show_notify_again === 'true'"
		class="top-full w-full animate__animated animate__fadeInUp isolate items-center overflow-hidden space-y-3 absolute">
		<el-alert
			v-for="(item, index) in notifyArr"
			:key="index"
			show-iconv-for="(item, index) in errorArr"
			type="success"
			:center="dynamicWidth >= 640"
			:close-text="index === 0 ? '不再提示' : ''"
			@close.prevent="handleNotifyClose(index)"
			class="animate__animated animate__fadeInDown animate__delay-slow bg-gradient-to-r from-[#e780ab] via-blue-400 to-[#67faff76] opacity-20"
			style="padding: 16px 0px">
			<template #default>
				<div class="flex flex-wrap items-center gap-x-4 gap-y-2 font-bold">
					<p class="text-sm leading-6 text-gray-900">🪄{{ item }}</p>
					<a
						href="javascript:void(0)"
						class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
						赶紧来看看
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</template>
		</el-alert>
	</div>
</template>

<script setup lang="ts">
import emitter from '@utils/emitter';
import { useStorage } from '@vueuse/core';
import { gsap } from 'gsap';
import { getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter();
let notifyBanner = ref<boolean | undefined>(undefined);

let Err = ref<HTMLElement>();
let Norm = ref<HTMLElement>();

let show_error_again = useStorage<string>('show_error_again', sessionStorage.getItem('show_error_again') ?? 'true', sessionStorage);
let show_notify_again = useStorage<string>('show_notify_again', sessionStorage.getItem('show_notify_again') ?? 'true', sessionStorage);
let dynamicWidth = getCurrentInstance()?.appContext.config.globalProperties.$dynamicWidth!;
let errorArr = ref<string[]>([]);
let notifyArr = ref<string[]>([]);

emitter.on('error', (msg) => {
	if (router.currentRoute.value.path === '/') {
		errorArr.value.push(msg);
	}
});

emitter.on('notify', (msg) => {
	if (router.currentRoute.value.path === '/') {
		notifyBanner.value = true;
		notifyArr.value.push(msg);
	}
});

let handleErrorClose = (index: number) => {
	if (index !== 0) {
		Err.value?.children[index].classList.add('animate__fadeOutDown');
		Err.value?.children[index].classList.remove('animate__fadeInUp');
	} else {
		Err.value?.classList.add('animate__fadeOutDown');
		Err.value?.classList.remove('animate__fadeInUp');
	}
	gsap.to('#err', {
		duration: 1.5,
		onComplete: () => {
			if (index === 0) {
				Err.value?.classList.add('pointer-events-none');
				// errorBanner.value = undefined;
				show_error_again.value = 'false';
				errorArr.value = [];
			}
		},
	});
};

let handleNotifyClose = (index: number) => {
	if (index !== 0) {
		Norm.value?.children[index].classList.add('animate__fadeOutDown');
		Norm.value?.children[index].classList.remove('animate__fadeInUp');
	} else {
		Norm.value?.classList.add('animate__fadeOutDown');
		Norm.value?.classList.remove('animate__fadeInUp');
	}
	gsap.to('#norm', {
		duration: 1.5,
		onComplete: () => {
			console.log('complete');
			if (index === 0) {
				Norm.value?.classList.add('pointer-events-none');
				notifyBanner.value = undefined;
				show_notify_again.value = 'false';
			}
		},
	});
};
</script>

<style scoped>
:deep(.el-alert .el-alert__close-btn.is-customed) {
	top: 38%;
	font-weight: 600;
	color: #000;
}
:deep(.el-alert .el-alert__close-btn.is-customed:hover) {
	color: gray;
	transition: color 0.25s ease-in-out;
}

:deep(.el-alert .el-alert__close-btn) {
	top: 45%;
	font-weight: 900;
}
:deep(.el-icon svg) {
	width: 30px;
	scale: 1.7;
}
</style>
