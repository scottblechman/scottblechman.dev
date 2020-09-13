import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

    @media screen and (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-image:
            linear-gradient(
            to right, 
            #048ba8, #16db93
            );
        color: #f5f5f5;
        font-family: 'Open Sans', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6, a {
        font-family: 'Poppins', sans-serif;
    }

    a { 
        color: #f5f5f5;
        text-decoration: none;
    }
`;

export const HoverUnderline = styled.span`
    transition: 0.4s;
    border-bottom: 1px solid transparent;

    &:hover {
        border-color: #f5f5f5;
    }
`;

export const Underlined = styled.span`
    transition: 0.4s;
    border-bottom: 1px solid #f5f5f5;
    display: inline-block;

    @media (max-width: 1024px) {
        display: inline;
    }

    &:hover {
        transform: translateY(-1px);
    }
`;

export const Container = styled.div`
    padding: 6rem;
    letter-spacing: 0.05em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;