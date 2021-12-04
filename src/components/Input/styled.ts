import styled from 'styled-components';
import { semidark, white } from '../../styles/color.global';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;

    span {
        color: ${semidark};
        font-weight: 500;
        font-size: 0.84rem;
    }
`;

export const InputText = styled.input`
    outline: none;
    background-color: ${white};
    border: none;
    border-radius: 0.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    margin-top: 0.2rem;
    padding: 0.8rem;
    color: ${semidark};
    font-size: 0.8rem;
    
    ::-webkit-input-placeholder {
        opacity: 0.6;
    }

    :focus {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    
`