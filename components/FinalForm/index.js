import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'

export default function FinalForm({ next, prev, data }) {
    const handlerSubmit = (values) => {
        next(values, true)
    }

    return (
        <Formik
            initialValues={data}
            /* Validation Schema using Yup */
            validationSchema={formSchema}

            onSubmit={handlerSubmit}
        >
            {({ values }) => (
                <Form>
                    <div className='flex justify-center mb-50px'>
                        <div className=''>
                            {/* Section 3 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className='text-center text-2xl'>Cuenta bancaria</h3>
                            </div>
                            <DataInput
                                label='CLABE'
                                name='cuentaBancaria.clabe'
                                type='text'
                                placeholder='México'
                            />
                            <DataInput
                                label='Banco'
                                name='banco'
                                type='text'
                                placeholder='Bancomer'
                            />
                            <div className='flex flex-col sm:flex-row sm:justify-between mt-50px sm:w-280px md:w-408px lg:w-539px'>
                                <button
                                    type='button'
                                    onClick={() => prev(values)}
                                    className='mb-4 bg-gray-400 hover:bg-gray-600 mr-1 w-280px h-30px sm:mb-1 text-white font-normal rounded'>
                                    Regresar
                                </button>
                                <button type='submit' className='bg-orange-kf hover:bg-orange-hover mr-1 w-280px h-30px mb-1 text-white font-normal rounded'>
                                    Siguiente
                                </button>
                            </div>

                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}