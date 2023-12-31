import router from '@/router';
import pinia from '@/stores';
// import { CacheFirst } from 'workbox-strategies';
// import { registerRoute } from 'workbox-routing';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fa1,
	fa2,
	fa3,
	faBullhorn,
	faCamera,
	faCaretDown,
	faCircleArrowUp,
	faCircleExclamation,
	faCirclePlus,
	faCircleQuestion,
	faCircleUp,
	faCompass,
	faEllipsis,
	faEnvelope,
	faHouse,
	faMoon,
	faReplyAll,
	faRightFromBracket,
	faSun,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';
import './assets/css/global.css';
import './assets/css/tailwind.css';

import { faFaceFrown, faFaceSadTear, faFaceSmile, faSadCry } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { throttledRef, useWindowSize } from '@vueuse/core';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$dynamicWidth = throttledRef(useWindowSize().width, 450);
app.component('font-awesome-icon', FontAwesomeIcon);
library.add(
	faCircleArrowUp,
	faRightFromBracket,
	faEnvelope,
	faHouse,
	faUser,
	faCompass,
	faBullhorn,
	faCamera,
	faCirclePlus,
	faCircleExclamation,
	faMoon,
	faSun,
	faCircleQuestion,
	faCaretDown,
	faEllipsis,
	faFaceSmile,
	fa1,
	fa2,
	fa3,
	faCircleUp,
	faReplyAll,
	faFaceSadTear,
	faFaceFrown,
	faSadCry,
);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service_worker.js') // 注册你的自定义 Service Worker 文件
//       .then(registration => {
//         console.log('Service Worker 注册成功：', registration);
//       })
//       .catch(error => {
//         console.error('Service Worker 注册失败：', error);
//       });
//   });
// }

// registerRoute(
// 	({ request }) => request.destination === 'image',
// 	new CacheFirst({
// 		cacheName: 'image-cache',
// 	}),
// );

// import * as navigationPreload from 'workbox-navigation-preload';
// import { NetworkFirst } from 'workbox-strategies';
// import { NavigationRoute } from 'workbox-routing';

// Enable navigation preload.
// navigationPreload.enable();

// Swap in NetworkOnly, CacheFirst, or StaleWhileRevalidate as needed.
// const strategy = new NetworkFirst({
// 	cacheName: 'cached-navigations',
// 	plugins: [
// 		// Any plugins, like `ExpirationPlugin`, etc.
// 	],
// });

// const navigationRoute = new NavigationRoute(strategy, {
// 	// Optionally, provide a allow/denylist of RegExps to determine
// 	// which paths will match this route.
// 	// allowlist: [],
// 	// denylist: [],
// });

// registerRoute(navigationRoute);
app.use(pinia).use(router).mount('#app');
