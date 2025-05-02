"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Search, X } from "lucide-react"
import { useFavorites } from "@/lib/favorites-context"

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites()
  const [searchTerm, setSearchTerm] = useState("")

  // Filter favorites based on search term
  const filteredFavorites = favorites.filter(
    (outfit) =>
      outfit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      outfit.moodLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      outfit.eventLabel.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
        <Link href="/" className="flex items-center gap-3">
          <img src="/closylogoo.svg" alt="Closy Logo" className="h-20 w-20 object-contain" />
          <img src="/closytext.svg" alt="Closy" className="h-20 object-contain" />
        </Link>
        <div className="flex gap-4">
          <Link href="/recommend" className="text-neutral-900 hover:text-rose-400 transition-colors">
            Get Recommendations
          </Link>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-rose-400 transition-colors">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Favorites Section */}
      <section className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Your Favorite Outfits</h2>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                placeholder="Search favorites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-4">
                <Heart size={32} className="text-neutral-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">No favorites yet</h3>
              <p className="text-neutral-600 mb-6">Start saving outfits you love and they'll appear here.</p>
              <Link
                href="/recommend"
                className="bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Find Outfits
              </Link>
            </div>
          ) : filteredFavorites.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No matching outfits</h3>
              <p className="text-neutral-600">Try a different search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFavorites.map((outfit) => (
                <div key={outfit.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                  <div className="relative">
                    <div className="aspect-[4/3] bg-neutral-100">
                      <img
                        src={outfit.imageUrl || "/placeholder.svg"}
                        alt={outfit.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => removeFavorite(outfit.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white text-rose-500 shadow-md hover:bg-rose-50 transition-colors"
                      aria-label="Remove from favorites"
                    >
                      <Heart size={20} fill="currentColor" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex gap-2 mb-2">
                      <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs">
                        {outfit.moodLabel}
                      </span>
                      <span className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs">
                        {outfit.eventLabel}
                      </span>
                    </div>
                    <h3 className="font-medium mb-2">{outfit.title}</h3>
                    <Link
                      href={`/results?mood=${outfit.mood}&event=${outfit.event}`}
                      className="text-sm text-rose-500 hover:text-rose-600 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
