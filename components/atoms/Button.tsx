import { forwardRef, HTMLProps } from "react"

import cn from "classnames"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, fullWidth, ...props },
  ref
) {
  const base = "px-3 py-4 text-white bg-indigo-500 rounded-md"
  const focus = "focus:bg-indigo-600 focus:outline-none"

  const classes = cn(base, focus, className, {
    ["w-full"]: !!fullWidth,
  })

  return <button ref={ref} className={classes} {...props} />
})

export default Button
