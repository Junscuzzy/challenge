import { forwardRef, HTMLProps } from "react"

import classNames from "classnames"
import cn from "classnames"

const Label = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement>>(
  function Label({ className, ...props }, ref) {
    const classes = cn(
      "block mb-2 text-sm text-gray-600 dark:text-gray-400",
      classNames
    )

    return <label ref={ref} className={classes} {...props} />
  }
)

export default Label
