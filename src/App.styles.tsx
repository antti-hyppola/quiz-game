import styled, { createGlobalStyle } from 'styled-components'
import Tetris from './images/tetris.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${Tetris});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: #fff
    }

    .score {
        color #fff;
        font-size: 2.5rem;
        margin: 0;
        font-family: 'VT323', monospace;
    }

    h1 {
        font-family: 'VT323', monospace;
        background-image: linear-gradient(180deg, #fff, #B0B0B0);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 80px;
        font-weight: 400;
        text-align: center;
        margin: 20px
    }

    .start, .next {
        cursor: pointer;
        background: #fff;
        border: 2px solid #000;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        box-shadow: 5px 10px 20px rgba(0, 133, 163, 0.25);
    }

    .start {
        max-width: 200px;
    }
`