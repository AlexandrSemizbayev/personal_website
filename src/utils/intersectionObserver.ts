type TCallback = (
  entry: IntersectionObserverEntry,
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

function generateCallback<T extends TCallback>(callback: T): (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void {
  return function (entries, observer) {
  entries.forEach((entry) => callback(entry,entries,observer));
  }
}

export function createObservableElement(
  element: HTMLElement | null,
  callback: TCallback,
  options?: {
    root?: HTMLElement | null,
    rootMargin: string,
    threshold: number | number[],
  }
): IntersectionObserver {
  const customizedOptions = {...options};
  customizedOptions.threshold = []
  for(let i = 0.5; i < 1; i += 0.25) {
    customizedOptions.threshold.push(i+0.25);
  }
  const observer = new IntersectionObserver(generateCallback<TCallback>(callback), customizedOptions || {})
  if(element) {
    observer.observe(element);
  }
  return observer;
}