<template>
	<component :is="componentId" :key="query"></component>
</template>

<script setup lang="ts">
import noauthority from '@components/403.vue';
import nofound from '@components/404.vue';
import nonetwork from '@components/500.vue';
import unknownError from '@components/myUnkownError.vue';
import type { Component } from 'vue';
import { onMounted, ref, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

let query = ref(useRoute().query);
let componentId = shallowRef<Component>();

onMounted(() => {
	console.log(query.value.error_code);
	if (query.value.error_code) {
		console.log('进入');

		switch (query.value.error_code) {
			case '404':
				console.log('404');
				componentId.value = nofound;
				break;
			case '403':
				console.log('403');
				componentId.value = noauthority;
				break;
			case '500':
				console.log('500');
				componentId.value = nonetwork;
				break;
			default:
				console.log('unknownError');
				componentId.value = unknownError;
				break;
		}
	}
});
</script>
