import { Inter } from "next/font/google"
import "./globals.css"
import { FavoritesProvider } from "@/lib/favorites-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Closy - Fashion Recommendation App",
  description: "Get personalized outfit recommendations based on your mood and event",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  )
}
