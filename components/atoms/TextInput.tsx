import { forwardRef, HTMLProps } from "react"

import classNames from "classnames"
import cn from "classnames"

const base =
  "w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md text-gray-600"
const focus =
  "focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
const dark =
  "dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
const darkFocus = "dark:focus:ring-gray-900 dark:focus:border-gray-500"

export const inputClasses = cn(classNames, base, focus, dark, darkFocus)

const TextInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  function TextInput({ className, type, ...props }, ref) {
    const classes = cn(inputClasses, classNames)

    return (
      <input ref={ref} type={type || "text"} className={classes} {...props} />
    )
  }
)

export default TextInput
