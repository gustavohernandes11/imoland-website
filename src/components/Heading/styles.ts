import styled, { css } from "styled-components";

interface WrapperInterface {
    theme: any;
    as?: string;
}

export const Wrapper = styled.h1`
    ${({ theme, as }: WrapperInterface) => css`
        color: ${theme.colors.text};
        font-size: ${as === "h1" && theme.fontSizes.xl};
        font-size: ${as === "h2" && theme.fontSizes.md};
        font-size: ${as === "h3" && theme.fontSizes.sm};

        margin: ${theme.spacings[4]} 0;

        @media only screen and (max-width: 769px) {
            font-size: ${as === "h1" && theme.fontSizes.lg};
            font-size: ${as === "h2" && theme.fontSizes.sm};
            font-size: ${as === "h3" && theme.fontSizes.xs};
        }
    `}
`;
