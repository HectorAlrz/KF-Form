import * as Yup from 'yup'

export const formOneSchema = Yup.object({
    razonSocial: Yup.string()
      .oneOf(
        ['sociedadAnonima', 
        'sociedadDeResponsabilidadLimitada',
        'sociedadComanditaAcciones',
        'sociedadComanditaSimple',
        'sociedadDeNombreColectivo'
        ])
        .required('Se necesita la Razón Social.'),

    nombreComercial: Yup.string()
      .min(2, 'Debe propocionar un nombre de al menos 2 caracteres.')
      .required('Debe ingresar un nombre comercial.'),

    nacionalidad: Yup.string()
      .min(5, 'La nacionalidad debe contener al menos 5 caracteres.')
      .required('Debe ingresar una nacionalidad.'),

    fechaDeConstitucion: Yup.date()
      .max(new Date(Date.now()),'La fecha de constitución no puede ser en el futuro.')
      .required('Este campo es obligatorio.'),

    rfc: Yup.string()
      .min(13, 'El RFC debe contener 13 digitos.')
      .required('Este es un campo obligatorio.'),

    regimenFiscal: Yup.string()
    .oneOf(
      ['regimenIncorporacionFiscal', 
      'actividadesEmpresariales',
      'arrendamientosInmuebles',
      'serviciosProfesionales',
      'asalariados',
      'regimenFiscalGeneral',
      'acumulacionIngresos'
      ])
      .required('Se necesita el régimen fiscal.'),
    
    industria: Yup.string()
      .min(5, 'El campo debe contener al menos 5 caracteres.')
      .required('Se debe ingresar la industria.'),
    
    numeroTelefonico: Yup.string()
      .required('El número es necesario')
      .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Introduce solo números'
      ),
    
    email: Yup.string()
      .email('Introduce un correo valido')
      .required('Este campo es requerido'),

  })
 // Schema two
  export const formTwoSchema = Yup.object({
      
    domicilio: Yup.object().shape({
        
        calle: Yup.string()
          .min(3,'La calle debe contener al menos 5 caracteres')
          .max(50,'La calle debe contener como máximo 50 caracteres')
          .required('Este campo es obligatorio'),

          numeroExterior: Yup.string()
          .required('El número es necesario')
          .min(1,'Ingresa al menos un digito')
          .matches(
            /^[0-9]*$/,
          'Introduce solo números'
          ),

        numeroInterior: Yup.string()
        .min(1,'introduce al menos un digito')
        .matches(
        /^[0-9]*$/,
        'Introduce solo números'
      ),

        codigoPostal: Yup.string()
          .required('Este campo es obligatorio')
          .matches(
          /^[0-9]*$/,
          'Introduce solo números'
        ),

        colonia: Yup.string()
          .min(5,'La colonia debe contener al menos 5 caracteres')
          .max(50,'La colonia debe contener como máximo 50 caracteres')
          .required('Este campo es obligatorio'),
        
        ciudad: Yup.string()
          .min(5,'La ciudad debe contener al menos 5 caracteres')
          .max(25,'La ciudad debe contener como máximo 25 caracteres')
          .required('Este campo es obligatorio'),
        
        estado: Yup.string()
          .min(5,'Este campo debe contener al menos 5 caracteres')
          .max(25,'Este campo debe contener como máximo')
          .required('Este campo es obligatorio'),

        pais: Yup.string()
          .min(5,'Este campo debe contener al menos 5 caracteres')
          .max(25,'Este campo debe contener como máximo')
          .required('Este campo es obligatorio'),
        
    })
  })

  export const formThreeSchema = Yup.object({
      
    representanteLegal: Yup.object().shape({
        
      nombreRepresentante: Yup.string()
          .min(5,'Este campo debe contener al menos 5 caracteres')
          .max(80,'Este campo debe contener como máximo')
          .required('Este campo es obligatorio'),
      
      genero: Yup.string()
        .oneOf(
          ['femenino','masculino', 'otro'])
        .required('Se necesita el régimen fiscal.'),
      
      fechaDeNacimiento: Yup.date()
        .max(new Date(new Date().setDate(new Date().getDate() - 6570)),'Debe ser mayor de edad')
        .required('Este campo es obligatorio.'),

      entidadFederativaDeNacimiento: Yup.string()
        .min(5,'Este campo debe contener al menos 5 caracteres')
        .max(30,'Este campo debe contener como máximo 30 caracteres')
        .required('Este campo es obligatorio'),
      
      paisDeNacimiento: Yup.string()
        .min(5,'Este campo debe contener al menos 5 caracteres')
        .max(30,'Este campo debe contener como máximo 30 caracteres')
        .required('Este campo es obligatorio'),
      
      curp: Yup.string()
        .min(18,'Este campo debe contener al menos 18 digitos')
        .max(18,'Este campo debe contener como máximo 18 digitos')
        .required('Este campo es obligatorio'),
      
      rfc: Yup.string()
        .min(13,'Este campo debe contener al menos 13 digitos')
        .max(13,'Este campo debe contener como máximo 13 digitos')
        .required('Este campo es obligatorio'),

      estadoCivil: Yup.string()
        .min(5,'Este campo debe contener al menos 5 digitos')
        .max(15,'Este campo debe contener como máximo 15 digitos')
        .required('Este campo es obligatorio'),
      
      email: Yup.string()
        .email('Introduce un correo valido')
        .required('Este campo es necesario'),
    })
  })

  export const formFourSchema = Yup.object({
      
    representanteLegal: Yup.object().shape({

        domicilio: Yup.object().shape({

          calle: Yup.string()
          .min(3,'La calle debe contener al menos 5 caracteres')
          .max(50,'La calle debe contener como máximo 50 caracteres')
          .required('Este campo es obligatorio'),

          numeroExterior: Yup.string()
          .required('El número es necesario')
          .min(1,'Ingresa al menos un digito')
          .matches(
            /^[0-9]*$/,
          'Introduce solo números'
          ),

        numeroInterior: Yup.string()
        .min(1,'introduce al menos un digito')
        .matches(
        /^[0-9]*$/,
        'Introduce solo números'
      ),

        codigoPostal: Yup.string()
          .required('Este campo es obligatorio')
          .matches(
          /^[0-9]*$/,
          'Introduce solo números'
        ),

        colonia: Yup.string()
          .min(5,'La colonia debe contener al menos 5 caracteres')
          .max(50,'La colonia debe contener como máximo 50 caracteres')
          .required('Este campo es obligatorio'),
        
        ciudad: Yup.string()
          .min(5,'La ciudad debe contener al menos 5 caracteres')
          .max(25,'La ciudad debe contener como máximo 25 caracteres')
          .required('Este campo es obligatorio'),
        
        estado: Yup.string()
          .min(5,'Este campo debe contener al menos 5 caracteres')
          .max(25,'Este campo debe contener como máximo')
          .required('Este campo es obligatorio'),

        pais: Yup.string()
          .min(5,'Este campo debe contener al menos 5 caracteres')
          .max(25,'Este campo debe contener como máximo')
          .required('Este campo es obligatorio'),
        })
    })
  })

  export const finalForm = Yup.object({
    representanteLegal: Yup.object().shape({

      clabe: Yup.string()
        .min(18,'La CLABE debe contener al menos 18 caracteres')
        .max(18,'La CLABE debe contener como máximo 18 caracteres')
        .required('Este campo es obligatorio'),
      
      banco: Yup.string()
        .min(3,'Este campo necesita 3 caracteres o más')
        .max(50,'ximo 50 caracteres')
        .required('Este campo es obligatorio'),

      })
  })
  