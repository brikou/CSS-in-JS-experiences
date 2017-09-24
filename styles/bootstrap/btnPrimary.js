import { css } from "emotion";

import { active } from "./active";

export const btnPrimary = css`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #007bff;
        border-color: #007bff;
    }

    &:active,
    &.${active} {
        background-color: #0069d9;
        background-image: none;
        border-color: #0062cc;
    }
`;
