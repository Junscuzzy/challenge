import { HTMLProps } from "react"

import classNames from "classnames"
import cn from "classnames"

function Label({ className, ...props }: HTMLProps<HTMLLabelElement>) {
  const classes = cn(
    classNames,
    "block mb-2 text-sm text-gray-600 dark:text-gray-400"
  )

  return <label className={classes} {...props} />
}

export default Label
