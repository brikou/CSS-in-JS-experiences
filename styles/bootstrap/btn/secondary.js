import { css } from "emotion";

import { active } from "./../active";

export const btnSecondary = css`
    color: #fff;
    background-color: #868e96;
    border-color: #868e96;

    &:hover {
        color: #fff;
        background-color: #727b84;
        border-color: #6c757d;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #868e96;
        border-color: #868e96;
    }

    &:active,
    &.${active} {
        background-color: #727b84;
        background-image: none;
        border-color: #6c757d;
    }
`;
