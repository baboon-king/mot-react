import { RefObject, useState } from "react";
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
    safeDistance: 10,
  }
) => {
  const { safeDistance } = { ...useSwipeDefaultOptions, ...options };

  const [direction, SetDirection] = useState<Direction>("none");

  let x = -1;

  useEventListener(elementRef, "touchstart", (event) => {
    event.preventDefault();
    x = event.touches[0].clientX;
  });

  useEventListener(elementRef, "touchmove", (event) => {
    const newX = event.touches[0].clientX;

    const differ = newX - x;

    if (Math.abs(differ) < safeDistance) {
      return;
    }

    if (differ > 0) {
      SetDirection("right");
    }

    if (differ < 0) {
      SetDirection("left");
    }
  });

  useEventListener(elementRef, "touchend", (event) => {
    SetDirection("none");
    x = -1;
  });

  return {
    direction,
  };
};
