import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
    color?: string;
    justifyContent?: string;
    alignItems?: string;
    full?: boolean;
    height?: string | number;
}

export const Container = styled.section`
    ${({
        theme,
        color,
        justifyContent = "initial",
        alignItems = "initial",
        full,
        height = "initial",
    }: ContainerInterface) => css`
        color: ${theme.colors.text};
        padding: ${theme.spacings[14]};
        background-color: ${color ? color : theme.colors.background};

        
        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        ${height && `height: ${height}`};
        ${full && `min-height: 100vh`};


        @media only screen and (max-width: 1200px) {
        padding: ${theme.spacings[8]} ${theme.spacings[4]};
        }
        @media only screen and (max-width: 600px) {
        padding: ${theme.spacings[4]};
        }
        }

    `}
`;
