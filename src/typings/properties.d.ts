import type { Ref } from 'vue';
declare module 'vue' {
	export interface ComponentCustomProperties {
		$dynamicWidth: Ref<number>;
	}
}
