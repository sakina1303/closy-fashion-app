"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Heart, Share2 } from "lucide-react"
import { outfitRecommendations } from "@/lib/outfit-data"
import { useFavorites } from "@/lib/favorites-context"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const mood = searchParams.get("mood")
  const event = searchParams.get("event")

  const [recommendation, setRecommendation] = useState(null)
  const [loading, setLoading] = useState(true)
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const [isInFavorites, setIsInFavorites] = useState(false)

  const moods = [
    { id: "happy", label: "Happy" },
    { id: "confident", label: "Bonita" },
    { id: "chill", label: "Chill"},
    { id: "sad", label: "Saddie" },
    { id: "energetic", label: "Baddie"},
    { id: "romantic", label: "Softie"},
  ]

  const events = [
    { id: "party", label: "Party" },
    { id: "meeting", label: "Meeting" },
    { id: "date", label: "Date" },
    { id: "casual", label: "Casual Outing" },
    { id: "workout", label: "Workout" },
    { id: "formal", label: "Formal Event" },
  ]

  useEffect(() => {
    if (mood && event) {
      // Simulate loading
      setLoading(true)
      setTimeout(() => {
        const result =
          outfitRecommendations.find((rec) => rec.mood === mood && rec.event === event) || outfitRecommendations[0] // Fallback to first recommendation

        setRecommendation(result)
        setLoading(false)
      }, 1500)
    }
  }, [mood, event])

  useEffect(() => {
    if (recommendation) {
      setIsInFavorites(isFavorite(recommendation.id))
    }
  }, [recommendation, isFavorite])

  if (!mood || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Missing information</h2>
          <p className="mb-6">Please select your mood and event to get recommendations.</p>
          <Link
            href="/recommend"
            className="bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Go Back
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-rose-400"></div>
          <h1 className="text-xl font-semibold">Closy</h1>
        </Link>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/recommend" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900">
          <ArrowLeft size={18} />
          <span>Back to Selection</span>
        </Link>
      </div>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        {loading ? (
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-neutral-200 border-t-rose-400 rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-semibold mb-2">Finding your perfect outfit...</h2>
            <p className="text-neutral-600">
              We're curating the best look for your {mood} mood and {event} event.
            </p>
          </div>
        ) : recommendation ? (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="aspect-[4/5] bg-neutral-100">
                  <img
                    src={recommendation.imageUrl || "/placeholder.svg"}
                    alt={`Outfit for ${mood} mood and ${event} event`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => {
                      if (isInFavorites) {
                        removeFavorite(recommendation.id)
                      } else {
                        addFavorite(recommendation)
                      }
                      setIsInFavorites(!isInFavorites)
                    }}
                    className={`p-2 rounded-full ${isInFavorites ? "bg-rose-400 text-white" : "bg-white text-neutral-700"} shadow-md`}
                  >
                    <Heart size={20} fill={isInFavorites ? "white" : "none"} />
                  </button>
                  <button className="p-2 rounded-full bg-white text-neutral-700 shadow-md">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">
                    {moods.find(m => m.id === recommendation.mood)?.label || recommendation.moodLabel}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                    {events.find(e => e.id === recommendation.event)?.label || recommendation.eventLabel}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">{recommendation.title}</h2>
                <p className="text-neutral-600 mb-6">{recommendation.description}</p>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Outfit Components:</h3>
                  <ul className="space-y-2">
                    {recommendation.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 rounded-full bg-rose-400 mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Style Tips:</h3>
                  <p className="text-neutral-600">{recommendation.styleTips}</p>
                </div>

                <div className="flex justify-between">
                  <Link
                    href="/recommend"
                    className="px-6 py-2 border border-neutral-300 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    Try Another
                  </Link>
                  <button
                    onClick={() => {
                      if (isInFavorites) {
                        removeFavorite(recommendation.id)
                      } else {
                        addFavorite(recommendation)
                      }
                      setIsInFavorites(!isInFavorites)
                    }}
                    className={`px-6 py-2 ${
                      isInFavorites
                        ? "bg-white border border-neutral-300 text-neutral-700"
                        : "bg-neutral-900 text-white"
                    } rounded-full hover:bg-neutral-800 hover:text-white transition-colors`}
                  >
                    {isInFavorites ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">No recommendations found</h2>
            <p className="mb-6">We couldn't find an outfit for this combination. Please try another selection.</p>
            <Link
              href="/recommend"
              className="bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Try Again
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
