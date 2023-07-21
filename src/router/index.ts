import { useLogInfoStore } from '@/stores/modules/loginfoStore';
import Home from '@/views/home.vue';
import scrollmode from '@utils/scrollmode';
import swal from 'sweetalert2';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: { transitions: {}, keepAlive: true },
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('@/views/login.vue'),
		},
		{
			path: '/blog',
			name: 'Blog',
			component: () => import('@/views/blog.vue'),
		},
		{
			path: '/travel',
			name: 'Travel',
			component: () => import('@/views/travel.vue'),
		},

		{
			path: '/help',
			name: 'Help',
			component: () => import('@/layout/helpCenter.vue'),
			children: [
				{
					path: '',
					name: 'HelpHome',
					component: () => import('@/views/help.vue'),
				},
				{
					path: 'esContactus',
					name: 'EsContactus',
					component: () => import('@/views/contactus.vue'),
				},
				{
					path: 'psContactus',
					name: 'PsContactus',
					redirect: () => {
						return { name: 'EsContactus' };
					},
				},
				{
					path: 'about',
					name: 'About',
					component: () => import('@/views/aboutus.vue'),
				},
			],
		},
		{
			path: '/pdoverview/:id',
			name: 'Pdoverview',
			component: () => import('@/views/prodview.vue'),
		},
		{
			path: '/shopbagview',
			name: 'Shopbagview',
			component: () => import('@/views/shopbagview.vue'),
		},

		// 错误页面
		{
			path: '/error',
			name: 'Error',
			component: () => import('@/views/lost.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: () => {
				return { path: '/error', query: { error_code: '404' } };
			},
		},
	],
});

router.beforeResolve((to, from, next) => {
	if (to.meta.requiresAuth && to.meta.necessity === true) {
		if (useLogInfoStore().getLogInStatus()) {
			next();
		} else {
			swal
				.fire({
					title: '请先登录',
					text: '是否跳转到登录页面',
					icon: 'warning',
					showCancelButton: true,
					cancelButtonText: '取消',
					confirmButtonText: '确定',
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					reverseButtons: true,
				})
				.then((result) => {
					if (result.isConfirmed) {
						next({
							path: '/login',
							query: { isAuth: to.query.isAuth, dest: to.query.dest },
						});
					} else {
						next({ name: from.name as string });
					}
				});
		}
	} else if (to.meta.requiresAuth && to.meta.necessity === false) {
		if (useLogInfoStore().getLogInStatus()) {
			next();
		} else {
			swal
				.fire({
					title: '游客身份无法使用部分功能',
					text: '您可以稍后登录',
					timer: 1300,
					icon: 'warning',
					showConfirmButton: false,
					timerProgressBar: true,
					allowEnterKey: false,
					allowOutsideClick: false,
				})
				.then(() => {
					next();
				});
		}
	} else {
		next();
	}
});

router.afterEach((to, from) => {
	if (to.fullPath !== from.fullPath) {
		scrollmode('easeInOutQuad');
	}
	// 为 transitions = {} 设置默认值
	if (typeof to.meta.transitions === 'object' && Boolean(to.meta.transitions)) {
		to.meta.transitions = { leave: 'animate__animated animate__fadeOut', enter: 'animate__animated animate__fadeIn' };
	}
});

export default router;
