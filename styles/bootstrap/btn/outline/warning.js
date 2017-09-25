import { css } from "emotion";

import { active } from "../../active";

export const btnOutlineWarning = css`
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;

    &:hover {
        color: #fff;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #ffc107;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #ffc107;
        border-color: #ffc107;
    }
`;
