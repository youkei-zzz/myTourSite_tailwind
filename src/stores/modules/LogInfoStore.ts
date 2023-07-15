// 登录状态储存 pinia
import { LogInfo } from '@/stores/interface/logInfo'
import { defineStore } from 'pinia'

/**
 * @description: logInStatus 当前登录状态,默认为false，即处于未登录状态
 * @description: logOutStatus 当前登出状态,默认为true，即处于登出状态
 **/
export const useLogInfoStore = defineStore('LogInfo', () => {
	// 初始化登录状态和登出状态
	sessionStorage.getItem('logInStatus') === null && sessionStorage.setItem('logInStatus', 'false')
	sessionStorage.getItem('logOutStatus') === null && sessionStorage.setItem('logOutStatus', 'true')

	const state = (): LogInfo => ({
		logInStatus: sessionStorage.getItem('logInStatus') === 'true',
		logOutStatus: sessionStorage.getItem('logOutStatus') === 'true',
		otherInfo: {},
	})
	const getters = {
		// 获取登录状态
		getLogInStatus(): boolean {
			return state().logInStatus
		},
		// 获取登出状态
		getLogOutStatus(): boolean {
			return state().logOutStatus
		},
	}
	const actions = {
		// 设置登录状态
		setLogInStatus(status: boolean) {
			state().logInStatus = status
			// 将登录状态持久化到 localStorage 中
			sessionStorage.setItem('logInStatus', status.toString())
		},
		// 设置登出状态
		setLogOutStatus(status: boolean) {
			state().logOutStatus = status
			// 将登出状态持久化到 localStorage 中
			sessionStorage.setItem('logOutStatus', status.toString())
		},
	}
	return {
		...getters,
		...actions,
	}
})
