import Link from "next/link"
import { ArrowRight, Github, Instagram } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/closylogoo.svg" alt="Closy Logo" className="h-20 w-20 object-contain" />
          <img src="/closytext.svg" alt="Closy" className="h-20 object-contain" />
        </div>
        <div className="flex gap-6">
          <Link href="/favorites" className="text-neutral-600 hover:text-neutral-900">
            Favorites
          </Link>
          <a href="#features" className="text-neutral-600 hover:text-neutral-900">How It Works</a>
          <a href="#about" className="text-neutral-600 hover:text-neutral-900">About</a>
          <a href="#feedbacks" className="text-neutral-600 hover:text-neutral-900">Feedbacks</a>
          <a href="#contact" className="text-neutral-600 hover:text-neutral-900">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden min-h-[80vh]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/closyhomee.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Overlay to darken background if needed */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Closet made</span> <span className="text-rose-400">Easy</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-100 max-w-2xl mb-10 mx-auto">
            Discover the perfect outfit based on how you feel and where you're going. Let Closy be your personal fashion assistant.
          </p>
          <Link
            href="/recommend"
            className="inline-flex items-center gap-2 bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors w-fit mx-auto"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </div>

        {/* Preview Video Section */}
        <div className="relative z-20 mt-16 w-full max-w-4xl mx-auto px-4">
          <div className="aspect-[16/9] bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              src="/home4.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-rose-400 text-white p-4 rounded-lg shadow-lg">
            <p className="font-medium">Perfect outfits, every time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Closy</h2>
          <p className="text-lg text-neutral-600 text-center">
          Closy is the fashion bestie you never knew you needed. Feelin' baddie, softie, CEO, or just straight-up iconic? Drop the vibe, and Closy pulls up with outfit inspo that eats, slays, and never flops. No more "I have nothing to wear" meltdowns, just drip that hits different. You vibe it, we style it. Serving lewks, turning heads, and keeping it 100 every damn day. So whatchu waiting for? Just pick a vibe, and Closy handles the rest!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative w-full py-32 overflow-hidden min-h-[80vh]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/featuresf.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-white">How Closy Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Select Your Mood</h4>
              <p className="text-neutral-600">
                Tell us how you're feeling today - happy, confident, chill, or something else.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Choose Your Event</h4>
              <p className="text-neutral-600">
                Let us know where you're headed - a party, meeting, date, or casual outing.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="h-12 w-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-medium mb-2">Get Recommendations</h4>
              <p className="text-neutral-600">
                Receive personalized outfit suggestions that match your mood and occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedbacks Section */}
      <section id="feedbacks" className="w-full py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Blogger",
                feedback: "Closy has completely transformed how I choose my outfits. The mood-based recommendations are spot on!"
              },
              {
                name: "Michael Chen",
                role: "Tech Entrepreneur",
                feedback: "As someone who's always busy, Closy saves me so much time. The outfit suggestions are always appropriate for the occasion."
              },
              {
                name: "Emma Rodriguez",
                role: "College Student",
                feedback: "I love how Closy helps me express my mood through fashion. It's like having a personal stylist in my pocket!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-neutral-600 mb-4">"{testimonial.feedback}"</p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full py-20 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-8 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-center">Connect with Us</h3>
              
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/sakina1303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://instagram.com/sakinaa__13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sakina-farukh-ahemad-809b3732b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="border-t border-neutral-200 pt-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <img src="/closylogoo.svg" alt="Closy Logo" className="h-16 w-16 object-contain" />
                    <img src="/closytext.svg" alt="Closy" className="h-16 object-contain" />
                  </div>
                  <p className="text-neutral-600 text-center italic max-w-md">
                    Appreciate the visit! Time to serve looks and plan those fits
                  </p>
                  <Link
                    href="/recommend"
                    className="inline-flex items-center gap-2 bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors"
                  >
                    Create Fit <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-neutral-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 mb-4 md:mb-0">© 2025 Closy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-neutral-800">
              About
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-800">
              Privacy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-800">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
