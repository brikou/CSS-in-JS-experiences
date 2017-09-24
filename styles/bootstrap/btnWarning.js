import { css } from "emotion";

import { active } from "./active";

export const btnWarning = css`
    color: #111;
    background-color: #ffc107;
    border-color: #ffc107;

    &:hover {
        color: #111;
        background-color: #e0a800;
        border-color: #d39e00;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:active,
    &.${active} {
        background-color: #e0a800;
        background-image: none;
        border-color: #d39e00;
    }
`;
