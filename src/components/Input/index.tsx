import { InputText, Container } from './styled'

type InputProps = {
  readonly label: string;
  readonly placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder }) => {
  return (
    <Container>
      <span>
        {label}
      </span>
      <InputText placeholder={placeholder || label} />
    </Container>
  )
}

export default Input
