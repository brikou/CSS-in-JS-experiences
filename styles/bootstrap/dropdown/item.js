import { css } from "emotion";

import { active } from "../active";

export const dropdownItem = css`
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: normal;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background: none;
    border: 0;

    &:focus,
    &:hover {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &.${active}, &:active {
        color: #fff;
        text-decoration: none;
        background-color: #007bff;
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: transparent;
    }
`;
