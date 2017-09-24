import { css } from "emotion";

import { active } from "./active";

export const btnOutlineSuccess = css`
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #28a745;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }
`;
