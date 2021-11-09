import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// .: Form Schema
import { formSchema } from './api/validations'

// .: Components
import FormOne from '../components/FormOne'
import FormTwo from '../components/FormTwo'
import FormThree from '../components/FormThree'
import FormFour from '../components/FormFour'
import FinalForm from '../components/FinalForm'

export default function FormikForm() {
    const [data, setData] = useState({
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
            EntidadFederativaDeNacimiento: '',
            paisDeNacimiento: '',
            nacionalidad: '',
            curp: '',
            rfc: '',
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
    })

    const [currentPage, setCurrentPage] = useState(0)

    // Sending Info to API
    const makeRequest = (formData) => {
        console.log('to api',formData)
        alert(JSON.stringify(formData, null, 2))
    };

    const handleNextPage = (newData, end = false) => {

        if (end) {
            makeRequest(newData)
            return
        } else {
            setData((prev) => ({ ...prev, ...newData }))
        setCurrentPage((prev) => prev + 1)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        }
        
    }

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setCurrentPage((prev) => prev - 1);
    };

    const pages = [
        <FormOne key='1' next={handleNextPage} data={data} />,
        <FormTwo key='2' next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FormThree key='3' next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FormFour key='4' next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FinalForm key='5' next={handleNextPage} prev={handlePrevStep} data={data} />,
    ];
    console.log('data', data)

    return (
        <>
            <div className='flex justify-center mb-50px'>
                
                {pages[currentPage]}
            </div>
        </>
    )
}