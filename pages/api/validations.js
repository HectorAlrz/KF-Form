import * as Yup from 'yup'

export const formSchema = Yup.object({
    razonSocial: Yup.string()
      .required('Se necesita la Razón Social')
  })