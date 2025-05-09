import { create } from "zustand";

type ThemeState = {
 themeColor: string;
  setThemeColor: (color: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
    themeColor: "#ff5733" /* "#155DFC" */,
    setThemeColor: (color) => set({ themeColor: color }),
}));
