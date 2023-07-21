/* 第三方库声明 */
declare module 'imagesloaded';

import 'vue-router';
import { Ref } from 'vue';

declare module 'vue' {
	export interface ComponentCustomProperties {
		$dynamicWidth: Ref<number>;
	}
}
declare type Transition = {
	/**
	 * 进入过渡效果，在进入目的页面时应用该类，使用animate.css
	 * 如果不需要动画，则应设置为false
	 */
	enter?: string | false;
	/**
	 * 离开过渡效果，在离开目的页面时应用该类，使用animate.css
	 * 如果不需要动画，则应设置为false
	 */
	leave?: string | false;
};
/**
 * 扩展Vue Router的RouteMeta接口，用于定义路由元数据
 */
declare module 'vue-router' {
	/**
	 * 路由元数据
	 */
	interface RouteMeta {
		/**
		 * 是否需要身份验证
		 */
		requiresAuth?: boolean;

		/**
		 * 是否必要
		 */
		necessity?: boolean;
		/**
		 * @example
		 * 过渡效果配置，在进入目的页面和离开目的页面时生效
		 * @example
		 * 如果不希望动画，则应设置为false；如果希望使用默认动画，则应设置为 transition: {}
		 */
		transitions?: Transition | boolean;

		/**
		 * 是否缓存页面
		 * @example
		 * 如果需要缓存页面，则应设置为true
		 * @example
		 * 如果不需要缓存页面，则应设置为false
		 */
		keepAlive?: boolean;
	}
	interface RouteLocationNormalizedLoaded {
		query: {
			/**
			 * 错误类型
			 * @example
			 * 404: 未找到页面
			 * @example
			 * 403: 无权限访问
			 * @example
			 * 500: 服务器错误
			 * @default 404
			 */
			error_code?: '404' | '403' | '500';
			[key: string]: any;
		};
	}
}
