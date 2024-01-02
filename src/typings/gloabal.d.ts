declare type Recordable<T = any> = Record<string, T>;

/* Vite 构建环境变量 */
declare interface ViteEnv {
	VITE_USER_NODE_ENV: 'development' | 'production';
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_VISIUALIZER: boolean;
	VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'gzip,brotli' | 'none';
	VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
	VITE_DROP_CONSOLE: boolean;
	VITE_PWA: boolean;
	VITE_PUBLIC_PATH: string;
	VITE_API_URL: string;
	VITE_PROXY: [string, string][];
	VITE_TURBOCONSOLE: boolean;
	VITE_PREFIX: string;
}

/* 自定义变量 */
interface ImportMetaEnv extends ViteEnv {
	readonly VITE_ALGOLIA_ID: string;
	readonly VITE_ALGOLIA_KEY: string;
	readonly VITE_MAPBOX_TOKEN: string;
	readonly VITE_TinyMCE_API_KEY: string;
	readonly Tencent_COS_SECRETKEY: string;
	readonly Tencent_COS_SECRETID: string;
	readonly VITE_Lottie_PENCIL: string;
	readonly VITE_PERSON_QQ: string;
	readonly VITE_PERSON_WECHAT: string;
	readonly VITE_PERSON_MAIL: string;
	readonly VITE_PERSON_ADDRESS: string;
	readonly VITE_PERSON_AUTHOR: string;
	readonly VITE_UNSPLASH_KEY: string;
}

/* 第三方库声明 */
declare module 'imagesloaded';
