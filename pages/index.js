import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <head>
        <link rel="stylesheet" href=
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
        </link>
      </head>

      <div className="flex flex-wrap justify-center" >
        <div className="pt-12 w-full md:w-4/12 px-4 text-center">
          <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-orange-kf">
                <i className="fas fa-address-card"></i>
              </div>
              <h6 className="text-xl font-semibold">Form with Formik & Yup</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                A form created using Formik, Yup and Tailwindcss.
              </p>
              <Link href='/steps-form'>
              <button className='bg-orange-kf hover:bg-orange-hover mr-1 w-280px h-30px mb-1 text-white font-normal rounded'>
                Go to form
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-12 w-full md:w-4/12 px-4 text-center">
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                <i className="fas fa-code"></i>
              </div>
              <h6 className="text-xl font-semibold">React Hooks Form</h6>
              <p className="mt-2 mb-4 text-blueGray-500">
                Coming soon...
              </p>
              <button  className='bg-gray-400 disabled:opacity-50 mr-1 w-280px h-30px mb-1 text-white font-normal rounded'>
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}