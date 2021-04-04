import { forwardRef, HTMLProps } from "react"

import classNames from "classnames"
import cn from "classnames"

import { inputClasses } from "./TextInput"

const SelectInput = forwardRef<HTMLSelectElement, HTMLProps<HTMLSelectElement>>(
  function SelectInput({ className, children, ...props }, ref) {
    const legacy = "block appearance-none text-gray-600 w-full bg-white"
    const classes = cn(inputClasses, legacy, classNames)

    return (
      <div className="flex-shrink w-full inline-block relative">
        <select ref={ref} className={classes} {...props}>
          {children}
        </select>
        <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    )
  }
)

export default SelectInput
