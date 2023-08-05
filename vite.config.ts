import { resolve } from 'path';
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';
import { wrapperEnv } from './build/getEnv';
import { createVitePlugins } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
	const root = process.cwd(); // 当前工作目录
	const env = loadEnv(mode, root); // 环境变量, 从.env 文件中读取,例如: import.meta.env.VITE_PORT。mode是当前环境变量
	const viteEnv = wrapperEnv(env); // 将环境变量转换成 Vite 配置文件中的变量

	console.log('🦑🦑 mode: ', mode, '🦑🦑 viteEnv: ', viteEnv);
	return {
		base: viteEnv.VITE_PUBLIC_PATH, // 部署时的公共路径
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				'@components': resolve(__dirname, 'src/components'),
				'@utils': resolve(__dirname, 'src/utils'),
			},
		},
		root,
		
		css: {
			transformer: 'postcss',
		},
		server: {
			host: '0.0.0.0',
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
		},
		plugins: createVitePlugins(viteEnv),

		build: {
			cssMinify: 'lightningcss',
			outDir: 'dist',
			minify: 'terser',

			terserOptions: {
				compress: {
					drop_console: viteEnv.VITE_DROP_CONSOLE,
					drop_debugger: true,
				},
				format: {
					comments: false,
				},
			},
			chunkSizeWarningLimit: 1500,
			rollupOptions: {
				output: {
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

					manualChunks(id) {
						//静态资源拆分打包
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString();
						}
					},
				},
			},
		},
	};
});
