import { css } from "emotion";

export const srOnlyFocusable = css`
    &:active,
    &:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
        -webkit-clip-path: none;
        clip-path: none;
    }
`;
