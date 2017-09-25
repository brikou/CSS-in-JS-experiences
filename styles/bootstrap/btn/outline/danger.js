import { css } from "emotion";

import { active } from "../../active";

export const btnOutlineDanger = css`
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #dc3545;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }
`;
