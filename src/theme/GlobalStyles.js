import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        /* happy rems */
        font-family: 'Raleway', sans-serif;
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background: ${({ theme }) => theme.bgColors.primaryColor};
        color: ${({ theme }) => theme.fontColors.primaryColor};
    }
`;

export default GlobalStyle;
