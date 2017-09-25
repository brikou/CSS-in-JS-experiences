import { css } from "emotion";

import { active } from "./../active";

export const btnLink = css`
    font-weight: normal;
    color: #007bff;
    border-radius: 0;

    &,
    &:active,
    &.${active}, &:disabled {
        background-color: transparent;
    }

    &,
    &:focus,
    &:active {
        border-color: transparent;
        box-shadow: none;
    }

    &:hover {
        border-color: transparent;
    }

    &:focus,
    &:hover {
        color: #0056b3;
        text-decoration: underline;
        background-color: transparent;
    }

    &:disabled {
        color: #868e96;
    }

    &:disabled:focus,
    &:disabled:hover {
        text-decoration: none;
    }
`;
