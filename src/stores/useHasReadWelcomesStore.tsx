import create from "zustand";

interface HasReadWelcome {
  hasReadWelcomes: boolean;
  setHasReadWelcomes: (read: boolean) => void;
}

const KEY = "hasReadWelcomes";

const hasReadWelcomes = localStorage.getItem(KEY) === "yes";

export const useHasReadWelcomesStore = create<HasReadWelcome>()((set) => {
  return {
    hasReadWelcomes,
    setHasReadWelcomes: (read: boolean) => {
      const result = read ? "yes" : "no";
      localStorage.setItem(KEY, result);
      set({ hasReadWelcomes: read });
    },
  };
});
