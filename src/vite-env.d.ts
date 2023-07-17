/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_Algolia_ID: string;
	readonly VITE_Algolia_KEY: string;
	readonly VITE_MAPBOX_TOKEN: string;
	readonly VITE_TinyMCE_API_KEY: string;
	readonly VITE_BASE_API_URL: string;
	readonly VITE_Lottie_MAN: string;
	readonly VITE_Lottie_MOON: string;
	readonly VITE_Lottie_FIRE: string;
	readonly VITE_Lottie_PENCIL: string;
	readonly VITE_PERSON_QQ: string;
	readonly VITE_PERSON_WECHAT: string;
	readonly VITE_PERSON_MAIL: string;
	readonly VITE_PERSON_ADDRESS: string;
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
