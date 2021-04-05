import LoginForm from "../components/organisms/LoginForm"
import FormWrapper from "../components/templates/FormWrapper"
import { useRedirectIfLoggedIn } from "../lib/authHooks"

export default function Login() {
  useRedirectIfLoggedIn()

  return (
    <>
      <section className="container min-h-screen flex">
        <FormWrapper title="Connexion" center>
          <LoginForm />
        </FormWrapper>
      </section>
    </>
  )
}
