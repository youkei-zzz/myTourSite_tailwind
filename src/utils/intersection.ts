import { Directive, DirectiveBinding } from 'vue';

interface IntersectionOptions {
	/**
	 * 阈值，用于指定交叉区域的比例， 0表示完全交叉，0.5表示一半交叉，1表示完全不交叉。
	 */
	threshold: number;

	/**
	 * 回调函数，当元素与其根元素交叉时调用。
	 */
	interCallBack?: () => void;

	/**
	 * 销毁时回调函数。
	 */
	interUnCallBack?: () => void;
}

interface ExtendedHTMLElement extends HTMLElement {
	_intersectionObserver?: IntersectionObserver;
}

/**
 * Intersection directive 用于观察元素与其根元素的交叉情况。默认作用于当前绑定指令的元素。
 */
const vIntersection: Directive<ExtendedHTMLElement, IntersectionOptions> = {
	/**
	 * 当指令挂载到元素上时被调用。
	 * @param el - 指令挂载的元素。
	 * @param binding - 包含指令值和修饰符的绑定对象。
	 */

	mounted(el: ExtendedHTMLElement, binding: DirectiveBinding<Omit<IntersectionOptions, 'interUnCallBack'>>) {
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						binding.value.interCallBack?.();
					}
				});
			},
			{
				threshold: binding.value.threshold,
				root: document.querySelector(`${el.className}`) as HTMLElement,
			},
		);
		io.observe(el);

		// 在元素上存储 IntersectionObserver 实例，以便后续解除观察
		el._intersectionObserver = io;
	},

	/**
	 * 当指令与元素解绑时被调用。
	 * @param el - 指令绑定的元素。
	 */
	unmounted(el: ExtendedHTMLElement, binding: DirectiveBinding<Omit<IntersectionOptions, 'interCallBack'>>) {
		const observer = el._intersectionObserver as IntersectionObserver;
		if (observer) {
			binding.value.interUnCallBack?.();
			observer.unobserve(el);
			delete el._intersectionObserver;
		}
	},
};

export default vIntersection;