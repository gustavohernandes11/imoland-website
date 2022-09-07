import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }: any) => css`
    border-top: 1px solid ${theme.colors.border};
    width: 100%;
    padding: ${theme.spacings[4]} 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `}
`;