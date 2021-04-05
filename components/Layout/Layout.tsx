import "tailwindcss/tailwind.css"

import { FC } from "react"

import Footer from "./Footer"
import Header from "./Header"

const Layout: FC = ({ children }) => {
  const mainBase = "min-h-screen flex flex-col bg-gray-50 relative"
  const mainDark = "dark:bg-black dark:text-white"

  return (
    <main className={`${mainBase} ${mainDark}`}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
