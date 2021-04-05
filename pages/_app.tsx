import "tailwindcss/tailwind.css"

import { AppProps } from "next/app"
import { Provider } from "react-redux"

import Footer from "../components/organisms/footer"
import Header from "../components/organisms/header"
import store from "../lib/store"

function App({ Component, pageProps }: AppProps) {
  const mainBase = "min-h-screen flex flex-col bg-gray-50 relative"
  const mainDark = "dark:bg-black dark:text-white"

  return (
    <Provider store={store}>
      <main className={`${mainBase} ${mainDark}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </Provider>
  )
}

export default App
