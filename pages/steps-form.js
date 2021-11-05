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
            nombre: '',
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
        alert(JSON.stringify(formData,null,2))
      };

    const handleNextPage = (newData, end = false) =>{
        setData((prev) => ({...prev, ...newData}))

        if(end) {
            makeRequest(newData)
            return
        }
        setCurrentPage((prev) => prev + 1)
    }

    const handlePrevStep = (newData) => {
        setData((prev) => ({ ...prev, ...newData }));
        setCurrentPage((prev) => prev - 1);
      };
    
      const pages = [
        <FormOne next={handleNextPage} data={data} />,
        <FormTwo next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FormThree next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FormFour next={handleNextPage} prev={handlePrevStep} data={data} />,
        <FinalForm next={handleNextPage} prev={handlePrevStep} data={data} />
      ];
      console.log('data',data)

    return (
        <>
         <div className='flex justify-center mb-50px'>{pages[currentPage]}</div>
        </>
    )
}