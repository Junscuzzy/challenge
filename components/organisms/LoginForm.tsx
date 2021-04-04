import { useForm } from "react-hook-form"

import Button from "../atoms/Button"
import Label from "../atoms/Label"
import TextInput from "../atoms/TextInput"

interface FormData {
  email: string
  password: string
  passwordConfirm: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <Label>Email</Label>
        <TextInput name="email" ref={register} />
      </div>
      <div className="mb-6">
        <Label>Mot de passe</Label>
        <TextInput name="password" type="password" ref={register} />
      </div>
      <div className="mb-6">
        <Label>Confirmer le mot de passe</Label>
        <TextInput name="passwordConfirm" type="password" ref={register} />
      </div>

      <Button type="submit" fullWidth>
        Connexion
      </Button>
    </form>
  )
}
