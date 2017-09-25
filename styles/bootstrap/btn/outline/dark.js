import { css } from "emotion";

import { active } from "../../active";

export const btnOutlineDark = css`
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #343a40;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }
`;
