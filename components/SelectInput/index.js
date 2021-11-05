import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className=' my-5 flex flex-col flex-auto w-280px'>
      <label
        className='text-md text-gray-600 mb-2.5'
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        className=' text-gray-600 hover:border-gray-400 h-30px w-280px md:w-408px lg:w-539px pl-1 rounded border-b focus:outline-none focus:bg-input-hover focus:text-black'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default SelectInput