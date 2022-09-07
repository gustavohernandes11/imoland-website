import styled, { css } from "styled-components";

export const Modal = styled.div`
    ${({ theme, row }: any) => css`
        background: ${theme.colors.surface};
        border: 1px solid ${theme.colors.border};
        border-radius: 5px;

        height: fit-content;
        display: flex;
        flex-direction: ${row ? "row" : "column"};
        transition: box-shadow 0.3s ease-in-out;

        ${row && `margin-bottom: 10px;`};

        :hover {
            box-shadow: 0px 0px 10px rgb(57, 125, 214, 0.3);
        }

        img {
            border-radius: 5px;
        }
        .chip-immobile {
            background: ${theme.colors.primary};
        }
        .immobile-title {
            margin: ${theme.spacings[2]} 0 0;
        }
        .immobile-modal-body {
            margin-top: ${theme.spacings[2]};
            padding: ${theme.spacings[4]};
            width: 100%;
            flex-basis: 1;
        }
        .immobile-price {
            color: green;
        }
    `}
`;

export const InformationModal = styled.section`
    ${({ theme, row = false }: any) => css`
        border: 5px;
        display: flex;
        flex-direction: row;
        justify-content: ${row ? "unset" : "space-between"};
        ${row && `gap: 15px;`};

        span {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5px;
            text-align: center;
        }
    `}
`;

export const ModalFooter = styled.footer`
    ${({ theme}) => css`
        width: 100%;
        border-top: 1px solid ${theme.colors.border};
        padding-top: ${theme.spacings[4]};
        display: flex;

        flex-direction: row;
        justify-content: end;
        align-items: space-between;
    `}
`;
