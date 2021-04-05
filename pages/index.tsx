import Counter from "../components/counter"
import NewChallengeForm from "../components/organisms/NewChallengeForm"
import FormWrapper from "../components/templates/FormWrapper"

export default function Home() {
  return (
    <>
      <section className="container min-h-screen flex">
        <FormWrapper
          title="Cap ou pas cap ?"
          subtitle="Si tu perds, tu paies"
          center
        >
          <NewChallengeForm />
        </FormWrapper>
      </section>
    </>
  )
}
