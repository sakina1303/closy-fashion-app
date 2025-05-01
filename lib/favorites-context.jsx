"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create context
const FavoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("closyFavorites")
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites))
      } catch (error) {
        console.error("Failed to parse favorites from localStorage", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("closyFavorites", JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  // Add an outfit to favorites
  const addFavorite = (outfit) => {
    setFavorites((prev) => {
      // Check if outfit is already in favorites
      if (prev.some((fav) => fav.id === outfit.id)) {
        return prev
      }
      return [...prev, { ...outfit, savedAt: new Date().toISOString() }]
    })
  }

  // Remove an outfit from favorites
  const removeFavorite = (outfitId) => {
    setFavorites((prev) => prev.filter((outfit) => outfit.id !== outfitId))
  }

  // Check if an outfit is in favorites
  const isFavorite = (outfitId) => {
    return favorites.some((outfit) => outfit.id === outfitId)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

// Custom hook to use the favorites context
export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
