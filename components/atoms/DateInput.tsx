import "react-datepicker/dist/react-datepicker.css"

import { useState } from "react"

import cn from "classnames"
import ReactDatePicker from "react-datepicker"

function DateInput({ className, ...props }: any) {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const base =
    "w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md text-gray-600"
  const focus =
    "focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
  const dark =
    "dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
  const darkFocus = " dark:focus:ring-gray-900 dark:focus:border-gray-500"

  const classes = cn(className, base, focus, dark, darkFocus)

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={date => setStartDate(date as Date | null)}
      className={classes}
      // dayClassName
      // timeClassName
      // monthClassName
      // weekDayClassName
      // popperClassName
      // wrapperClassName
      // onCalendarClose
      // onClickOutside
      // onSelect
      {...props}
    />
  )
}

export default DateInput
