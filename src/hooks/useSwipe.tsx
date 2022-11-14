import { RefObject, useRef, useState } from "react";
import { useEventListener } from "./useEventListener";

export type Direction = "up" | "down" | "left" | "right" | "none";

export interface UseSwipeOptions {
  safeDistance?: number;
}

const useSwipeDefaultOptions = {
  safeDistance: 10,
};

export const useSwipe = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T | null>,
  options: UseSwipeOptions = {
    safeDistance: 30,
  }
) => {
  const { safeDistance } = { ...useSwipeDefaultOptions, ...options };

  const [direction, setDirection] = useState<Direction>("none");

  const x = useRef(-1);

  useEventListener(elementRef, "touchstart", (event) => {
    event.preventDefault();
    x.current = event.touches[0].clientX;
  });

  useEventListener(elementRef, "touchmove", (event) => {
    const newX = event.touches[0].clientX;

    const differ = newX - x.current;

    if (Math.abs(differ) < safeDistance) {
      return;
    }

    if (differ > 0) {
      setDirection("right");
    }

    if (differ < 0) {
      setDirection("left");
    }
  });

  useEventListener(elementRef, "touchend", (event) => {
    setDirection("none");
    x.current = -1;
  });

  return {
    direction,
  };
};
