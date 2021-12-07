import { InputText, Container } from './styled'

interface InputProps {
  readonly label: string
  readonly placeholder?: string
  readonly defaultValue?: string
  readonly name: string
  readonly register?: any
  readonly required?: boolean
  readonly errors: {
    [x: string]: any
  }
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  name,
  register,
  required,
  errors,
  ...props
}) => {
  return (
    <Container>
      <span>
        {label}
        {errors[name] && errors[name].type === 'required' && (
          <small> Obrigatório</small>
        )}
      </span>
      <InputText
        type="text"
        {...register(name, { required })}
        placeholder={placeholder || label}
        {...props}
      />
    </Container>
  )
}

export default Input
