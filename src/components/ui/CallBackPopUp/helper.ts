import * as yup from 'yup'

export const regex = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
}

const name = yup.string().matches(regex.name, 'крл 2-20').required('введите имя')

export const schemas = {
  custom: yup.object().shape({
    name
  })
}
export const initValues = { name: '' }
