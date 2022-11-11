import { RefObject, useEffect } from "react";

export interface UseEventListenerOptions extends AddEventListenerOptions {}

type EventMap<T> = T extends HTMLElement
  ? HTMLElementEventMap
  : T extends Document
  ? DocumentEventMap
  : T extends Window
  ? WindowEventMap
  : never;

export const useEventListener = <
  Target extends RefObject<HTMLElement | Document | Window | null>,
  EventType extends keyof EventMap<Target["current"]>
>(
  target: Target,
  eventType: EventType,
  listener: (
    this: Target,
    event: EventMap<Target["current"]>[EventType]
  ) => any,
  options?: boolean | UseEventListenerOptions
) => {
  const cleanup = () => {
    if (!target.current) {
      return;
    }
    target.current.removeEventListener(
      eventType as any,
      listener as any,
      options
    );
  };

  useEffect(() => {
    if (!target.current) {
      return;
    }
    target.current.addEventListener(eventType as any, listener as any, options);

    return cleanup;
  });

  return cleanup;
};
