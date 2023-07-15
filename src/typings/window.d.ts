import type { TinyMCE } from "tinymce"
declare global {
	declare interface Window {
		tinymce: TinyMCE
	}
}
