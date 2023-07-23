import './assets/css/global.css';
import './assets/css/tailwind.css';
import router from '@/router';
import pinia from '@/stores';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	fa1,
	fa2,
	fa3,
	faBullhorn,
	faCamera,
	faCaretDown,
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
	faCircleExclamation,
	faUser,
	faCircleArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

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
// main.js

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


app.use(pinia).use(router).mount('#app');
