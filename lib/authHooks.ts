import { useEffect } from "react"

import Router from "next/router"
import { useSelector } from "react-redux"

import { selectUser } from "./slices/userSlice"

// TODO: Change method, there are a white flash, cf auth routes
export function useRedirectIfLoggedIn() {
  const { user } = useSelector(selectUser)

  useEffect(() => {
    if (user) {
      Router.replace("/profile")
    }
  }, [user])
}
