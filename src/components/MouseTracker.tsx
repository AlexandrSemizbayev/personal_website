'use client';
import { useEffect, useState } from "react";

const MouseTracker = () => {
  
  const [position, setPosition] = useState({x:-1000,y:-1000});
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(() => {
        setPosition(() => ({x:e.x,y:e.y}));
      })
    });
    window.addEventListener('touchmove', (e) => {
      const clientX = e.changedTouches[0].clientX;
      const clientY = e.changedTouches[0].clientY;
      window.requestAnimationFrame(() => {
        setPosition(() => ({x:clientX,y:clientY}));
      })
    });
  }, []);
  return <>
    <div
      className="absolute w-screen min-h-screen h-full"
      style={{
        background: `radial-gradient(500px at ${position.x}px ${position.y}px,var(--pointer_color), transparent)`
      }}
    ></div>
  </>
}

export default MouseTracker;