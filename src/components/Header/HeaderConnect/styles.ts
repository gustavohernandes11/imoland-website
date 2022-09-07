import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        gap: ${theme.spacings[4]};
        width: 100%;

        color: ${theme.colors.border};
        font-size: ${theme.fontSizes.xs};
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: ${theme.spacings[2]} ${theme.spacings[14]};
        border-bottom: 1px solid ${theme.colors.border};

        svg {
            margin: 0 5px;
        }

        @media only screen and (max-width: 769px) {
        padding: ${theme.spacings[2]} 0;
        display: none;
        }
    `}
`;
