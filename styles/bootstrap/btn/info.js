import { css } from "emotion";

import { active } from "./../active";

export const btnInfo = css`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #138496;
        border-color: #117a8b;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:active,
    &.${active} {
        background-color: #138496;
        background-image: none;
        border-color: #117a8b;
    }
`;
