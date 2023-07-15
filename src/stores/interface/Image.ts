export interface ImageObj {
	url: string
	id?: number
	alt?: string
}

export interface ImageObjMap {
	[key: number]: ImageObj[]
}
