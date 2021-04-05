import RegisterForm from "../components/organisms/RegisterForm"
import FormWrapper from "../components/templates/FormWrapper"

export default function Register() {
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
