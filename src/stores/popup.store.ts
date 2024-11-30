import { create } from "zustand";
import { storeData } from "../App";

export type StoreData = {
  id: number;
  title: string;
  listItem: string[];
};

interface StoreState {
  value: null | StoreData;
  setId: (value: number) => void; // Function to update `value`
}

export const usePopUpStore = create<StoreState>((set, get) => ({
  value: null,
  setId: (id) => {
    const { value } = get(); // Access current value
    console.log("entering here", value);
    if (value?.id === id) {
      console.log("entering");
      set({ value: null }); // Reset if the id matches the current value's id
    } else {
      const foundItem = storeData.find((item) => item.id === id);
      set({ value: foundItem || null }); // Set new value or null if not found
    }
  },
}));
