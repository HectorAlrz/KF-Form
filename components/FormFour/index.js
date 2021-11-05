import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'
import FileInput from '../../components/FileInput'

export default function FormFour ({next, prev, data}) {
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
                    {/* Section 3 */}
                    <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                        <h3 className=' text-center text-2xl'>Domicilio Representante Legal</h3>
                    </div>
                    <DataInput
                                label='Calle o Avenida'
                                name='representanteLegal.domicilio.calle'
                                type='text'
                                placeholder='Saturno'
                            />
                            <DataInput
                                label='Número exterior'
                                name='representanteLegal.domicilio.numeroExterior'
                                type='text'
                                placeholder='#309'
                            />
                            <DataInput
                                label='Número interior'
                                name='representanteLegal.domicilio.numeroInterior'
                                type='text'
                                placeholder='#6'
                            />
                            <DataInput
                                label='Código Postal'
                                name='representanteLegal.domicilio.codigoPostal'
                                type='text'
                                placeholder='30001'
                            />
                            <DataInput
                                label=' Colonia o Urbanización'
                                name='representanteLegal.domicilio.colonia'
                                type='text'
                                placeholder='Marte'
                            />
                            <DataInput
                                label='Ciudad o Población'
                                name='representanteLegal.domicilio.ciudad'
                                type='text'
                                placeholder='Xalapa'
                            />
                            <DataInput
                                label='Estado'
                                name='representanteLegal.domicilio.estado'
                                type='text'
                                placeholder='Veracruz'
                            />
                            <DataInput
                                label='País'
                                name='representanteLegal.domicilio.pais'
                                type='text'
                                placeholder='México'
                            />
                            <FileInput
                                label='Comprobante de domicilio'
                                name='representanteLegal.comprobanteDeDomicilio'
                                type='file'
                            />
                    <div className='mt-50px flex '>
                        <button type='button' onClick={() => prev(values)} className='bg-gray-400 mr-1 w-280px h-30px mb-1 hover:bg-orange-600 text-white font-normal rounded'>
                            Regresar
                        </button>
                        <button type='submit' className='bg-orange-kf mr-1 w-280px h-30px mb-1 hover:bg-orange-600 text-white font-normal rounded'>
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
