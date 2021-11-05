import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'



export default function FormOne({next, data}) {
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
            {()=> (
                <Form>
                    <div className='flex justify-center mb-50px'>
                        <div className=''>
                            {/* Section 1 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className=' text-center text-2xl'>Datos de Empresa</h3>
                            </div>

                            <DataInput
                                label='Razón Social'
                                name='razonSocial'
                                type='text'
                                placeholder='Sociedad Anónima S.A.'
                            />
                            <DataInput
                                label='Nombre Comercial'
                                name='nombreComercial'
                                type='text'
                                placeholder='KredFeed'
                            />
                            <DataInput
                                label='Nacionalidad'
                                name='nacionalidad'
                                type='text'
                                placeholder='Mexicana'
                            />
                            <DataInput
                                label='Fecha de constitución'
                                name='fechaDeConstitucion'
                                type='date'
                                placeholder='KredFeed'
                            />
                            <DataInput
                                label='RFC'
                                name='rfc'
                                type='text'
                                placeholder='VECJ880326XXX '
                            />
                            <DataInput
                                label='Régimen fiscal'
                                name='regimenFiscal'
                                type='text'
                                placeholder='Régimen de Incorporación Fiscal'
                            />
                            <DataInput
                                label='Industria'
                                name='industria'
                                type='text'
                                placeholder='Automotriz'
                            />
                            <DataInput
                                label='Número de telefónico'
                                name='numeroTelefonico'
                                type='tel'
                                placeholder='(123) 123-1234'
                            />
                            <DataInput
                                label='Dirección de correo electrónico'
                                name='email'
                                type='email'
                                placeholder='tuEmail@email.com'
                            />
                            
                            <div className='mt-50px'>
                                <button type='submit'className='bg-orange-kf hover:bg-orange-hover mr-1 w-280px md:w-408px lg:w-539px h-30px mb-1 hover:bg-orange-600 text-white font-normal rounded'>
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
