declare global {
	interface IChannel {
		channel: string,
		event: string,
		listenTo: string,
	}
}
export {};
