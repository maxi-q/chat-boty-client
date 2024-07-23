import { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  initialValue?: string
  setState?: (value: string) => void
}

const PhoneInput: FC<InputProps> = (props) => {
  const [value, setValue] = useState(props.initialValue)

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    let value = target.value

    // Удаление всех нецифровых символов
    value = value.replace(/\D/g, '')

    // Ограничение количества цифр (1 для кода страны и 10 для номера телефона)
    if (value.length > 11) {
      value = value.slice(0, 11)
    }

    // Форматирование номера телефона
    if (value.length > 1) {
      value = value.replace(/(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, (_, p1, p2, p3, p4, p5) => {
        let result = `+${p1} `
        if (p2) result += `(${p2}`
        if (p3) result += `) ${p3}`
        if (p4) result += `-${p4}`
        if (p5) result += `-${p5}`
        return result
      })
    } else {
      value = '+' + value
    }
    if (value === '+') value = ''
    target.value = value

    setValue(value)
  }

  useEffect(() => {
    props.setState && props.setState(value || '')
  }, [value])

  return (
    <input
      type="text"
      className={props.className}
      placeholder="+7 (___) ___-__-__"
      value={value}
      {...(props.register && {
        ...props.register(props.name, {
          onChange: handleInput,
        }),
      })}
    />
  )
}

export default PhoneInput
