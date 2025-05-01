"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RecommendPage() {
  const router = useRouter()
  const [mood, setMood] = useState("")
  const [event, setEvent] = useState("")

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mood && event) {
      router.push(`/results?mood=${mood}&event=${event}`)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-20 relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/contactvid.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-20">
        <Link href="/" className="flex items-center gap-3">
          <img src="/closylogoo.svg" alt="Closy Logo" className="h-20 w-20 object-contain" />
          <img src="/closytext.svg" alt="Closy" className="h-19 object-contain" />
        </Link>
        <div className="flex gap-4">
          <Link href="/favorites" className="text-white hover:text-neutral-200">
            Favorites
          </Link>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4 relative z-20">
        <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-neutral-200">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Form Section */}
      <section className="container mx-auto px-4 py-8 max-w-2xl relative z-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">How are you feeling today?</h2>

          <form onSubmit={handleSubmit}>
            {/* Mood Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-medium mb-4 text-white">Select your mood:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {moods.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMood(item.id)}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center transition-all ${
                      mood === item.id ? "border-rose-400 bg-neutral-800 text-rose-400" : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <span className="text-2xl mb-2">{item.emoji}</span>
                    <span className={mood === item.id ? "text-rose-400" : "text-white"}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Event Selection */}
            <div className="mb-10">
              <h3 className="text-lg font-medium mb-4 text-white">Where are you going?</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {events.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEvent(item.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      event === item.id ? "border-rose-400 bg-neutral-800 text-rose-400" : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <span className={event === item.id ? "text-rose-400" : "text-white"}>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!mood || !event}
                className={`px-8 py-3 rounded-full text-white font-medium transition-colors ${
                  mood && event ? "bg-neutral-900 hover:bg-neutral-800" : "bg-neutral-400 cursor-not-allowed"
                }`}
              >
                Get Outfit Recommendations
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
