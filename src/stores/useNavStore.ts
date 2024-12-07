// store/useNavStore.ts
import { create } from "zustand";

interface NavStoreState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useNavStore = create<NavStoreState>((set) => ({
  activeSection: "",
  setActiveSection: (section) => set({ activeSection: section }),
}));
