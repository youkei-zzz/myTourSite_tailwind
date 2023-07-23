<template>
	<div>
		<div class="text-right p-2 mi:text-left">
			<myToggleTheme></myToggleTheme>
		</div>
		<div class="xl:flex min-h-full flex-1 2xl:place-content-center flex-row-reverse">
			<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mi:relative">
				<div class="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<h2 class="mt-4 text-2xl font-bold leading-9 sm:text-center tracking-tight text-gray-900 dark:text-slate-400">登录您的帐户</h2>
						<p class="mt-2 text-sm leading-6 text-gray-500 sm:text-center dark:text-slate-400">即刻发现更多精彩旅行</p>
					</div>

					<div class="mt-10">
						<div>
							<form class="space-y-6">
								<div>
									<label for="email" class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">用户名或邮箱</label>
									<div class="mt-2">
										<input
											v-model="regInfo.username"
											placeholder="可以填: user"
											id="email"
											type="text"
											name="email"
											autocomplete="off"
											class="block pl-2 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:ring-offset-1 sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div>
									<label for="password" class="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-400">密码</label>
									<div class="mt-2">
										<input
											v-model="regInfo.password"
											id="password"
											name="password"
											placeholder="可以填: 123"
											type="password"
											autocomplete="off"
											class="block w-full pl-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:ring-offset-1 sm:text-sm sm:leading-6" />
									</div>
								</div>

								<div class="flex items-center justify-between">
									<div class="text-sm leading-6">
										<button @click.prevent="forgetPassWord" class="font-semibold hover:text-slate-400">忘记密码?</button>
									</div>
									<div class="text-sm leading-6">
										<button @click.prevent="register" class="font-semibold hover:text-slate-400">注册</button>
									</div>
								</div>

								<div class="flex">
									<button
										@click.prevent="log"
										class="flex w-1/2 justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary">
										登录
									</button>
									<button
										@click.prevent="goback"
										class="flex w-1/2 ml-2 justify-center rounded-md bg-black dark:bg-slate-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary">
										返回
									</button>
								</div>
							</form>
						</div>

						<div class="mt-10">
							<div class="flex justify-center items-center">
								<span class="w-full border border-black dark:border-slate-400"></span>
								<span class="dark:text-slate-400 mx-4">或</span>
								<span class="w-full border border-black dark:border-slate-400"></span>
							</div>

							<div class="mt-6 flex justify-evenly">
								<ul class="social-icons icon-circle list-unstyled text-center gap-5">
									<li>
										<a href="javascript:void(0)"><i class="fa fa-weibo"></i></a>
										<a href="javascript:void(0)"><i class="fa fa-qq"></i></a>
										<a href="javascript:void(0)"><i class="fa fa-weixin"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="hidden mi:block mi:absolute right-0 -top-[calc(1%)] w-1/2 h-1/2 pointer-events-none">
					<img src="https://i.imgtg.com/2023/07/13/Oze1kL.png" alt="travel" class="animate__animated animate__fadeIn" />
				</div>
			</div>
			<div class="relative xl:block hidden flex-1 2xl:flex-grow-[0.6] lg:block -mr-20 pointer-events-none">
				<img class="absolute inset-0 h-full object-contain animate__animated animate__fadeIn" src="https://i.imgtg.com/2023/07/13/Oze1kL.png" alt="travel" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { loginApi } from '@/api/modules/login';
import { useLogInfoStore } from '@/stores/modules/logInfoStore';
import myToggleTheme from '@components/myToggleTheme.vue';
import { useThrottleFn } from '@vueuse/core';
import swal from 'sweetalert2';
import { nextTick, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const LogInfoStore = useLogInfoStore();
const regInfo = reactive({
	username: '',
	password: '',
});

function register() {
	swal
		.fire({
			title: '注册成功',
			text: '请登录',
			icon: 'success',
			showCancelButton: false,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '登录',
		})
		.then((result) => {
			if (result.isConfirmed) {
				regInfo.username = '';
				regInfo.password = '';
			}
		});
}

const log = useThrottleFn(() => {
	loginApi().then((resp) => {
		if (resp.status === 200) {
			let flag = false;
			// TODO: 应该在后端进行返回对应数据而不是在这里
			resp.data.userlist.forEach((item, index) => {
				if (flag === false && item.username === regInfo.username && item.password === regInfo.password) {
					flag = true;
					return nextTick(() => {
						LogInfoStore.setLogInStatus(true);
						LogInfoStore.setLogOutStatus(false);
						if (route.query.dest) {
							router.replace({ name: route.query.dest as string });
						} else {
							router.replace({ name: 'Home' });
						}
					});
				} else if (index === resp.data.userlist.length - 1 && flag === false) {
					swal.fire({
						title: '登录失败',
						text: '用户名或密码错误',
						icon: 'error',
						timer: 1300,
						showConfirmButton: false,
						timerProgressBar: true,
					});
				} else {
					return;
				}
				regInfo.username = '';
				regInfo.password = '';
			});
		}
	});
}, 300);

function goback() {
	router.push({ name: 'Home' });
}

function forgetPassWord() {
	let inputPattern = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
	swal
		.mixin({
			customClass: {
				input: 'swal2_content__input',
			},
		})
		.fire({
			title: '找回密码',
			text: '我们将向你的邮箱发送一封邮件',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: '发送',
			cancelButtonText: '取消',
			input: 'text',
			inputPlaceholder: '请输入你的邮箱地址',
			reverseButtons: true,
			inputAttributes: {
				autocapitalize: 'off',
				autocorrect: 'off',
			},
		})
		.then((result) => {
			if (result.isConfirmed) {
				if (result.value === '') {
					swal.fire({
						title: '邮箱地址不能为空',
						text: '请输入你的邮箱地址',
						icon: 'error',
						timer: 1500,
						showConfirmButton: false,
						timerProgressBar: true,
					});
				} else if (!inputPattern.test(result.value)) {
					swal.fire({
						title: '邮箱地址格式错误',
						text: '请输入正确的邮箱地址',
						icon: 'error',
						timer: 1500,
						showConfirmButton: false,
						timerProgressBar: true,
					});
				} else {
					swal.fire({
						title: '发送成功',
						text: '请前往邮箱查看',
						icon: 'success',
						timer: 1700,
						showConfirmButton: false,
						timerProgressBar: true,
					});
				}
			}
		});
}
</script>

<style scoped lang="css">
@import '../assets/css/logByothers.css';
</style>
