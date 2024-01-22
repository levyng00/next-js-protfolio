import create, { State } from "zustand";
type TState = State & {
  navState: boolean;
  updateNavState: () => void;
};
export const useNavStore = create<TState>((set) => ({
  navState: false,
  updateNavState: () => set((state) => ({ navState: !state.navState })),
}));
