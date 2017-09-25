import { css } from "emotion";

import { active } from "../../active";

export const btnOutlineSecondary = css`
    color: #868e96;
    background-color: transparent;
    background-image: none;
    border-color: #868e96;

    &:hover {
        color: #fff;
        background-color: #868e96;
        border-color: #868e96;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #868e96;
        border-color: #868e96;
    }
`;
