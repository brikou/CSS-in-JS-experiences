import { css } from "emotion";

import { active } from "./../../active";

export const listGroupItem = css`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);

    &:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    &:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: #fff;
    }

    &.${active} {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
`;
