import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        button {
            color: ${theme.colors.primary};
            font-weight: bold;
            padding: ${theme.spacings[6]};
        }
        button:hover {
            color: ${theme.colors.primaryVariant};
        }

        @media only screen and (max-width: 1000px) {
            padding: ${theme.spacings[2]};
        }
        @media only screen and (max-width: 769px) {
            button {
                padding: ${theme.spacings[2]};
            }
        }
    `}
`;
