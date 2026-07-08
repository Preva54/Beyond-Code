import { create } from "zustand"

interface Store {
  isDarkMode: boolean
  toggleDarkMode: () => void
  isMusicPlaying: boolean
  toggleMusic: () => void
  isLoaded: boolean
  setLoaded: (v: boolean) => void
  activeSection: string
  setActiveSection: (v: string) => void
}

export const useStore = create<Store>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((s) => ({ isDarkMode: !s.isDarkMode })),
  isMusicPlaying: false,
  toggleMusic: () => set((s) => ({ isMusicPlaying: !s.isMusicPlaying })),
  isLoaded: false,
  setLoaded: (v) => set({ isLoaded: v }),
  activeSection: "hero",
  setActiveSection: (v) => set({ activeSection: v }),
}))
