import http from '@/api';
import { Login } from '@/api/interface';

/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params?: Login.ReqLoginForm) => {
	return http.get<Login.ResLogin>('/userlogin'); // 正常 post json 请求  ==>  application/json
};
