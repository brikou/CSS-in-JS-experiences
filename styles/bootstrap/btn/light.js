import { css } from "emotion";

import { active } from "../active";

export const btnLight = css`
    color: #111;
    background-color: #f8f9fa;
    border-color: #f8f9fa;

    &:hover {
        color: #111;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:active,
    &.${active} {
        background-color: #e2e6ea;
        background-image: none;
        border-color: #dae0e5;
    }
`;
