import { create } from "zustand";

export const useNavStore = create((set) => ({
  navState: false,
  updateNavState: () => set((state) => ({ navState: !state.navState })),
}));

