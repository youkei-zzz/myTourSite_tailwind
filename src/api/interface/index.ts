// 图片
export interface ImageObj {
	url: string
	id?: number
	alt?: string
	desc?: string
}
export interface Userlist {
	username: string
	password: string
	avartar: string
	timeStamp: string
}

// * 请求响应参数(不包含data)
export interface Result {
	status: number
	statusText: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
	data: T
}

// * 分页响应参数
export interface ResPage<T> {
	list: T[]
	pageNum: number
	pageSize: number
	total: number
}

// * 分页请求参数
export interface ReqPage {
	pageNum: number
	pageSize: number
}

// * 文件上传模块
export namespace Upload {
	export interface ResFileUrl {
		fileUrl: string
	}
}

// * 登录模块
export namespace Login {
	export interface ReqLoginForm {
		username: string
		password: string
	}

	export interface ResLogin {
		// access_token: string
		userlist: Userlist[]
	}

	export interface ResAuthButtons {
		[key: string]: string[]
	}
}

// * 用户管理模块
export namespace User {
	export interface ReqUserParams extends ReqPage {
		username: string
		gender: number
		idCard: string
		email: string
		address: string
		createTime: string[]
		status: number
	}
	export interface ResUserList {
		id: string
		username: string
		gender: number
		user: {
			detail: {
				age: number
			}
		}
		idCard: string
		email: string
		address: string
		createTime: string
		status: number
		avatar: string
		photo: any[]
		children?: ResUserList[]
	}
	export interface ResStatus {
		userLabel: string
		userValue: number
	}
	export interface ResGender {
		genderLabel: string
		genderValue: number
	}
	export interface ResDepartment {
		id: string
		name: string
		children?: ResDepartment[]
	}
	export interface ResRole {
		id: string
		name: string
		children?: ResDepartment[]
	}
}

// *  证词管理模块
export namespace Testimony {
	interface testi {
		message: string
		name: string
		avatar: string
	}
	export interface homeTestimony {
		content: testi[]
	}
}

export namespace City {
	export interface cityInfo {
		id: number
		name: string
		location: string
		rating: number
		level: string
		address: string
		slogan: string
		price: number
		sales: number
		province: string
		objectID: string
		_highlightResult: HighlightResult
	}

	export interface HighlightResult {
		name: Name
	}

	export interface Name {
		value: string
		matchLevel: string
		fullyHighlighted: boolean
		matchedWords: string[]
	}
}
