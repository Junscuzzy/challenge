import { useSelector } from "react-redux"

import Button from "../components/atoms/Button"
import { selectUser } from "../lib/slices/userSlice"

export default function Profile() {
  const user = useSelector(selectUser)
  return (
    <>
      <section className="container min-h-screen flex flex-col mx-auto">
        <div className="m-auto w-full">
          <h1 className="w-full text-2xl font-bold">Mon compte</h1>
          <p>TODO: Rendre cette route privé (cf: auth)</p>

          <pre>
            <code>{JSON.stringify(user.user)}</code>
          </pre>

          <Button>TODO: Supprimer mon compte</Button>
        </div>
      </section>
    </>
  )
}
