import styled from 'styled-components';
import { semidark, semiwhite } from '../../styles/color.global';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: ${semiwhite};
    max-height: 100%;
    overflow: hidden;

    input {
      display: none;
    }

    label {
    padding: 20px 10px;
    width: 20rem;
    color: ${semidark};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    cursor: pointer;

    small {
      font-size: 0.6rem;
      color: red;
      font-weight: 700;
    }
}
`;

