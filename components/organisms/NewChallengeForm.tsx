import { useForm } from "react-hook-form"

import Button from "../atoms/Button"
import DateInput from "../atoms/DateInput"
import Label from "../atoms/Label"
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
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <Label>Objectif</Label>
        <TextInput name="goal" ref={register} />
      </div>
      <div className="mb-6 flex flex-col">
        <Label>Date limite</Label>
        <DateInput name="deadline" ref={register} />
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <div className="w-full md:w-1/2 md:pr-3 mb-6">
          <Label>Nom</Label>
          <TextInput name="name" placeholder="John" ref={register} />
        </div>
        <div className="w-full md:w-1/2 md:pl-3 mb-6">
          <Label>Email</Label>
          <TextInput
            type="email"
            name="email"
            placeholder="john@mail.com"
            ref={register}
          />
        </div>
      </div>

      <div className="md:flex md:items-center md:justify-between">
        <div className="w-full md:w-1/2 md:pr-3 mb-6">
          <Label>Nom du superviseur</Label>
          <TextInput
            name="supervisorName"
            placeholder="Camille"
            ref={register}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-3 mb-6">
          <Label>Email du superviseur</Label>
          <TextInput
            type="email"
            name="supervisorEmail"
            placeholder="camille@mail.com"
            ref={register}
          />
        </div>
      </div>

      <div className="mb-6">
        <Label>Prix</Label>

        <SelectInput name="price" ref={register}>
          <option>Choisir...</option>
          {[25, 50, 100, 250, 1000].map(amount => (
            <option key={amount} value={amount}>
              {`${amount} €`}
            </option>
          ))}
        </SelectInput>
      </div>

      <Button type="submit">C'est parti !</Button>
    </form>
  )
}
