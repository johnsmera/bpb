import styled from 'styled-components'
import {
  dark,
  gray,
  primary,
  semidark,
  semiwhite,
  white,
} from './color.global'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${white};

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    width: auto;
    height: auto;
  }
`

export const FirstContent = styled.div`
  background-color: ${primary};
  height: 85vh;
  flex: 1;
  border-radius: 0 0 6.4rem 0;
  padding: 5rem 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  > span {
    color: ${semidark};
    font-size: 0.95rem;
  }

  @media (max-width: 767px) {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 5rem 2.4rem;
  }
`

export const SecondContent = styled.div`
  height: 100vh;
  width: 45vw;
  padding: 2.4rem 2.4rem 0 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    h1 {
      margin-top: 2.8rem;
      font-size: 2.8rem;
    }

    p {
      margin-top: 0.8rem;
      color: ${gray};
      font-size: 1rem;
    }
  }

  img {
    object-fit: contain;
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;

    section h1 {
        font-size: 1.4rem;
    }
  }
`
export const LogoContainer = styled.div``

export const Form = styled.form`
  margin-top: 0.8rem;
  width: 96%;

  > footer {
    margin-top: 0.4rem;
    font-size: 0.8rem;
    margin-left: 0.4rem;
  }

  .last-row {
    background-color: ${semiwhite};
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 0.8rem;
    border-radius: 0.4rem;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    button {
      height: 4.6rem;
      background-color: ${dark};
      width: 100%;
      border-radius: 0 0.4rem 0.4rem 0;
      color: ${white};
      font-size: 1.4rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 2rem;
      border: 0;
    }

    button:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`
