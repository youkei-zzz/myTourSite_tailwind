/**
* @description : 获取滚动方向
* @param {WheelEvent} callback
* @callback {WheelEvent} event :
*   event.deltaX > 0 ? 'right' : 'left'
*   event.deltaY > 0 ? 'down' : 'up'
*/
export function addWheelListener(callback: (event: WheelEvent) => void) {
	const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	window.addEventListener(
		isFirefox ? 'DOMMouseScroll' : 'wheel',
		(event) => {
			const wheelEvent = event as WheelEvent;
			callback(wheelEvent);
		},
		{ passive: true },
	);
}
