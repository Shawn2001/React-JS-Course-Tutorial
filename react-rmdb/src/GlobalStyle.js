// Create Global Style for the webpage
import { createGlobalStyle } from 'styled-components';

// const means this will not change
export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontSamll: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-seif;
    }

    body{
        margin: 0;
        padding: 0;
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white)
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            font-weight: var(--white);
        }
    }
`
