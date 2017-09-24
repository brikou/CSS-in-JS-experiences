import { css } from "emotion";

import { active } from "./active";

export const btnDanger = css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:active,
    &.${active} {
        background-color: #c82333;
        background-image: none;
        border-color: #bd2130;
    }
`;
