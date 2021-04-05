import { useCallback, useMemo } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import * as yup from "yup"

import { register as registerUser } from "../../lib/slices/userSlice"
import { RegisterProps } from "../../types/User"
import Button from "../atoms/Button"
import { Fieldset } from "../atoms/FormUtils"
import TextInput from "../atoms/TextInput"

function useRegisterForm() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().email().defined(),
        password: yup.string().min(4).required(),
        passwordConfirm: yup.string().test({
          name: "password-confirm",
          message: "Passwords need to match",
          test: function () {
            const { password, passwordConfirm } = this.parent
            if (password && passwordConfirm !== password) {
              return false
            }
            return true
          },
        }),
        name: yup.string(),
      }),
    []
  )

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = useCallback((values: RegisterProps) => {
    dispatch(registerUser(values))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  }
}

export default function RegisterForm() {
  const { register, onSubmit, errors } = useRegisterForm()

  return (
    <form onSubmit={onSubmit}>
      <Fieldset label="Nom" error={errors.name?.message}>
        <TextInput {...register("name")} />
      </Fieldset>

      <Fieldset label="Email" error={errors.email?.message}>
        <TextInput {...register("email")} />
      </Fieldset>

      <Fieldset label="Mot de passe" error={errors.password?.message}>
        <TextInput type="password" {...register("password")} />
      </Fieldset>

      <Fieldset
        label="Confirmer le mot de passe"
        error={errors.passwordConfirm?.message}
      >
        <TextInput type="password" {...register("passwordConfirm")} />
      </Fieldset>

      <Button type="submit" fullWidth>
        Inscription
      </Button>

      <Link href="/login">
        <a className="text-indigo-500 text-center block mt-3">Connexion</a>
      </Link>
    </form>
  )
}
