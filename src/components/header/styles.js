import styled from 'styled-components';

export const Navbar = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0.5rem 3rem 0 3rem;
`;

export const NavbarLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 16rem;
    display: none;
`;

export const VerticalCenter = styled.div`
    display: block;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

export const SvgImage = styled.img`
    max-width: 32rem;
    margin-top: 0;
    margin-left: 0;

    @media (max-width: 1024px) {
        margin-left: 48px;
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        margin-left: 2rem;
    }

    @media (max-width: 640px) {
        margin-top: 0;
    }
`;

export const Description = styled.div`

    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    p {
        margin: 2rem 4rem 0 1rem;
        line-height: 1.5;

        @media (max-width: 1024px) {
            margin: 2rem 0 0 0;

        }

        @media (max-width: 768px) {
            margin: 2rem 0 0 1rem;
        }
    }

    button {
        margin: 1.5em auto;
    }
`;