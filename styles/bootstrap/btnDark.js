import { css } from "emotion";

import { active } from "./active";

export const btnDark = css`
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #343a40;
        border-color: #343a40;
    }

    &:active,
    &.${active} {
        background-color: #23272b;
        background-image: none;
        border-color: #1d2124;
    }
`;
