import { css } from "emotion";

import { active } from "./active";

export const btnSuccess = css`
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #28a745;
        border-color: #28a745;
    }

    &:active,
    &.${active} {
        background-color: #218838;
        background-image: none;
        border-color: #1e7e34;
    }
`;
