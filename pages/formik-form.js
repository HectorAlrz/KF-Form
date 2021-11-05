import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from './api/validations'

// .: Components
import DataInput from '../components/DataInput'

export default function FormikForm() {
    const [page, setPage] = useState(1)
    const router = useRouter()

    function formStepper() {
        setPage(page => page + 1)
    }

    return (
        <>
            <Formik
                initialValues={{
                    razonSocial: '',
                    nombreComercial: '',
                    nacionalidad: '',
                    fechaDeConstitucion: '',
                    rfc: '',
                    regimenFiscal: '',
                    industria: '',
                    domicilio: {
                        calle: '',
                        numeroExterior: '',
                        numeroInterior: '',
                        codigoPostal: '',
                        colonia: '',
                        ciudad: '',
                        estado: '',
                        pais: '',
                    },
                    comprobanteDeDomicilio: '',
                    numeroTelefonico: '',
                    email: '',
                    representanteLegal: {
                        nombreRepresentante: '',
                        genero: '',
                        fechaDeNacimiento: '',
                        entidadFederativaDeNacimiento: '',
                        paisDeNacimiento: '',
                        nacionalidadRepresentante: '',
                        curp: '',
                        rfc:'',
                        domicilio: {
                            calle: '',
                            numeroExterior: '',
                            numeroInterior: '',
                            codigoPostal: '',
                            colonia: '',
                            ciudad: '',
                            estado: '',
                            pais: '',
                        },
                        estadoCivil: '',
                        email: '',
                        telefono: '',
                        documentoDeIdentificacion: '',
                    },
                    cuentaBancaria: {
                        clabe: '',
                        banco: ''
                    }
                }}
                /* Validation Schema using Yup */
                validationSchema={formSchema}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div className='flex justify-center mb-50px'>
                        {page === 1 && 'hello'}
                        <div className=''>
                            {/* Section 1 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className='text-plover-blue text-center text-2xl'>Datos Personales</h3>
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
                            {/* Section 2 */}
                            <div className='mt-10 mb-50px border-b-2 border-orange-kf'>
                                <h3 className='text-plover-blue text-center text-2xl'>Domicilio</h3>
                            </div>
                            <DataInput
                                label='Calle o Avenida'
                                name='calle'
                                type='text'
                                placeholder='Saturno'
                            />
                            <DataInput
                                label='Número exterior'
                                name='numeroExterior'
                                type='text'
                                placeholder='#309'
                            />
                            <DataInput
                                label='Número interior'
                                name='numeroInterior'
                                type='text'
                                placeholder='#6'
                            />
                            <DataInput
                                label='Código Postal'
                                name='codigoPostal'
                                type='text'
                                placeholder='30001'
                            />
                            <DataInput
                                label=' Colonia o Urbanización'
                                name='colonia'
                                type='text'
                                placeholder='Marte'
                            />
                            <DataInput
                                label='Ciudad o Población'
                                name='ciudad'
                                type='text'
                                placeholder='Xalapa'
                            />
                            <DataInput
                                label='Estado'
                                name='estado'
                                type='text'
                                placeholder='Veracruz'
                            />
                            <DataInput
                                label='País'
                                name='pais'
                                type='text'
                                placeholder='México'
                            />
                            {page === 2 && 'Aye'}
                            {page === 3 && 'Mate'}
                            <div className='mt-50px'>
                                <button type='submit' onClick={formStepper} className='bg-orange-kf mr-1 w-280px md:w-408px lg:w-539px h-30px mb-1 hover:bg-orange-600 text-white font-normal rounded'>
                                    Siguiente
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* 2nd form */}
                </Form>
            </Formik>
            <div className='mt-50px'>
                <button type='submit' onClick={formStepper} className='bg-orange-kf mr-1 w-280px md:w-408px lg:w-539px h-30px mb-1 hover:bg-orange-600 text-white font-normal rounded'>
                    Siguiente
                </button>
            </div>
        </>
    )
}
