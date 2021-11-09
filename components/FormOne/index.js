import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formOneSchema } from '../../pages/api/validations'

// .: Components
import DataInput from '../../components/DataInput'
import SelectInput from '../SelectInput'


export default function FormOne({next, data}) {
    const handlerSubmit = (values) => {
        next(values)
    }
    return (
        <Formik
                initialValues={data}
                /* Validation Schema using Yup */
                validationSchema={formOneSchema}

                onSubmit={handlerSubmit}
            >
            {()=> (
                <Form>
                    <div className='flex justify-center mb-50px'>
                        <div>
                            {/* Section 1 */}
                            <div className='mt-10 mb-5 border-b-2 border-orange-kf shadow-xl'>
                                <h3 className=' text-center text-2xl'>Datos de Empresa</h3>
                            </div>
                            <div className='bg-gray-50 p-1 rounded border shadow-xl'>
                            <SelectInput label='Razón social' name='razonSocial'>
                                <option value=''>Selecciona una razón social</option>
                                <option value='sociedadAnonima'>Sociedad Anónima S.A.</option>
                                <option value='sociedadDeResponsabilidadLimitada'>Sociedad de Responsabilidad Limitada S. de R.L.</option>
                                <option value='sociedadComanditaAcciones'>Sociedad en Comandita por Acciones S. en C. por A.</option>
                                <option value='sociedadComanditaSimple'>Sociedad en Comandita Simple S. en C.S.</option>
                                <option value='sociedadDeNombreColectivo'>Sociedad en Nombre Colectivo</option>
                            </SelectInput>
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
                                placeholder='VECJ880326XXX'
                            />
                            <SelectInput label='Régimen fiscal' name='regimenFiscal'>
                                <option value=''>Selecciona una razón social</option>
                                <option value='regimenIncorporacionFiscal'>Régimen de Incorporación Fiscal RIF</option>
                                <option value='actividadesEmpresariales'>Actividades empresariales</option>
                                <option value='arrendamientosInmuebles'>Arrendamiento de inmuebles</option>
                                <option value='serviciosProfesionales'>Servicios profesionales</option>
                                <option value='asalariados'>Asalariados</option>
                                <option value='regimenFiscalGeneral'>Régimen fiscal general</option>
                                <option value='acumulacionIngresos'>Acumulación de ingresos</option>
                            </SelectInput>
                            <DataInput
                                label='Industria'
                                name='industria'
                                type='text'
                                placeholder='Automotriz'
                            />
                            <DataInput
                                label='Número de telefónico'
                                name='numeroTelefonico'
                                type='text'
                                placeholder='(123) 123-1234'
                            />
                            <DataInput
                                label='Dirección de correo electrónico'
                                name='email'
                                type='email'
                                placeholder='tuEmail@email.com'
                            />
                            </div>
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
