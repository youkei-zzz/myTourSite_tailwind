import mitt, { Emitter } from 'mitt';

type Events = {
	error: string;
	notify: string;
	popover: boolean;
};

const emitter: Emitter<Events> = mitt<Events>();

export default emitter;

export type emitterType = Emitter<Events>;