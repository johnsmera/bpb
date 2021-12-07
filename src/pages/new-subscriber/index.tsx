import type { NextPage } from 'next'
import Image from 'next/image'
import { MdNavigateNext } from 'react-icons/md'

import {
  Container,
  FirstContent,
  Form,
  LogoContainer,
  SecondContent,
} from '../../styles/NewSubscriber.module'

import logo from '../../assets/imgs/logo-playmatch.svg'
import kidsImage from '../../assets/imgs/kids.png'
import Input from '../../components/Input'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useCallback, useState } from 'react'
import UploadFile from '../../components/UploadFile'

const NewSubscriber: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = useCallback(
    (data: any) => {
      const { document } = data
      const formData = new FormData()
      formData.append('video', selectedVideo || '')
      axios({
        method: 'post',
        url: `http://localhost:7777/upload/${document}`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log('err', err))
    },
    [selectedVideo]
  )

  const fileUploadHandler = (event: any) => {
    console.log(event.target.files[0])
    setSelectedVideo(event.target.files[0])
  }

  return (
    <Container>
      <FirstContent>
        <h1>Bem-vindo(a) ao Big Player Brasil :)</h1>
        <span>
          Faça sua inscrição no mais novo e interessante reality show gamer
          brasileiro
        </span>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            register={register}
            errors={errors}
            label="Nome participante"
            placeholder="Insira seu nome"
            required
          />
          <Input
            name="email"
            register={register}
            errors={errors}
            label="E-mail válido"
            placeholder="Insira seu e-mail"
            required
          />
          <Input
            name="phone"
            register={register}
            errors={errors}
            label="Número celular"
            placeholder="Insira seu celular"
            required
          />
          <Input
            name="document"
            register={register}
            errors={errors}
            label="Número do CPF"
            placeholder="Insira seu CPF"
            required
          />
          <div className="last-row">
            <UploadFile
              name="video"
              errors={errors}
              register={register}
              data={selectedVideo}
              onChange={fileUploadHandler}
              required
            />
            <button type="submit">
              Finalizar
              <MdNavigateNext color="white" size={40} />
            </button>
          </div>
          <footer>
            * Ao finalizar você concorda com os nossos Termos de uso e Condições
          </footer>
        </Form>
      </FirstContent>
      <SecondContent>
        <LogoContainer>
          <Image src={logo} alt="Playmatch" />
        </LogoContainer>
        <section>
          <h1>Queremos conhecer todo o seu potencial</h1>
          <p>
            Os nossos recrutadores vão analisar o seu perfil, fique de olho no
            seu painel de usuário para acompanhar o resultado
          </p>
        </section>

        <Image src={kidsImage} alt="Crianças Playmatch" />
      </SecondContent>
    </Container>
  )
}

export default NewSubscriber
