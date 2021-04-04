import "tailwindcss/tailwind.css"

import { AppProps } from "next/app"
import { Provider } from "react-redux"

import Footer from "../components/organisms/footer"
import store from "../lib/store"

function App({ Component, pageProps }: AppProps) {
  const mainBase = "min-h-screen flex flex-col bg-gray-50"
  const mainDark = "dark:bg-black dark:text-white"

  return (
    <Provider store={store}>
      <main className={`${mainBase} ${mainDark}`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}

export default App
