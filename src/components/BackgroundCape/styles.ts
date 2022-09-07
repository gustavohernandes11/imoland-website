import styled, { css } from "styled-components";

interface ContainerInterface {
    color?: string;
    height: string | number;
    backgroundUrl: any;
}

export const Container = styled.section`
    ${({ color = "#f0f0f0", height, backgroundUrl }: ContainerInterface) => css`
        background-color: ${color};
        z-index: -10;
        background-image: ${`url("${backgroundUrl}")`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        height: 400px;
        
        
        max-height: ${height};
        overflow: hidden;
        }

    `}
`;
