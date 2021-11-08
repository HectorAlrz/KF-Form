import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formThreeSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'
import FileInput from '../../components/FileInput'
import SelectInput from '../../components/SelectInput'

export default function FormThree({ next, prev, data }) {
    const handlerSubmit = (values) => {
        next(values)
    }

    return (
        <Formik
            initialValues={data}
            /* Validation Schema using Yup */
            validationSchema={formThreeSchema}

            onSubmit={handlerSubmit}
        >
            {({ values }) => (
                <Form>
                    <div className='flex justify-center mb-50px'>
                        <div className=''>
                            {/* Section 3 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className=' text-center text-2xl'>Representante Legal</h3>
                            </div>
                            <DataInput
                                label='Nombre del representante legal'
                                name='representanteLegal.nombreRepresentante'
                                type='text'
                                placeholder='Apolo Hernandez Alcaraz'
                            />
                            <SelectInput label='Genero' name='representanteLegal.genero'>
                                <option value=''>Selecciona un genero</option>
                                <option value='femenino'>Femenino</option>
                                <option value='masculino'>Masculino</option>
                                <option value='otro'>Otro</option>
                            </SelectInput>
                            <DataInput
                                label='Fecha de nacimiento'
                                name='representanteLegal.fechaDeNacimiento'
                                type='date'
                            />
                            <DataInput
                                label='Entidad federativa de nacimiento'
                                name='representanteLegal.entidadFederativaDeNacimiento'
                                type='text'
                                placeholder='Veracruz'
                            />
                            <DataInput
                                label='Nacionalidad'
                                name='representanteLegal.nacionalidad'
                                type='text'
                                placeholder='Mexicana'
                            />
                            <DataInput
                                label='Pais de nacimiento'
                                name='representanteLegal.paisDeNacimiento'
                                type='text'
                                placeholder='México'
                            />
                            <DataInput
                                label='CURP'
                                name='representanteLegal.curp'
                                type='text'
                                placeholder='QWER123456RTYUIOP01'
                            />
                            <DataInput
                                label='RFC'
                                name='representanteLegal.rfc'
                                type='text'
                                placeholder='VECJ880326XXX'
                            />
                            <DataInput
                                label='Estado civil'
                                name='representanteLegal.estadoCivil'
                                type='text'
                                placeholder='Soltero/a'
                            />
                            <DataInput
                                label='Dirección de correo electrónico'
                                type='email'
                                name='representanteLegal.email'
                                placeholder='tuEmail@email.com'
                            />
                            <DataInput
                                label='Número de telefono'
                                type='text'
                                name='representanteLegal.telefono'
                                placeholder='(123)-123-1234'
                            />
                            <FileInput
                                label='Documento de identificación'
                                name='representanteLegal.documentoDeIdentificacion'
                                type='file'
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
