"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

import EventBus from '../../eventBus';
import {
  channels,
  generateChannel,
} from '@/eventBus/events';
import styles from './styles.module.scss';

const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') || 'about' : 'about';
function generateRoute(title: string, link?: string, isActive?: boolean) {
  return {
    title: title.toUpperCase(),
    link: link || title,
    isActive: typeof isActive === 'undefined' ? hash === (link || title) : isActive,
  }
}
const links = [
  'about','experience',
].map((title) => generateRoute(title));


const Navigation = () => {


  const [reactiveLinks, setLinks] = useState(links);
  function changeActive(idx: number) {
    const updatedLinks = reactiveLinks.map((l) => {
      l.isActive = false
      return l;
    });
    updatedLinks[idx].isActive = true;
    setLinks(() => updatedLinks);
  }
  useEffect(() => {
    let activeLinkIdx = -1;
    const dict: {[k: string]: number} = {};
    for(let i = 0; i < reactiveLinks.length; i++) {
      const link = reactiveLinks[i];
      dict[link.link] = i;
      EventBus.$on(generateChannel(channels.intersect, link.link), () => {
        const tmp = reactiveLinks;
        const newLinkIdx = dict[link.link];
        if(newLinkIdx === activeLinkIdx) return;
        if(activeLinkIdx >= 0) {
          tmp[activeLinkIdx].isActive = false;
        }
        tmp[newLinkIdx].isActive = true;
        activeLinkIdx = newLinkIdx;
        setLinks(() => [...tmp]);
        history.replaceState(null, '', document.location.pathname + `#${link.link}`);
      });
    }
  },[]);
  return (
    <div className="mt-12">
      
      {
        reactiveLinks.map((link,idx) => (
            <div
              key={link.link}
              className={`${styles.link} ${link.isActive ? styles['active-link'] : styles['inactive-link']}`}
            >
              <div
                className={styles['horizontal-line']}
              ></div>
              <Link
                href={`#${link.link}`}
                scroll={true}
                onClick={() => changeActive(idx)}
              >
                {link.title}
              </Link>
            </div>
          )
        )
      }
    </div>
  )
}

export default Navigation;
