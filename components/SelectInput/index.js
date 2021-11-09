import React, { useState } from 'react'
import Image from 'next/image'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className=' my-5 flex flex-col flex-auto w-280px'>
      <label
        className='text-md text-gray-700 mb-2.5'
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <select
        className='bg-white text-gray-600 hover:border-gray-100 h-30px w-280px md:w-408px lg:w-539px pl-1 rounded border-b focus:outline-none focus:bg-input-hover focus:text-black'
        {...field}
        {...props}
      />
      {(meta.touched && meta.error) && (
        <div className='w-280px md:w-408px lg:w-539px top-12 mt-1 text-white bg-red-500 text-center rounded'>{meta.error}</div>
      )}
    </div>
  )
}

export default SelectInput