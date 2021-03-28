import NewChallengeForm from "../components/organisms/NewChallengeForm"
import FormWrapper from "../components/templates/FormWrapper"

export default function Home() {
  return (
    <>
      <div className="pt-36 pb-12 max-w-5xl mx-auto">
        <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-white mt-10 mb-8 sm:mt-14 sm:mb-10">
          Getting things done
        </h1>
      </div>

      <section className="container mx-auto">
        <FormWrapper title="Cap ou pas cap ?" subtitle="Si tu perds, tu paies">
          <NewChallengeForm />
        </FormWrapper>
      </section>
    </>
  )
}
