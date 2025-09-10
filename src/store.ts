import { create } from 'zustand'

interface VisibleState {
  visible: boolean
  setVisible: (value: boolean) => void
  notVisible: (value: boolean) => void
}

export const useVisible = create<VisibleState>((set) => ({
  visible: false,
  setVisible: () => set({ visible: true }),
  notVisible: () => set({ visible: false }),
}))
