import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
    color?: string;
    justifyContent?: string;
    alignItems?: string;
    full?: boolean;
    height?: string | number;
    backgroundUrl?: any;
}

export const Container = styled.section`
    ${({
        theme,
        color,
        justifyContent = "unset",
        alignItems = "unset",
        full,
        height = "unset",
        backgroundUrl,
    }: ContainerInterface) => css`
        color: ${theme.colors.text};
        padding: ${theme.spacings[14]};
        background-color: ${color ? color : theme.colors.background};

        background-image: ${backgroundUrl ? `url(${backgroundUrl})` : "none"};
        background-size: cover;
        
        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        height: ${height};
        min-height: ${full == true ? `100vh` : `unset`};

        @media only screen and (max-width: 1200px) {
        padding: ${theme.spacings[8]} ${theme.spacings[4]};
        }
        @media only screen and (max-width: 600px) {
        padding: ${theme.spacings[4]};
        }


        }

    `}
`;
