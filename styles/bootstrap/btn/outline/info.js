import { css } from "emotion";

import { active } from "./../../active";

export const btnOutlineInfo = css`
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #17a2b8;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }
`;
