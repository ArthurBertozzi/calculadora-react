import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    // criamos um componente já na div para não termos que importar
    // encadeamento dos objetos
    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 10px;
        color: #FFFFFF;

        font-size: 24px;
        font-family: 'Roboto';
    }
`