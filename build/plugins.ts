import { visualizer } from 'rollup-plugin-visualizer';
import { PluginOption } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import TurboConsole from 'vite-plugin-turbo-console';

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
	const { VITE_VISIUALIZER, VITE_PWA, VITE_TURBOCONSOLE } = viteEnv;
	return [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		// 创建打包压缩配置
		createCompression(viteEnv),
		// vitePWA
		VITE_PWA && createVitePwa(viteEnv),
		// 是否生成包预览，分析依赖包大小做优化处理
		VITE_VISIUALIZER && (visualizer({ filename: 'stats.html', gzipSize: true, brotliSize: true, open: true }) as PluginOption),
		// vite-plugin-turbo-console
		VITE_TURBOCONSOLE && TurboConsole(),
	];
};

/**
 * @description 根据 compress 配置，生成不同的压缩规则
 * @param viteEnv
 */
const createCompression = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
	const { VITE_BUILD_COMPRESS = 'none', VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
	const compressList = VITE_BUILD_COMPRESS.split(',');
	const plugins: PluginOption[] = [];
	if (compressList.includes('gzip')) {
		plugins.push(
			viteCompression({
				threshold: 10240,
				ext: '.gz',
				algorithm: 'gzip',
				deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
			}),
		);
	}
	if (compressList.includes('brotli')) {
		plugins.push(
			viteCompression({
				threshold: 10240,
				ext: '.br',
				algorithm: 'brotliCompress',
				deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
			}),
		);
	}
	return plugins;
};

/**
 * @description VitePwa
 * @param viteEnv
 */
const createVitePwa = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
	return VitePWA({
		registerType: 'autoUpdate',
		minify: true,
		includeAssets: ['robots.txt', 'logo.png', 'logo32.png', 'logo24.png', 'maskable_icon.png'],

		manifest: {
			theme_color: '#e3b200',
			name: 'Tralive',
			short_name: 'Tralive',
			start_url: viteEnv.VITE_PUBLIC_PATH,
			categories: ['student', 'personal', 'travel'],
			
			icons: [
				{
					src: '/logo.png',
					sizes: '61x59',
					type: 'image/png',
				},
				{
					src: '/logo32.png',
					sizes: '32x32',
					type: 'image/png',
				},
				{
					src: '/logo24.png',
					sizes: '24x24',
					type: 'image/png',
				},
				{
					src: '/maskable_icon.png',
					sizes: '512x512',
					purpose: 'any maskable',
				},
			],
		},

		workbox: {
			cacheId: 'wisbayar-cache',
			globPatterns: ['**/*.{js,css,png,jpg,svg,webp}'],
			additionalManifestEntries: [
				{ url: 'error?error_code=404', revision: null },
				{ url: 'error?error_code=500', revision: null },
				{ url: 'error?error_code=403', revision: null },
				{ url: 'login', revision: null },

			],
			
			runtimeCaching: [
				{
					urlPattern: /\/login/,
					handler: 'StaleWhileRevalidate',
					options: {
						cacheName: 'wisbayar-login',
						cacheableResponse: {
							statuses: [200],
						},
					},
				},
				{
					urlPattern: /.*\.unsplash\.com.*/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'wisbayar-unsplash',
						expiration: {
							maxEntries: 20,
							maxAgeSeconds: 12 * 60 * 60,
						},
						matchOptions: {
							ignoreSearch: false,
							ignoreVary: false,
						},
						cacheableResponse: {
							statuses: [200],
						},
					},
				},

				{
					urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'wisbayar-images',
						cacheableResponse: {
							statuses: [200],
						},
						expiration: {
							maxEntries: 30,
							maxAgeSeconds: 2 * 60 * 60,
						},
					},
				},
				{
					urlPattern: /.*\.js.*/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'wisbayar-js',
						expiration: {
							maxEntries: 30,
							maxAgeSeconds: 30 * 24 * 60 * 60,
						},
						cacheableResponse: {
							statuses: [200],
						},
					},
				},
				{
					urlPattern: /.*\.css.*/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'wisbayar-css',
						expiration: {
							maxEntries: 20,
							maxAgeSeconds: 30 * 24 * 60 * 60,
						},
						cacheableResponse: {
							statuses: [200],
						},
					},
				},
				{
					// .json文件缓存
					urlPattern: /.*\.json.*/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'wisbayar-json',
						expiration: {
							maxEntries: 20,
							maxAgeSeconds: 12 * 60 * 60,
						},
						cacheableResponse: {
							statuses: [200],
						},
					},
				},
			],
		},
		selfDestroying: false,
	});
};
