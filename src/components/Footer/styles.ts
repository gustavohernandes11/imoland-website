import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;

}

export const Container = styled.footer`
    ${({ theme }: ContainerInterface) => css`
        padding: ${theme.spacings[4]} ${theme.spacings[14]};
        background: ${theme.colors.surface};
        color: grey;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.spacings[4]};
        @media only screen and (max-width: 1200px) {
        padding: ${theme.spacings[14]} ${theme.spacings[4]};
        }
        @media only screen and (max-width: 600px) {
        padding: ${theme.spacings[8]} ${theme.spacings[2]};
        }


    `}
`;
