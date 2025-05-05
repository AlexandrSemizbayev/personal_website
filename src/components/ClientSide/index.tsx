"use client";
import IntersectionHook from '@/hooks/intersectionHook';

export const HomeClientSideComponent = () => {
    IntersectionHook(['#about','#experience']);
  return (<>
    <div
      className="text-2xl"
      id="tailwindcss_classes_loader"
    >
      {/*
        Since tailwind classes are tree shaked,
        we need to apply used classes somewhere in project at initial render.
        The other solution would be changing tailwind setup to 'JIT', but as far I can remember, it was marked as deprecated
      */}
    </div>
  </>);
}

