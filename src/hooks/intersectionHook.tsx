import { useEffect } from "react";
import { createObservableElement } from "@/utils/intersectionObserver";
import EventBus from "../eventBus";
import {
  channels,
  generateChannel,
} from '@/eventBus/events';

const IntersectionHook = (elementsToObserve: Array<string> = []) => {
  useEffect(() => {
    const eventsInAir:{[key: string]: boolean} = {};
    const observers: Array<IntersectionObserver> = elementsToObserve.map((element) => {
      return createObservableElement(
        document.querySelector(element),
        (entry,_, observer) => {
            const isReady = document.readyState === 'complete';
            if(window.innerWidth >= 1024 && isReady) {
              const channel = generateChannel(channels.intersect,entry.target.id)
              eventsInAir[channel.listenTo] = true;
              EventBus.$emit(channel);
            } else if(window.innerWidth < 1024) {
              window.location.hash = '';
            }
          return observer;
        }
      );
    });
    return () => {
      observers.forEach((obs) => {
        obs.disconnect();
      });
      EventBus.$off(Object.keys(eventsInAir) as string[]);
    }
  }, []);
}

export default IntersectionHook;