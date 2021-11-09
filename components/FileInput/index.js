import React from 'react'
import {useField } from 'formik'


const FileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='w-280px md:w-408px lg:w-539px my-5 flex flex-col flex-auto'>
      <label
        className='peer text-md mb-1 text-gray-700'
        htmlFor={props.id || props.name}
      >
        {label} / obligatorio
      </label>
      <input
        className='h-30 p-2 bg-white rounded border focus:ring-orange-kf focus:bg-white focus:shadow-xl'
        {...field}
        {...props}
      />
      {(meta.touched['file'] && meta.error) && (
        <div className='top-12 mt-1 text-white bg-red-500 text-center rounded'>{meta.error}</div>
      )}
    </div>
  )
}

export default FileInput
