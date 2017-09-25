import { css } from "emotion";

import { active } from "../../active";

export const btnOutlinePrimary = css`
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #007bff;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
`;
