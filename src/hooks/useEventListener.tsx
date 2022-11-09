export interface UseEventListenerOptions extends AddEventListenerOptions {}

type EventMap<T> = T extends HTMLElement
  ? HTMLElementEventMap
  : T extends Document
  ? DocumentEventMap
  : T extends Window
  ? WindowEventMap
  : never;

export const useEventListener = <
  Target extends HTMLElement | Document | Window,
  EventType extends keyof EventMap<Target>
>(
  target: Target,
  eventType: EventType,
  listener: (this: Target, event: EventMap<Target>[EventType]) => any,
  options?: boolean | UseEventListenerOptions
) => {
  if (!target) {
    return;
  }

  target.addEventListener(eventType as any, listener as any, options);

  const cleanup = () => {
    target.removeEventListener(eventType as any, listener as any, options);
  };
  return cleanup;
};
