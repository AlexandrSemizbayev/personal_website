"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

import EventBus from '../../eventBus';
import {
  Channels,
  generateChannel,
} from '@/eventBus/events';
import styles from './styles.module.scss';

const hash = typeof window !== 'undefined' ? location.hash.replace('#', '') || 'about' : 'about';
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
    const dict: {[k: string]: number} = {};
    for(let i = 0; i < reactiveLinks.length; i++) {
      const link = reactiveLinks[i];
      dict[link.link] = i;
      EventBus.$on(generateChannel(Channels.intersect, link.link), () => {
        const tmp = reactiveLinks;
        for(let i = 0; i < tmp.length; i++) {
          tmp[i].isActive = link.link === tmp[i].link;
          // if(link.link !== tmp[i].link) {
          //   tmp[i].isActive = false;
          // } else {
          //   tmp[i].isActive = true;
          // }
        }
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
