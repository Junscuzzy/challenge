import { FC, forwardRef, HTMLProps } from "react"

import classNames from "classnames"
import cn from "classnames"

export const Label = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement>>(
  function Label({ className, ...props }, ref) {
    const classes = cn(
      "block mb-2 text-sm text-gray-600 dark:text-gray-400",
      classNames
    )

    return <label ref={ref} className={classes} {...props} />
  }
)

export const ErrorMessage: FC = ({ children }) => (
  <p className="block text-sm text-red-500">{children}</p>
)

interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  label?: string
  error?: string
}

export function Fieldset({ children, label, error, className }: FieldsetProps) {
  return (
    <fieldset className={cn("mb-6", className)}>
      {label && <Label>{label}</Label>}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </fieldset>
  )
}
