import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  excludeRef?: RefObject<HTMLElement>
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const excludeEl = excludeRef?.current;
      const target = event.target as Node;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(target)) {
        return;
      }

      // Do nothing if clicking exclude ref's element or descendent elements
      if (excludeEl && excludeEl.contains(target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener as EventListener);
    document.addEventListener('touchstart', listener as EventListener);

    return () => {
      document.removeEventListener('mousedown', listener as EventListener);
      document.removeEventListener('touchstart', listener as EventListener);
    };
  }, [ref, handler, excludeRef]);
}

export default useClickOutside;
