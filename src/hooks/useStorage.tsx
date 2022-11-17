import { useState } from "react";

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface Serializer<T> {
  read(raw: string): T;
  write(value: T): string;
}

export function guessSerializerType<
  T extends string | number | boolean | object | null
>(rawInit: T) {
  return rawInit == null
    ? "any"
    : rawInit instanceof Set
    ? "set"
    : rawInit instanceof Map
    ? "map"
    : rawInit instanceof Date
    ? "date"
    : typeof rawInit === "boolean"
    ? "boolean"
    : typeof rawInit === "string"
    ? "string"
    : typeof rawInit === "object"
    ? "object"
    : !Number.isNaN(rawInit)
    ? "number"
    : "any";
}

export const StorageSerializers: Record<
  "boolean" | "object" | "number" | "any" | "string" | "map" | "set" | "date",
  Serializer<any>
> = {
  boolean: {
    read: (v: any) => v === "true",
    write: (v: any) => String(v),
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v),
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) =>
      JSON.stringify(Array.from((v as Map<any, any>).entries())),
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>)),
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString(),
  },
};

export const useStorage = <T extends string | number | boolean | object | null>(
  key: string,
  initial: T,
  storage: StorageLike = localStorage
) => {
  const rawType = guessSerializerType(initial);
  const serializer = StorageSerializers[rawType];

  const write = (value: T) => {
    if (value == null) {
      storage.removeItem(key);
    } else {
      storage.setItem(key, serializer.write(value));
      setState(value);
    }
  };

  const read = (): T => {
    const rawValue = storage.getItem(key);
    if (rawValue == null) {
      if (initial !== null) {
        write(initial);
      }
      return initial;
    } else {
      return serializer.read(rawValue);
    }
  };
  const [state, setState] = useState(read());
  return [state, write] as const;
};
