import { create } from 'zustand'

interface ContactStore {
  isOpen: boolean
  openContactSheet: () => void
  closeContactSheet: () => void
}

export const useContactStore = create<ContactStore>((set) => ({
  isOpen: false,
  openContactSheet: () => set({ isOpen: true }),
  closeContactSheet: () => set({ isOpen: false }),
}))