import styled, { css } from "styled-components";

import type { ContainerInterface } from "../../utils/types";

export const Container = styled.header`
    ${({ theme }: ContainerInterface) => css`
        color: ${theme.colors.text};
        background: #f5f5f5;
        z-index: 10;

        .container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 ${theme.spacings[14]};
            flex-direction: row;
            box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.1);
            background: #f3f3f3;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        #drawer-nav-button {
            display: none;
        }
        @media only screen and (max-width: 769px) {
            #drawer-nav-button {
                display: block;

            }
        }

        @media only screen and (max-width: 769px) {
            .container {
                padding: ${theme.spacings[4]} ${theme.spacings[8]};
                font-size: ${theme.fontSizes.sm};
                #horizontal-nav {
                display: none;
            }
            }

        }
         @media only screen and (max-width: 769px) {
            .container {
                padding: ${theme.spacings[2]} ${theme.spacings[4]};
                position: fixed;
                top: 0;
                left:0;
                z-index: 10;
            }
            }
        }
    `}
`;
