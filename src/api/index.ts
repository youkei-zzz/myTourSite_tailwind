/*import { checkStatus } from '@/api/helper/checkStatus';
import { ResultData } from '@/api/interface';
import { ResultEnum } from '@/enums/httpEnum';
import emitter from '@utils/emitter';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	noLoading?: boolean;
}

const config: AxiosRequestConfig = {
	baseURL: import.meta.env.VITE_BASE_API_URL as string,
	timeout: ResultEnum.TIMEOUT as number,
	withCredentials: true,
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		/~*
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
		 ~/

		this.service.interceptors.request
			.use
			// (config: InternalAxiosRequestConfig) => {
			// 	const globalStore = GlobalStore()
			// 	// * 如果当前请求不需要显示 loading,在 api 服务中通过指定的第三个参数: { headers: { noLoading: true } }来控制不显示loading，参见loginApi
			// 	config.headers!.noLoading || showFullScreenLoading()
			// 	const token = globalStore.token
			// 	if (config.headers && typeof config.headers?.set === 'function') config.headers.set('x-access-token', token)
			// 	return config
			// },
			// (error: AxiosError) => {
			// 	return Promise.reject(error)
			// },
			();

		/~*
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 ~/

		this.service.interceptors.response.use(
			// (response: AxiosResponse) => {
			// 	const { data } = response
			// 	const globalStore = GlobalStore()
			// 	// * 在请求结束后，并关闭请求 loading
			// 	tryHideFullScreenLoading()
			// 	// * 登陆失效（code == 401）
			// 	if (data.code == ResultEnum.OVERDUE) {
			// 		ElMessage.error(data.msg)
			// 		globalStore.setToken('')
			// 		router.replace(LOGIN_URL)
			// 		return Promise.reject(data)
			// 	}
			// 	// * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
			// 	if (data.code && data.code !== ResultEnum.SUCCESS) {
			// 		ElMessage.error(data.msg)
			// 		return Promise.reject(data)
			// 	}
			// 	// * 成功请求（在页面上除非特殊情况，否则不用在页面处理失败逻辑）
			// 	return data
			// },
			null,
			async (error: AxiosError) => {
				// tryHideFullScreenLoading()
				// 请求超时 && 网络错误单独判断，没有 response
				if (error.message.indexOf('timeout') !== -1) error.message = '请求超时！请您稍后重试';
				if (error.message.indexOf('Network Error') !== -1) error.message = '网络错误！请您稍后重试';
				// 根据响应的错误状态码，做不同的处理
				if (error.response) error.message = checkStatus(error.response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				// if (!window.navigator.onLine) router.replace('/500')
				emitter.emit('error', error.message);
				return Promise.reject(error);
			},
		);
	}

	// * 常用请求方法封装 , params 是请求参数，_object 是请求配置，比如 headers,timeout 等
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		// const filterUrl = `${import.meta.env.VITE_BASE_API_URL}${url}`.replace(new RegExp(`${import.meta.env.VITE_PREFIX}`), '');
		// console.log('🦑🦑 filterUrl: ', filterUrl);
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
	// download(url: string, params?: object, _object = {}): Promise<BlobPart> {
	// 	return this.service.post(url, params, { ..._object, responseType: 'blob' })
	// }
}

export default new RequestHttp(config);
*/

import { checkStatus } from '@/api/helper/checkStatus';
import { ResultData } from '@/api/interface';
import { ResultEnum } from '@/enums/httpEnum';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'vue-router';

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	noLoading?: boolean;
}

const config: AxiosRequestConfig = {
	// 默认地址请求地址，可在 .env.** 文件中修改
	baseURL: import.meta.env.VITE_API_URL,
	// 设置超时时间
	timeout: ResultEnum.TIMEOUT as number,
	// 跨域时候允许携带凭证
	withCredentials: true,
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// instantiation
		this.service = axios.create(config);
		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的 token,存储到 vuex/pinia/本地储存当中
		 */
		this.service.interceptors.request
			.use
			// (config: CustomAxiosRequestConfig) => {
			//   const userStore = useUserStore();
			//   // 当前请求不需要显示 loading，在 api 服务中通过指定的第三个参数: { noLoading: true } 来控制
			//   config.noLoading || showFullScreenLoading();
			//   if (config.headers && typeof config.headers.set === "function") {
			//     config.headers.set("x-access-token", userStore.token);
			//   }
			//   return config;
			// },
			// (error: AxiosError) => {
			//   return Promise.reject(error);
			// }
			();

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response;
				// const userStore = useUserStore();
				// tryHideFullScreenLoading();
				// // 登陆失效
				// if (data.code == ResultEnum.OVERDUE) {
				//   userStore.setToken("");
				//   router.replace(LOGIN_URL);
				//   ElMessage.error(data.msg);
				//   return Promise.reject(data);
				// }
				// // 全局错误信息拦截（防止下载文件的时候返回数据流，没有 code 直接报错）
				// if (data.code && data.code !== ResultEnum.SUCCESS) {
				//   ElMessage.error(data.msg);
				//   return Promise.reject(data);
				// }
				// 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				// tryHideFullScreenLoading();
				// 请求超时 && 网络错误单独判断，没有 response
				if (error.message.indexOf('timeout') !== -1) error.message = '请求超时！请您稍后重试';
				if (error.message.indexOf('Network Error') !== -1) error.message = '网络错误！请您稍后重试';
				// 根据服务器响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) useRouter().replace({ path: '/error', query: { error_code: 500 } });
				return Promise.reject(error);
			},
		);
	}

	/**
	 * @description 常用请求方法封装
	 */
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
	download(url: string, params?: object, _object = {}): Promise<BlobPart> {
		return this.service.post(url, params, { ..._object, responseType: 'blob' });
	}
}

export default new RequestHttp(config);
