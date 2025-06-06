'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface MenuContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleToggle: () => void
  scrollY: number
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  const handleToggle = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (window.scrollY > 50 && open) {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [open])

  return (
    <MenuContext.Provider value={{ open, setOpen, handleToggle, scrollY }}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}