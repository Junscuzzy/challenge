import { useForm } from "react-hook-form"

import Button from "../atoms/Button"
import DateInput from "../atoms/DateInput"
import { Fieldset } from "../atoms/FormUtils"
import SelectInput from "../atoms/SelectInput"
import TextInput from "../atoms/TextInput"

interface FormData {
  goal: string
  deadline: string // Date
  name: string
  email: string
  supervisorName: string
  supervisorEmail: string // email
  price: number // Dropdown 25, 50, 100, 250, 1000
  // then stripe
}

export default function NewChallengeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  return (
    <form onSubmit={onSubmit}>
      <Fieldset label="Objectif" error={errors.goal?.message}>
        <TextInput {...register("goal")} />
      </Fieldset>

      <Fieldset
        label="Date limite"
        className="flex flex-col"
        error={errors.goal?.message}
      >
        <DateInput {...register("deadline")} />
      </Fieldset>

      <div className="md:flex md:items-center md:justify-between">
        <Fieldset
          label="Nom"
          className="w-full md:w-1/2 md:pr-3"
          error={errors.name?.message}
        >
          <TextInput placeholder="John" {...register("name")} />
        </Fieldset>
        <Fieldset
          label="Email"
          className="w-full md:w-1/2 md:pl-3"
          error={errors.email?.message}
        >
          <TextInput
            type="email"
            placeholder="john@mail.com"
            {...register("email")}
          />
        </Fieldset>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <Fieldset
          label="Nom du superviseur"
          className="w-full md:w-1/2 md:pr-3"
          error={errors.supervisorName?.message}
        >
          <TextInput placeholder="Camille" {...register("supervisorName")} />
        </Fieldset>
        <Fieldset
          label="Email du superviseur"
          className="w-full md:w-1/2 md:pl-3"
          error={errors.supervisorEmail?.message}
        >
          <TextInput
            type="email"
            placeholder="camille@mail.com"
            {...register("supervisorEmail")}
          />
        </Fieldset>
      </div>

      <Fieldset label="Prix" error={errors.price?.message}>
        <SelectInput {...register("price")}>
          <option>Choisir...</option>
          {[25, 50, 100, 250, 1000].map(amount => (
            <option key={amount} value={amount}>
              {`${amount} €`}
            </option>
          ))}
        </SelectInput>
      </Fieldset>

      <Button type="submit" fullWidth>
        C'est parti !
      </Button>
    </form>
  )
}
