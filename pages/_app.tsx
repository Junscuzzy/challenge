import "tailwindcss/tailwind.css"

import { AppProps } from "next/app"

import Footer from "../components/organisms/footer"

function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 dark:bg-black dark:text-white">
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default App
