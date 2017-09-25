import { css } from "emotion";

import { active } from "../../active";

export const btnOutlineLight = css`
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;

    &:hover {
        color: #fff;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #f8f9fa;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }
`;
