enum Easing {
	linear = 'linear',
	easeInQuad = 'easeInQuad',
	easeOutQuad = 'easeOutQuad',
	easeInOutQuad = 'easeInOutQuad',
	easeInCubic = 'easeInCubic',
}

const easingMap: EasingMap = {
	linear: (t: number) => t,
	easeInQuad: (t: number) => t * t,
	easeOutQuad: (t: number) => t * (2 - t),
	easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
	easeInCubic: (t: number) => t * t * t,
}

type EasingType = keyof typeof Easing

type EasingMap = {
	[K in EasingType]: (t: number) => number
}

/** 滚动到顶部
 * @example  scrollSmooth('easeInOutQuad', 500) or scrollSmooth('easeInOutQuad') or scrollSmooth()
 * @param {Easing} mode 缓动函数的模式，默认为 easeInOutQuad
 * @param {number} duration 滚动时间，默认为 500ms
 * @return {void} void
 */
const scrollSmooth = (mode: EasingType = Easing.easeInOutQuad, duration: number = 500): void => {
	const start = window.pageYOffset // 获取当前页面滚动位置
	const end = 0 // 设置滚动目标位置

	const easeInOutQuad = easingMap[mode]

	const startTime = performance.now() // 获取当前时间戳
	const whenscroll = () => {
		const elapsed = performance.now() - startTime // 计算已经过去的时间
		const progress = Math.min(elapsed / duration, 1) // 计算当前进度
		const position = start + (end - start) * easeInOutQuad(progress) // 计算当前位置
		window.scrollTo(0, position) // 滚动到当前位置
		if (progress < 1) requestAnimationFrame(whenscroll) // 如果滚动未完成，则继续滚动
	}
	requestAnimationFrame(whenscroll) // 开始滚动
}

export default scrollSmooth
