import { useEffect } from "react";
import EventBus from "../eventBus";
import {
  Channels,
  generateChannel,
} from '@/eventBus/events';
import { initObservers } from "@/utils/customIntersectionObserver";
const channels:{[k:string]: IChannel} = {};

const IntersectionHook = (elementsToObserve: Array<string> = []) => {
  useEffect(() => {

    elementsToObserve.forEach((selector: string) => {
      channels[selector] = generateChannel(Channels.intersect, selector);
    });
    if(window.innerWidth >= 1024) {
      initObservers(elementsToObserve, (selector) => {
        history.replaceState(null, '', document.location.pathname + `#${selector}`);
        EventBus.$emit(channels[selector]);
      })
    } else {
      window.location.hash = '';
    }
    return () => {
      const keys = Object.keys(channels) as string[];
      EventBus.$off(keys as string[]);
      keys.forEach((key: string) => {
        delete channels[key];
      })
    }
  }, []);
}

export default IntersectionHook;