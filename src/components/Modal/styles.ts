import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: #f1f1f1;
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;
        padding: 30px;
        margin: 30px;
        display: flex;
        width: 90%;
        max-width: 300px;
        aspect-ratio: 1/1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.3s ease-in-out;

        :hover {
            box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
        }
    `}
`;
