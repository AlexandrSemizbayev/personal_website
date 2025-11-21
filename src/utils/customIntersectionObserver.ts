let timeout:  null | ReturnType<typeof setTimeout> = null;
let currentSelector = '';

function delayedCall(callback: (...args: any[]) => any, selector: string) {
	// @ts-expect-error It's just a timeout guys
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		currentSelector = selector;
		callback();
	}, 100);
}

export function initObservers(selectors: string[], callback: (selector: string) => void) {
	window.addEventListener('scroll', () => {
			selectors.forEach(selector => {
				if(currentSelector == selector) return;
				const element = document.querySelector(`#${selector}`);
				if (element) {
					const rectOnInit = element.getBoundingClientRect();
					const rect = element.getBoundingClientRect();
					const isIntersectingBigElement = (rectOnInit.height > innerHeight && rect.top < 0 && rect.bottom > 0)
					const isIntersectingSmallElementFullyVisible = rect.y >= 0 && rect.bottom > 0;
					if ((isIntersectingBigElement || isIntersectingSmallElementFullyVisible) && currentSelector !== selector) {
						delayedCall(() => callback(selector),selector);
					}
				}
			})
		}, false);
}