import { HTMLProps } from "react"

import cn from "classnames"

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset"
}

function Button({ className, ...props }: ButtonProps) {
  const base = "w-full px-3 py-4 text-white bg-indigo-500 rounded-md"
  const focus = "focus:bg-indigo-600 focus:outline-none"

  const classes = cn(className, base, focus)

  return <button className={classes} {...props} />
}

export default Button
