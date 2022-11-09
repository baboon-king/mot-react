declare global {
  type Recordable<T = unknown> = Record<string, T>;
  type ValueOf<T> = T[keyof T];
}
export {};
