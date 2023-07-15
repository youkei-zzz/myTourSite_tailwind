import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, normalizePath } from 'vite'
import TurboConsole from "vite-plugin-turbo-console";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		TurboConsole()
	],
	resolve: {
		alias: {
			'@': normalizePath(resolve(__dirname, 'src')),
			'@components': normalizePath(resolve(__dirname, 'src/components')),
			'@utils': normalizePath(resolve(__dirname, 'src/utils')),
		},
	},

	envPrefix: 'VITE_', // 环境变量前缀
	server: {
		open: true,
		port:5173,
		proxy: {
			'/api': {
				target: 'https://mock.mengxuegu.com/mock/645f5c037ba95d67784d6e10/tour', // easymock
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	build: {
		outDir: "dist",
		minify: "esbuild",
		// esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
		// minify: "terser",
		// terserOptions: {
		// 	compress: {
		// 		drop_console: viteEnv.VITE_DROP_CONSOLE,
		// 		drop_debugger: true
		// 	}
		// },
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				// Static resource classification and packaging
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
				assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
			}
		}
	}
})
