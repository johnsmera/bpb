import type { NextPage } from 'next'
import Image from 'next/image'

import { Container, FirstContent, FormContainer, LogoContainer, SecondContent } from './styled'

import logo from '../../assets/imgs/logo-playmatch.svg'
import kidsImage from '../../assets/imgs/kids.png'
import Input from '../../components/Input'
import { dark, white } from '../../styles/color.global'

const NewCompetitor: NextPage = () => {
  return (
    <Container>
      <FirstContent>
        <h1>Bem-vindo(a) ao Big Player Brasil :)</h1>
        <span>Faça sua inscrição no mais novo e interessante reality show gamer brasileiro</span>

        <FormContainer>
          <Input label="Nome participante" placeholder="Insira seu nome" />
          <Input label="E-mail válido" placeholder="Insira seu e-mail" />
          <Input label="Número celular" placeholder="Insira seu celular" />
          <section>
            <div style={{ height: '4.6rem', backgroundColor: white, width: "100%", borderRadius: '0.4rem' }}> </div>
            <div style={{ height: '4.6rem', backgroundColor: dark, width: "100%", borderRadius: '0.4rem' }}> a</div>
          </section>
          <footer>* Ao finalizar você concorda com os nossos Termos de uso e Condições</footer>
        </FormContainer>
      </FirstContent>
      <SecondContent>
        <LogoContainer>
          <Image src={logo} alt="" />
        </LogoContainer>
        <article>
          <h1>Vamos fazer o upload do seu vídeo :)</h1>
          <span>
            Os nossos recrutadores vão analisar o seu perfil, fique de olho no seu painel de usuário para acompanhar o seu resultado
          </span>
        </article>

        <Image src={kidsImage} alt="Crianças Playmatch" />
      </SecondContent>
    </Container>
  )
}

export default NewCompetitor
