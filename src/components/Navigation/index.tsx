"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

import EventBus from '../../eventBus';
import {
  channels,
  generateChannel,
} from '@/eventBus/events';
import styles from './styles.module.scss';
const links = [
  {
    title: 'ABOUT',
    link: 'about',
    isActive: true,
  },
  {
    title: 'EXPERIENCE',
    link: 'experience',
    isActive: false,
  },
  // {
  //   title: 'PROJECTS',
  //   link: 'projects',
  //   isActive: false,
  // }
];

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
    reactiveLinks.forEach(({link}) => {
      EventBus.$on(generateChannel(channels.intersect, link), () => {
        const updated = reactiveLinks.map((reactiveLink) => {
          reactiveLink.isActive = false;
          if(link == reactiveLink.link) {
            window.location.hash = `#${link}`;
            reactiveLink.isActive = true;
          }
          return reactiveLink;
        });
        setLinks(() => updated);
      })
    });
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
