import "react-day-picker/lib/style.css"

import { forwardRef, HTMLProps } from "react"

import cn from "classnames"
import dateFnsFormat from "date-fns/format"
import dateFnsParse from "date-fns/parse"
import { DateUtils } from "react-day-picker"
import DayPickerInput from "react-day-picker/DayPickerInput"

import { inputClasses } from "./TextInput"

function parseDate(str: string, format: string, locale: string): void | Date {
  const l = (locale as unknown) as Locale
  const parsed = dateFnsParse(str, format, new Date(), { locale: l })
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

function formatDate(date: Date, format: string, locale: string): string {
  const l = (locale as unknown) as Locale
  return dateFnsFormat(date, format, { locale: l })
}

const DateInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  function DateInput({ className, ...props }, ref) {
    const classes = cn(className, inputClasses)
    const FORMAT = "dd/MM/yyyy"

    return (
      <DayPickerInput
        formatDate={formatDate}
        format={FORMAT}
        parseDate={parseDate}
        component={(p: any) => (
          <input {...{ ref, className: classes, ...props, ...p }} />
        )}
      />
    )
  }
)

export default DateInput
