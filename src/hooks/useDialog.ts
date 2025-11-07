import { create } from 'zustand'

export type DialogType = 'fakerItemDialog'

type DialogContextType = {
  type: DialogType | null
  data: any
  isOpen: boolean
  onOpen: (type: DialogType, data?: any) => void
  onClose: () => void
}

export const useDialog = create<DialogContextType>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}))
