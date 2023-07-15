<template>
	<form @submit.prevent="handleSubmit" class="editor_form flex flex-col items-center h-[450px] opacity-0 transition-opacity duration-1000 ease-in-out" :key="theme">
		<div class="">
			<Editor @vue:before-mount="hanleEditorChange" @vue:before-unmount="leaveEditor" :api-key="`${apiKey}`" :init="editorConfig" class="tinymce_editor" />
			<button
				type="submit"
				ref="submitBtn"
				:disabled="logInfoStore.getLogOutStatus()"
				:class="[logInfoStore.getLogOutStatus() ? 'cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-white/20']"
				class="rounded-md hidden bg-white dark:bg-white/10 px-3 py-2 text-sm font-semibold w-full mt-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-500">
				{{ route.path === '/blog' ? '发表' : '提交' }}
			</button>
		</div>
	</form>
</template>

<script lang="ts" setup>
import { useLogInfoStore } from '@/stores/modules/loginfoStore';
import Editor from '@tinymce/tinymce-vue';
import emitter from '@utils/emitter';
import { useStorage } from '@vueuse/core';
import swal from 'sweetalert2';
import type { Editor as EditorType, RawEditorOptions } from 'tinymce';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

let content = '';
let logInfoStore = useLogInfoStore();
let apiKey = import.meta.env.VITE_TinyMCE_API_KEY;
let route = useRoute();
let submitBtn = ref<HTMLButtonElement>();
let theme = useStorage('theme', sessionStorage.getItem('theme') ?? 'light', sessionStorage);

let editorConfig = reactive<RawEditorOptions>({
	plugins: 'lists link image table code help emoticons',
	toolbar:
		'undo redo | formatselect | emoticons bold italic backcolor | removeformat | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | image ',
	menubar: false,
	max_height: 400,
	min_height: 300,
	width: '70vw',
	highlight_on_focus: true,
	branding: false,
	images_file_types: 'jpg,png,jpeg,webp',
	language: 'zh_CN',
	images_upload_url: 'http://localhost:3001/api/upload-avatar',
	resize: false,
	content_style: `body { font-family:MicroSoft YaHei,Helvetica,Arial,sans-serif;color:gray;font-size:16px;${
		sessionStorage.getItem('theme') === 'dark' ? 'background-color:#1f2937;color:#fff' : ''
	}}`,
	placeholder: '在此输入内容',
	skin: sessionStorage.getItem('theme') === 'dark' ? 'oxide-dark' : 'oxide',

	setup: function (editor: EditorType) {
		editor.on('init', function () {
			let messageNode = new DOMParser().parseFromString(
				`<div id="main">
                <div class="fof">
                  <h1>登录后才可使用</h1>
                </div>
            </div>`,
				'text/html',
			).body.firstChild!;

			let styles = `body{user-select:none;font-family:'Microsoft YaHei','Noto Sans SC',sans-serif;margin:0;overflow-y:hidden}#main{display:flex;justify-content: center;align-items: center; height:75vh}.fof{display:table-cell;vertical-align:middle}.fof h1{font-size:8vmin;color:gray;display:inline-block;padding-right:12px;animation:type .5s alternate infinite}@keyframes type{from{box-shadow:inset -3px 0 0 #888}to{box-shadow:inset -3px 0 0 transparent}}`;

			if (logInfoStore.getLogInStatus() === false) {
				window.tinymce.activeEditor!.mode.set('readonly');
				window.tinymce.activeEditor!.getBody().appendChild(messageNode);
				window.tinymce.activeEditor!.dom.addStyle(styles);
				window.tinymce.activeEditor!.dom.addClass(window.tinymce.activeEditor!.getBody(), 'dark:text-slate-300 text-slate-500');
			}
		});

		editor.on('error', function () {
			emitter.emit('error', '富文本编辑器加载失败，请刷新页面重试');
		});
	},
	init_instance_callback(editor) {
		let container = document.querySelector('.editor_form')! as HTMLElement;
		if (editor.initialized) {
			container.classList.remove('opacity-0');
			container.classList.add('opacity-100');
			content && logInfoStore.getLogInStatus() && editor.setContent(content);
			submitBtn.value?.classList.remove('hidden');
		} else {
			// console.log('初始化失败')
		}
	},
	xss_sanitization: true,
});

// TODO: 评分向后台提交
let handleSubmit = () => {
	// 获取富文本编辑器内容

	let content = window.tinymce.activeEditor?.getContent({ format: 'html' });
	let currentPath = route.path;
	// 空白字符串不提交
	if (/^\s*$/g.test(content as string)) {
		swal.fire({
			title: '失败',
			text: `${currentPath === '/contact' ? '请填写反馈内容' : '请填写评论内容'}`,
			icon: 'error',
			confirmButtonText: '确定',
		});
		return;
	} else {
		window.tinymce.activeEditor?.setContent('', { initial: true });
		swal.fire({
			title: '成功',
			text: `Test,成功`,
			icon: 'success',
			confirmButtonText: '确定',
		});
	}
};

let hanleEditorChange = () => {
	editorConfig.skin = theme.value === 'dark' ? 'oxide' : 'oxide-dark';
	editorConfig.content_style =
		theme.value === 'dark'
			? `body { font-family:MicroSoft YaHei,Helvetica,Arial,sans-serif; font-size:16px;color:gray}`
			: `body { font-family:MicroSoft YaHei,Helvetica,Arial,sans-serif; font-size:16px;background-color:#1f2937;color:#d1d5db}`;
};

let leaveEditor = () => {
	let container = document.querySelector('.editor_form')! as HTMLElement;
	content = window.tinymce.activeEditor?.getContent({ format: 'text' }) ?? '';
	container.classList.remove('opacity-100');
	container.classList.remove('opacity-0');
	container.classList.add('hidden');
};
</script>
