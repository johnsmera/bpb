import styled from 'styled-components';
import { primary, semidark, white } from '../../styles/color.global';
import { boxMargin } from '../../styles/spacing.global';

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
`;

export const FirstContent = styled.div`
    background-color: ${primary};     
    height: 80vh;
    flex: 1;
    border-radius: 0 0 6.4rem 0;
    padding: 4.2rem 3.4rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    > span {
        color: ${semidark};
        font-size: 0.95rem;
    }

    @media (max-width: 767px) {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
`

export const SecondContent = styled.div`
    height: 100vh;
    width: 45vw;
    padding: 2.4rem 2.4rem 0 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    article {
        h1 {
            margin-top: 2.8rem;
        }
    
        span {
            margin-top: 0.8rem;
        }
    }

    img {
      object-fit: contain;
    }
    
    @media (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }

  
`
export const LogoContainer = styled.div``

export const FormContainer = styled.form`
    margin-top: 0.8rem;
    width: 96%;

    section {
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        margin-top: 0.8rem;
    }

    > footer {
        margin-top: 0.4rem;
        font-size: 0.8rem;
        margin-left: 0.4rem;
    }
`