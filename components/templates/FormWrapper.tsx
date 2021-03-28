import React from "react"

export interface FormWrapperProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

function FormWrapper({ title, subtitle, children }: FormWrapperProps) {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h1>

        {subtitle && (
          <p className="text-gray-400 dark:text-gray-400">{subtitle}</p>
        )}
      </div>

      <div className="m-7">{children}</div>
    </div>
  )
}

export default FormWrapper
