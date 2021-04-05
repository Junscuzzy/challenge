import RegisterForm from "../components/organisms/RegisterForm"
import FormWrapper from "../components/templates/FormWrapper"
import { useRedirectIfLoggedIn } from "../lib/authHooks"

export default function Register() {
  useRedirectIfLoggedIn()

  return (
    <>
      <section className="container min-h-screen flex">
        <FormWrapper title="Inscription" center>
          <RegisterForm />
        </FormWrapper>
      </section>
    </>
  )
}
