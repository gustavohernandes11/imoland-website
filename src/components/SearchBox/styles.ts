import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
}
export const Container = styled.form`
    ${({ theme }: ContainerInterface) => css`
        gap: 10px;
    `}
`;
