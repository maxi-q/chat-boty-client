import { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  initialValue?: string
  setState?: (value: string) => void
}

const TelegramInput: FC<InputProps> = (props) => {
  const [value, setValue] = useState(props.initialValue)

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    let value = target.value


    // Форматирование номера телефона
    if (value.slice(0, 1) == '@') {
      value = value
    } else {
      value = '@' + value
    }
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
      value={value}
      {...(props.register && {
        ...props.register(props.name, {
          onChange: handleInput,
        }),
      })}
    />
  )
}

export default TelegramInput
