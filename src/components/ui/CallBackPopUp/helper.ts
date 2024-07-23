import * as yup from 'yup'

// Регулярные выражения
export const regex = {
  name: /^[а-яА-Яa-zA-Z ]{0,20}$/,
  contactTelegram: /^@.{2,20}$/,
  contactPhone: /\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/,
}

// Определение отдельных полей
const name = yup.string().matches(regex.name, 'Уложитесь в 20 символов (только буквы)').required('Как к вам обращаться?')
const contactTelegram = yup.string().matches(regex.contactTelegram, 'Телеграм от 2 до 20 символов').required('Введите Telegram')
const contactPhone = yup.string().matches(regex.contactPhone, 'Введите телефон').required('Введите телефон')

// Главная схема валидации с условной логикой
export const schemas = {
  custom: yup.object().shape({
    name,
    contactType: yup.string().oneOf(['Telegram', 'Phone']).required('Выберите тип контакта'),
    contactTelegram: yup.string().when('contactType', ([Type], _) => {
      return Type == 'Telegram' ? contactTelegram : yup.string().notRequired()
    }),
    contactPhone: yup.string().when('contactType', ([Type], _) => {
      return Type == 'Phone' ? contactPhone : yup.string().notRequired()
    }),
  }),
}
