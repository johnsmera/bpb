import { InputHTMLAttributes } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { Container } from './styled'

interface UploadFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange(event: any): void
  data: any
  required?: boolean
  errors: {
    [x: string]: any
  }
  register?: any
  name: string
}

const UploadFile: React.FC<UploadFileProps> = ({
  data,
  onChange,
  required,
  register,
  errors,
  name,
}) => {
  return (
    <Container>
      <label>
        <input
          {...register(name, { required })}
          type="file"
          onChange={onChange}
        />

        <BsCloudUpload size={20} />
        {!data && 'Selecionar vídeo'}
        {errors[name] && errors[name].type === 'required' && !data && (
          <small> Obrigatório</small>
        )}
        {data && <strong>{`${data.name}`}</strong>}
      </label>
    </Container>
  )
}

export default UploadFile
