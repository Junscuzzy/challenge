import LoginForm from "../components/organisms/LoginForm"
import FormWrapper from "../components/templates/FormWrapper"

export default function Login() {
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
