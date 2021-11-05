import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'
import FileInput from '../../components/FileInput'

export default function FormTwo({next, prev, data}) {
    const handlerSubmit = (values) => {
        next(values)
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
                            {/* Section 1 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className=' text-center text-2xl'>Domicilio</h3>
                            </div>
                            <DataInput
                                label='Calle o Avenida'
                                name='domicilio.calle'
                                type='text'
                                placeholder='Saturno'
                            />
                            <DataInput
                                label='Número exterior'
                                name='domicilio.numeroExterior'
                                type='text'
                                placeholder='#309'
                            />
                            <DataInput
                                label='Número interior'
                                name='domicilio.numeroInterior'
                                type='text'
                                placeholder='#6'
                            />
                            <DataInput
                                label='Código Postal'
                                name='domicilio.codigoPostal'
                                type='text'
                                placeholder='30001'
                            />
                            <DataInput
                                label=' Colonia o Urbanización'
                                name='domicilio.colonia'
                                type='text'
                                placeholder='Marte'
                            />
                            <DataInput
                                label='Ciudad o Población'
                                name='domicilio.ciudad'
                                type='text'
                                placeholder='Xalapa'
                            />
                            <DataInput
                                label='Estado'
                                name='domicilio.estado'
                                type='text'
                                placeholder='Veracruz'
                            />
                            <DataInput
                                label='País'
                                name='domicilio.pais'
                                type='text'
                                placeholder='México'
                            />
                            <FileInput
                                label='Comprobante de domicilio'
                                name='comprobanteDeDomicilio'
                                type='file'
                            />

                            <div className='mt-50px w-408px flex justify-between '>
                                <button type='button' onClick={() => prev(values)} className='bg-gray-400 hover:bg-gray-600 mr-1 w-280px h-30px mb-1 text-white font-normal rounded'>
                                    Regresar
                                </button>
                                <button type='submit' className='bg-orange-kf hover:bg-orange-hover mr-1 w-280px h-30px mb-1 hover:bg-orange-200 text-white font-normal rounded'>
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
