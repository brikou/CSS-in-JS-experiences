import { css } from "emotion";

export const close = css`
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;

    &:focus,
    &:hover {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
    }

    button& {
        padding: 0;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
    }
`;
