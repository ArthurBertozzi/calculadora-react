import {createGlobalStyle} from 'styled-components';

// guia de global styled components -> https://dilshankelsen.com/create-global-styles-with-styled-components/
// estiliza globalmente o que quisermos

export default createGlobalStyle`
    // retirar todas as margens e padding dos elementos e dos body
    *, body {
        margin: 0;
        padding: 0;  
    }
`
